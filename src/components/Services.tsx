import { motion } from "framer-motion";
import { Facebook, Target, TrendingUp, Users } from "lucide-react";

const services = [
  {
    icon: Facebook,
    title: "Meta Ads",
    description:
      "Strategic Facebook & Instagram campaigns that reach your ideal clients where they spend their time.",
    features: ["Lookalike Audiences", "Retargeting Funnels", "Lead Forms"],
  },
  {
    icon: Target,
    title: "Google Ads",
    description:
      "Capture high-intent searches and turn searchers into buyers with precision-targeted campaigns.",
    features: ["Search Campaigns", "Display Network", "YouTube Ads"],
  },
  {
    icon: TrendingUp,
    title: "Conversion Optimization",
    description:
      "Every click matters. We optimize your landing pages and funnels for maximum conversions.",
    features: ["A/B Testing", "Landing Pages", "Lead Magnets"],
  },
  {
    icon: Users,
    title: "Lead Nurturing",
    description:
      "Turn cold leads into warm prospects with automated follow-up sequences that close deals.",
    features: ["Email Sequences", "SMS Follow-ups", "CRM Integration"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            What We <span className="gradient-text">Do Best</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Full-service paid advertising that delivers real, measurable results for your business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, fIndex) => (
                    <span
                      key={fIndex}
                      className="px-3 py-1 text-sm rounded-full bg-secondary text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;