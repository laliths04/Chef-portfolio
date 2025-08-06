"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden"
            initial={{ x: -100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/saminathan.jpeg"
              alt="Saminathan - Pastry Chef"
              fill
              className="object-cover"
            />
          </motion.div>

          <div className="space-y-6">
            <motion.h2
              className="text-3xl md:text-4xl font-bold"
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              About Me
            </motion.h2>
            <motion.div
              className="space-y-4"
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p className="text-lg text-muted-foreground">
                Hello! I'm Saminathan, a passionate pastry chef with a solid foundation in culinary arts through my B.Sc in Catering and Hotel Administration from Alagappa University.
              </p>
              <p className="text-lg text-muted-foreground">
                My journey in the culinary world began with training at the prestigious Savoy IHCL Seleqtions, where I honed my skills in food and beverage production. Later, I refined my craft as an Assistant Chef in the Pastry Production Department at Cafe7.
              </p>
              <p className="text-lg text-muted-foreground">
                My Makining style blends traditional Indian flavors with modern pastry techniques, creating unique desserts that tell a story of heritage and innovation. I believe in bringing a touch of desi magic to every sweet creation!
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}