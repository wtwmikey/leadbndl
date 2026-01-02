import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const CTA = () => {
  return (
    <section id="cta" className="py-24 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-radial opacity-40" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center p-12 md:p-16 rounded-3xl bg-card border border-border relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">
                Limited Spots Available
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Ready to <span className="gradient-text">Scale Your Business</span>?
            </h2>
            
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
              Book a free strategy call and discover how we can help you generate 
              more qualified leads and book more clients.
            </p>
            
            <div className="flex justify-center">
              <Button variant="hero" size="xl" asChild>
                <a href="https://api.leadconnectorhq.com/widget/booking/D4J48KVYYJd0x93PKyvo" target="_blank" rel="noopener noreferrer">
                  Book A Call
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground mt-6">
              No commitment required • 30-minute call • Custom strategy included
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;