"use client";

import { motion } from "framer-motion";
import { Cake, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted py-12 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            className="flex items-center gap-2 text-xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Cake className="h-6 w-6" />
            <span>Saminathan's Sweet Creations</span>
          </motion.div>
          
          <motion.p
            className="text-muted-foreground max-w-md mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Creating memorable dessert experiences through Indian flavors and modern techniques.
          </motion.p>
          
          <motion.div
            className="flex items-center justify-center text-sm text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p>
              © {currentYear} Saminathan's Sweet Creations. Made with{" "}
              <Heart className="inline-block h-3 w-3 text-red-500" /> All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}