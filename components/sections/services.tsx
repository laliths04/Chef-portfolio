"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Cake, 
  UtensilsCrossed, 
  GraduationCap, 
  BookOpen, 
  Camera, 
  Users 
} from "lucide-react";

const services = [
  {
    icon: <Cake className="h-10 w-10" />,
    title: "Custom Desserts",
    description: "Bespoke celebration cakes and Indian sweets designed for your special occasions, from weddings to festivals. Each creation is handcrafted with love and attention to detail.",
    features: [
      "Wedding & Birthday Cakes",
      "Traditional Indian Sweets",
      "Fusion Desserts",
      "Theme-based Designs",
      "Eggless Options Available",
      "Custom Flavors & Decorations"
    ]
  }
];

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Services Offered</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional pastry services tailored to your needs and occasions.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { duration: 0.2 }
              }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-primary/10 text-primary">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center">{service.title}</h3>
              <p className="text-muted-foreground mb-6 text-center">{service.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}