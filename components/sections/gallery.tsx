
"use client";

import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const galleryImages = [
  "cakes/1.jpg",
  "cakes/2.jpg",
  "cakes/3.jpg",
  "cakes/4.jpg",
  "cakes/5.jpg",
  "cakes/6.jpg",
  "cakes/7.jpg",
  "cakes/8.jpg",
  "cakes/9.jpg",
  "cakes/10.jpg",
  "cakes/11.jpg",
  "cakes/12.jpg",
  "cakes/13.jpg",
  "cakes/14.jpg",

];

export default function Gallery() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Duplicate the images to create a seamless loop
  const duplicatedImages = [...galleryImages, ...galleryImages];
  
  useEffect(() => {
    if (inView) {
      controls.start({
        x: "-50%",
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        },
      });
    }
  }, [controls, inView]);

  return (
    <section id="gallery" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 mb-16">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pastry Gallery</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my finest creations and culinary artistry.
          </p>
        </motion.div>
      </div>

      <div ref={ref} className="relative w-full overflow-hidden">
        <motion.div
          ref={containerRef}
          className="flex items-center gap-6 py-4"
          animate={controls}
          initial={{ x: 0 }}
          style={{ width: "fit-content" }}
        >
          {duplicatedImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative w-64 h-64 flex-shrink-0 rounded-xl overflow-hidden"
              whileHover={{ scale: 1.05, zIndex: 10 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={image}
                alt={`Gallery image ${index}`}
                fill
                className="object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}