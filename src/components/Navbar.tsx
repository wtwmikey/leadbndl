import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#process", label: "How It Works" },
    // { href: "#testimonials", label: "Testimonials" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border"
    >
      <nav className="container max-w-6xl mx-auto px-4 h-20 flex items-center justify-center md:justify-between relative">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="LeadBNDL" className="h-14 w-auto" />
          <span className="text-2xl md:text-3xl font-bold">Lead<span className="gradient-text">BNDL</span></span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button variant="default" size="sm" asChild>
            <a href="https://api.leadconnectorhq.com/widget/booking/D4J48KVYYJd0x93PKyvo" target="_blank" rel="noopener noreferrer">
              Get Started
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground absolute right-4"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background border-b border-border"
        >
          <div className="container px-4 py-4 flex flex-col gap-4 items-end">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2 text-right"
              >
                {link.label}
              </a>
            ))}
            <Button variant="default" size="sm" className="w-fit" asChild>
              <a href="https://api.leadconnectorhq.com/widget/booking/D4J48KVYYJd0x93PKyvo" target="_blank" rel="noopener noreferrer">
                Get Started
              </a>
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;