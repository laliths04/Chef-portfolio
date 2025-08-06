"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Separator } from "@/components/ui/separator";
import { 
  GraduationCap, 
  Briefcase, 
  Award, 
  Star 
} from "lucide-react";

const experiences = [
  {
    id: 1,
    icon: <Briefcase className="h-6 w-6" />,
    year: "May 2 - July 13, 2019",
    title: "Culinary Training",
    institution: "Savoy IHCL Seleqtions",
    description: "Trained in Food and Beverage production, learning professional kitchen operations and culinary techniques. Gained hands-on experience in hotel industry standards."
  },
  {
    id: 2,
    icon: <Briefcase className="h-6 w-6" />,
    year: "Dec 4, 2020 - Aug 3, 2022",
    title: "Assistant Chef",
    institution: "Cafe7, Pastry Production Department",
    description: "Specialized in pastry production, creating a variety of desserts and sweet treats for the café menu. Developed expertise in cake decoration and Indian fusion desserts."
  }
];

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey in the culinary industry that shaped my expertise.
          </p>
        </motion.div>

        <div ref={ref} className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border" />

            {/* Timeline items */}
            {experiences.map((item, index) => (
              <motion.div
                key={item.id}
                className="relative mb-12 last:mb-0 pl-20"
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Timeline icon */}
                <div className="absolute left-0 top-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center z-10">
                  <div className="text-primary">{item.icon}</div>
                </div>

                <div className="bg-card rounded-lg p-6 shadow-sm">
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <span className="text-sm font-medium bg-primary/10 px-3 py-1 rounded-full">
                      {item.year}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-3">{item.institution}</p>
                  <Separator className="my-3" />
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}