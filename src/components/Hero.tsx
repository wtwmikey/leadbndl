import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-24 md:pt-26">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      
      {/* Animated background shapes */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-glow delay-1000" />
      
      <div className="container relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="pt-3 md:pt-5"
        >
          {/* Main headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 text-balance mt-3 md:mt-5">
            Complete Marketing &{" "}
            <span className="gradient-text">Automation Solutions</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 text-balance">
            From paid advertising that turns clicks into clients, to AI-powered automation that never misses a lead, 
            to stunning websites and professional video content—we provide everything you need to grow your business 
            with a complete, integrated marketing system.
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button variant="hero" size="xl" asChild>
              <a href="https://api.leadconnectorhq.com/widget/booking/D4J48KVYYJd0x93PKyvo" target="_blank" rel="noopener noreferrer">
                Book A Free Call
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </motion.div>

          {/* Value propositions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto px-2"
          >
            {[
              { icon: "📱", title: "Lead Generation", description: "Meta & Google Ads" },
              { icon: "🤖", title: "AI Automation", description: "24/7 Operations" },
              { icon: "🎨", title: "Web & Video", description: "Design & Editing" },
              { icon: "📞", title: "AI Receptionist", description: "Never Miss Calls" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl mb-2">
                  {item.icon}
                </div>
                <div className="text-base sm:text-lg font-bold mb-1">{item.title}</div>
                <div className="text-xs sm:text-sm text-muted-foreground">{item.description}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;