"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Separator } from "@/components/ui/separator";
import { GraduationCap } from "lucide-react";

const education = [
  {
    id: 1,
    icon: <GraduationCap className="h-6 w-6" />,
    year: "March 2014",
    title: "SSLC",
    institution: "Rajavignesh HSS Melamathur",
    description: "Completed Secondary School Leaving Certificate with good academic standing, laying the foundation for my culinary journey."
  },
  {
    id: 2,
    icon: <GraduationCap className="h-6 w-6" />,
    year: "March 2016",
    title: "HSC",
    institution: "Eden Garden Hr Sec School",
    description: "Completed Higher Secondary Certificate with focus on core subjects, preparing for specialized culinary education."
  },
  {
    id: 3,
    icon: <GraduationCap className="h-6 w-6" />,
    year: "April 2019",
    title: "B.Sc Catering and Hotel Administration",
    institution: "Alagappa University",
    description: "Gained comprehensive knowledge in culinary arts, hospitality management, food service operations, and specialized in pastry techniques."
  }
];

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey that provided the foundation for my culinary expertise.
          </p>
        </motion.div>

        <div ref={ref} className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border" />

            {/* Timeline items */}
            {education.map((item, index) => (
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