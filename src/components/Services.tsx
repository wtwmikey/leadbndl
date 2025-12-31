import { motion } from "framer-motion";
import { Target, Bot, Phone, Layout } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots,
} from "@/components/ui/carousel";

const services = [
  {
    icon: Target,
    title: "Meta & Google Ads",
    description:
      "Strategic paid advertising campaigns across Meta (Facebook & Instagram) and Google platforms that reach your ideal clients and capture high-intent searches to turn prospects into buyers.",
    features: ["Meta Ads", "Google Ads", "Lookalike Audiences", "Retargeting Funnels", "Search Campaigns", "YouTube Ads"],
  },
  {
    icon: Bot,
    title: "AI Automation",
    description:
      "Intelligent automation solutions that streamline your business operations, including text and email automation that engage leads instantly with automated messages and sequences.",
    features: ["Text & Email Automation", "Workflow Automation", "Smart Routing", "24/7 Operations"],
  },
  {
    icon: Phone,
    title: "AI Receptionist",
    description:
      "Never miss a call again. Our AI receptionist handles incoming calls professionally, schedules appointments, qualifies leads, and automatically calls back prospects at optimal times.",
    features: ["24/7 Availability", "Natural Conversations", "Automated Callbacks", "Appointment Scheduling"],
  },
  {
    icon: Layout,
    title: "Website Design",
    description:
      "Beautiful, conversion-focused websites that showcase your brand and turn visitors into customers.",
    features: ["Custom Design", "Mobile Responsive", "SEO Optimized"],
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
            AI-powered automation and lead management solutions that ensure every lead gets the attention they deserve, plus beautiful website design and full-service paid advertising that delivers real, measurable results.
          </p>
        </motion.div>

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: false,
              dragFree: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {services.map((service, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="group relative p-6 sm:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 h-full">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative z-10">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-secondary flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                        <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                      </div>
                      
                      <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{service.title}</h3>
                      <p className="text-muted-foreground text-sm sm:text-base mb-4 sm:mb-6">{service.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, fIndex) => (
                          <span
                            key={fIndex}
                            className="px-2.5 sm:px-3 py-1 text-xs sm:text-sm rounded-full bg-secondary text-muted-foreground"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 lg:-left-16" />
            <CarouselNext className="hidden md:flex -right-12 lg:-right-16" />
            <CarouselDots />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Services;