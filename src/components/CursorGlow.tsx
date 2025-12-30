import { useEffect, useRef, useState } from "react";

const CursorGlow = () => {
  const glowRef = useRef<HTMLDivElement>(null);
  const cursorHighlightRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>();
  const targetPosition = useRef({ x: 0, y: 0 });
  const currentPosition = useRef({ x: 0, y: 0 });
  const cursorPosition = useRef({ x: 0, y: 0 });
  const cursorHighlightPosition = useRef({ x: 0, y: 0 });
  const targetSize = useRef({ width: 100, height: 100 });
  const currentSize = useRef({ width: 100, height: 100 });
  const isVisible = useRef(true);
  const [isHovering, setIsHovering] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const hoveredElementRef = useRef<Element | null>(null);

  const BASE_SIZE = 100; // Smaller base size
  const CURSOR_HIGHLIGHT_SIZE = 60; // Size of cursor highlight

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
      // Update target position and size if hovering over an element
      if (hoveredElementRef.current) {
        const rect = hoveredElementRef.current.getBoundingClientRect();
        targetPosition.current = {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        };
        // Calculate size to fill the button (add some padding for better visual)
        const padding = 20;
        targetSize.current = {
          width: Math.max(rect.width + padding, BASE_SIZE),
          height: Math.max(rect.height + padding, BASE_SIZE),
        };
      } else {
        targetSize.current = { width: BASE_SIZE, height: BASE_SIZE };
      }

      // Smooth interpolation for position (slower for smoother lock)
      const positionLerp = hoveredElementRef.current ? 0.08 : 0.15;
      currentPosition.current.x += (targetPosition.current.x - currentPosition.current.x) * positionLerp;
      currentPosition.current.y += (targetPosition.current.y - currentPosition.current.y) * positionLerp;

      // Smooth interpolation for size
      const sizeLerp = 0.1;
      currentSize.current.width += (targetSize.current.width - currentSize.current.width) * sizeLerp;
      currentSize.current.height += (targetSize.current.height - currentSize.current.height) * sizeLerp;

      // Smooth interpolation for cursor highlight position
      cursorHighlightPosition.current.x += (cursorPosition.current.x - cursorHighlightPosition.current.x) * 0.2;
      cursorHighlightPosition.current.y += (cursorPosition.current.y - cursorHighlightPosition.current.y) * 0.2;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${currentPosition.current.x}px, ${currentPosition.current.y}px) translate(-50%, -50%)`;
        glowRef.current.style.width = `${currentSize.current.width}px`;
        glowRef.current.style.height = `${currentSize.current.height}px`;
        glowRef.current.style.opacity = isVisible.current ? "1" : "0";
      }

      if (cursorHighlightRef.current) {
        cursorHighlightRef.current.style.transform = `translate(${cursorHighlightPosition.current.x}px, ${cursorHighlightPosition.current.y}px) translate(-50%, -50%)`;
        cursorHighlightRef.current.style.opacity = isVisible.current && hoveredElementRef.current ? "1" : "0";
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    const updateCursorPosition = (e: MouseEvent) => {
      isVisible.current = true;
      cursorPosition.current = { x: e.clientX, y: e.clientY };

      // Check if hovering over clickable elements
      const element = document.elementFromPoint(e.clientX, e.clientY);
      if (element) {
        // Try to find a clickable parent element
        const clickableElement = element.closest("a, button, [role='button'], [onclick]");
        
        // If no parent, check if the element itself is clickable
        const isElementClickable =
          element.tagName === "A" ||
          element.tagName === "BUTTON" ||
          element.getAttribute("role") === "button" ||
          window.getComputedStyle(element).cursor === "pointer";

        const finalClickableElement = clickableElement || (isElementClickable ? element : null);

        if (finalClickableElement) {
          if (hoveredElementRef.current !== finalClickableElement) {
            hoveredElementRef.current = finalClickableElement;
            setIsHovering(true);
          }
        } else {
          hoveredElementRef.current = null;
          setIsHovering(false);
          targetPosition.current = { x: e.clientX, y: e.clientY };
          targetSize.current = { width: BASE_SIZE, height: BASE_SIZE };
        }
      } else {
        hoveredElementRef.current = null;
        setIsHovering(false);
        targetPosition.current = { x: e.clientX, y: e.clientY };
        targetSize.current = { width: BASE_SIZE, height: BASE_SIZE };
      }
    };

    const handleMouseLeave = () => {
      isVisible.current = false;
      setIsHovering(false);
      hoveredElementRef.current = null;
      targetSize.current = { width: BASE_SIZE, height: BASE_SIZE };
      cursorPosition.current = { x: 0, y: 0 };
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
      {/* Main glow - locks to button */}
      <div
        ref={glowRef}
        className="absolute rounded-full blur-3xl"
        style={{
          left: "0",
          top: "0",
          width: `${BASE_SIZE}px`,
          height: `${BASE_SIZE}px`,
          background: isHovering
            ? "radial-gradient(circle, hsl(173 80% 50% / 0.65) 0%, transparent 70%)"
            : "radial-gradient(circle, hsl(173 80% 50% / 0.35) 0%, transparent 70%)",
          willChange: "transform, width, height",
          transition: "background 0.3s ease-out, opacity 0.3s ease-out",
        }}
      />
      {/* Cursor highlight - follows cursor when locked on button */}
      <div
        ref={cursorHighlightRef}
        className="absolute rounded-full blur-2xl"
        style={{
          left: "0",
          top: "0",
          width: `${CURSOR_HIGHLIGHT_SIZE}px`,
          height: `${CURSOR_HIGHLIGHT_SIZE}px`,
          background: "radial-gradient(circle, hsl(173 80% 50% / 0.9) 0%, transparent 60%)",
          willChange: "transform, opacity",
          transition: "opacity 0.2s ease-out",
        }}
      />
    </div>
  );
};

export default CursorGlow;

