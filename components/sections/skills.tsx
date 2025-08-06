"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Cake, 
  Utensils, 
  Palette, 
  Sparkles, 
  Leaf, 
  Camera, 
  Droplet, 
  Coffee 
} from "lucide-react";

const skills = [
  {
    icon: <Cake className="h-8 w-8" />,
    title: "Indian Sweets",
    description: "Creating traditional mithai with modern presentation and techniques."
  },
  {
    icon: <Utensils className="h-8 w-8" />,
    title: "Fusion Desserts",
    description: "Blending Indian flavors with international dessert styles for unique creations."
  },
  {
    icon: <Palette className="h-8 w-8" />,
    title: "Flavor Pairing",
    description: "Combining desi spices and ingredients in unexpected but delightful ways."
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: "Garnishing",
    description: "Creating beautiful decorative elements using traditional Indian ingredients."
  },
  {
    icon: <Leaf className="h-8 w-8" />,
    title: "Eggless Baking",
    description: "Specializing in vegetarian desserts without compromising on texture or flavor."
  },
  {
    icon: <Camera className="h-8 w-8" />,
    title: "Food Styling",
    description: "Presenting desserts with a contemporary aesthetic while honoring traditional roots."
  },
  {
    icon: <Droplet className="h-8 w-8" />,
    title: "Chocolate Work",
    description: "Crafting intricate chocolate decorations with Indian-inspired patterns and motifs."
  },
  {
    icon: <Coffee className="h-8 w-8" />,
    title: "Beverage Pairing",
    description: "Matching desserts with the perfect chai, coffee, or traditional Indian drinks."
  }
];

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="skills" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Specialized Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Techniques and expertise developed over years of dedicated practice and innovation.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="mb-4 text-primary">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-muted-foreground">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}