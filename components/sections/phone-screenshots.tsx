"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const phoneScreenshots = [
  {
    id: 1,
    image: "reviews/1.jpeg",
    caption: "Behind the scenes of cake decoration process",
    description: "Capturing the intricate details of sugar work and fondant application"
  },
  {
    id: 2,
    image: "reviews/2.jpeg",
    caption: "Fresh batch of Indian fusion desserts",
    description: "Showcasing the perfect blend of traditional and modern techniques"
  },
  {
    id: 3,
    image: "reviews/3.jpeg",
    caption: "Wedding cake setup at venue",
    description: "Multi-tier celebration cake ready for the special moment"
  },
  {
    id: 4,
    image: "reviews/4.jpeg",
    caption: "Chocolate tempering workshop session",
    description: "Teaching the art of perfect chocolate work to fellow chefs"
  },
];

export default function PhoneScreenshots() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (autoplay) {
      interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % phoneScreenshots.length);
      }, 4000);
    }
    
    return () => clearInterval(interval);
  }, [autoplay]);

  const next = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev + 1) % phoneScreenshots.length);
  };

  const prev = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev - 1 + phoneScreenshots.length) % phoneScreenshots.length);
  };

  return (
    <section id="phone-screenshots" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-fixed opacity-5 dark:opacity-10"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Behind the Scenes</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Candid moments from my kitchen and workspace, captured on mobile.
          </p>
        </motion.div>

        <div ref={ref} className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <Card className="bg-card/80 backdrop-blur-sm border-none shadow-lg">
                <CardContent className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="relative w-64 h-96 mx-auto md:mx-0 flex-shrink-0">
                      {/* Phone frame */}
                      <div className="absolute inset-0 bg-gray-800 rounded-[2.5rem] p-2 shadow-2xl">
                        <div className="w-full h-full bg-black rounded-[2rem] overflow-hidden relative">
                          {/* Phone notch */}
                          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-10"></div>
                          {/* Screenshot */}
                          <div className="w-full h-full relative">
                            <Image
                              src={phoneScreenshots[current].image}
                              alt={phoneScreenshots[current].caption}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-1 text-center md:text-left">
                      <Smartphone className="h-12 w-12 text-primary/20 mb-6 mx-auto md:mx-0" />
                      <h3 className="text-2xl font-semibold mb-4">
                        {phoneScreenshots[current].caption}
                      </h3>
                      <p className="text-lg text-muted-foreground">
                        {phoneScreenshots[current].description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 gap-2">
            {phoneScreenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoplay(false);
                  setCurrent(index);
                }}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  current === index ? "bg-primary" : "bg-primary/30"
                }`}
                aria-label={`Go to screenshot ${index + 1}`}
              />
            ))}
          </div>

          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 md:-translate-x-6">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-background/80 backdrop-blur-sm shadow-md"
              onClick={prev}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 md:translate-x-6">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-background/80 backdrop-blur-sm shadow-md"
              onClick={next}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}