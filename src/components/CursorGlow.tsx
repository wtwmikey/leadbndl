import { useEffect, useRef, useState } from "react";

const CursorGlow = () => {
  const glowRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>();
  const targetPosition = useRef({ x: 0, y: 0 });
  const currentPosition = useRef({ x: 0, y: 0 });
  const isVisible = useRef(true);
  const [isHovering, setIsHovering] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const BASE_SIZE = 300; // Smaller base size
  const HOVER_SIZE = BASE_SIZE * 1.2; // 20% larger when hovering

  useEffect(() => {
    // Check if device is desktop (has hover capability and fine pointer)
    const checkIsDesktop = () => {
      const hasHover = window.matchMedia("(hover: hover)").matches;
      const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
      const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      return hasHover && hasFinePointer && !isTouchDevice;
    };

    setIsDesktop(checkIsDesktop());

    // Re-check on resize
    const handleResize = () => {
      setIsDesktop(checkIsDesktop());
    };
    window.addEventListener("resize", handleResize);

    if (!checkIsDesktop()) {
      return () => window.removeEventListener("resize", handleResize);
    }

    const animate = () => {
      // Smooth interpolation for smoother movement
      currentPosition.current.x += (targetPosition.current.x - currentPosition.current.x) * 0.15;
      currentPosition.current.y += (targetPosition.current.y - currentPosition.current.y) * 0.15;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${currentPosition.current.x}px, ${currentPosition.current.y}px) translate(-50%, -50%)`;
        glowRef.current.style.opacity = isVisible.current ? "1" : "0";
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    const updateCursorPosition = (e: MouseEvent) => {
      targetPosition.current = { x: e.clientX, y: e.clientY };
      isVisible.current = true;

      // Check if hovering over clickable elements
      const element = document.elementFromPoint(e.clientX, e.clientY);
      if (element) {
        const isClickable =
          element.tagName === "A" ||
          element.tagName === "BUTTON" ||
          element.getAttribute("role") === "button" ||
          window.getComputedStyle(element).cursor === "pointer" ||
          element.closest("a, button, [role='button'], [onclick]") !== null;
        
        setIsHovering(isClickable);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => {
      isVisible.current = false;
      setIsHovering(false);
    };

    window.addEventListener("mousemove", updateCursorPosition, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      window.removeEventListener("mousemove", updateCursorPosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (!isDesktop) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      <div
        ref={glowRef}
        className="absolute rounded-full blur-3xl"
        style={{
          left: "0",
          top: "0",
          width: `${isHovering ? HOVER_SIZE : BASE_SIZE}px`,
          height: `${isHovering ? HOVER_SIZE : BASE_SIZE}px`,
          background: isHovering
            ? "radial-gradient(circle, hsl(173 80% 50% / 0.4) 0%, transparent 70%)"
            : "radial-gradient(circle, hsl(173 80% 50% / 0.15) 0%, transparent 70%)",
          willChange: "transform, width, height",
          transition: "width 0.3s ease-out, height 0.3s ease-out, background 0.3s ease-out, opacity 0.3s ease-out",
        }}
      />
    </div>
  );
};

export default CursorGlow;

