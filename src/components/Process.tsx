import { motion } from "framer-motion";
import { Search, Target, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Discovery",
    description:
      "We start by understanding your business, goals, challenges, and what you need. No assumptions—we listen first to identify the right solutions for you.",
  },
  {
    icon: Target,
    step: "02",
    title: "Strategy",
    description:
      "Based on your needs, we develop a custom strategy and plan. Whether it's ads, automation, AI receptionist, or website design—we create the roadmap.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Execution",
    description:
      "We implement the plan: launch campaigns, set up automation workflows, configure your AI receptionist, and build your website. Everything goes live.",
  },
  {
    icon: TrendingUp,
    step: "04",
    title: "Optimize & Scale",
    description:
      "We continuously monitor, optimize, and scale across all channels to maximize your ROI and convert more leads into booked clients.",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-24 px-4 bg-card/50">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            How We <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A proven process that consistently delivers results for our clients.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-40px)] h-px bg-gradient-to-r from-primary/50 to-transparent" />
              )}
              
              <div className="text-center">
                <div className="relative inline-flex mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-secondary flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                    {step.step}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;