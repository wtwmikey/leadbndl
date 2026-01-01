import { Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-16 px-4 border-t border-border">
      <div className="container max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2 text-center sm:text-left relative">
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-4">
              <img src={logo} alt="LeadBNDL" className="h-10 w-auto" />
              <span className="text-2xl font-bold">Lead<span className="gradient-text">BNDL</span></span>
            </div>
            <p className="text-muted-foreground max-w-sm mx-auto sm:mx-0 mb-6">
              AI-powered automation and lead management solutions that ensure every lead gets the attention they deserve, plus strategic Meta and Google advertising.
            </p>
            <div className="flex gap-4 justify-center sm:justify-start">
              <a
                href="https://instagram.com/leadbndl"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#services"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#cta"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Book
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center sm:text-left">
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a href="mailto:info@leadbndl.online" className="hover:text-foreground transition-colors">
                  info@leadbndl.online
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2026 LeadBNDL. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy-policy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;