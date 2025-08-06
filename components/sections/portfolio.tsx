"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";


const pastries = [
  {
    id: 1,
    name: " Nutella mousse cake",
    description: "A rich, creamy delight featuring fluffy Nutella mousse layered over a moist chocolate base, topped with silky ganache for the ultimate indulgence.",
    image: "/cakes/signature/nebula.jpeg", // leave this alone
    details: "The Nutella Mousse Cake is a decadent treat combining layers of airy Nutella mousse and moist chocolate sponge, topped with silky ganache. Every bite delivers a perfect balance of creaminess and rich chocolate flavor, making it an irresistible choice for dessert lovers."  },{
    id: 2,
    name: " Pistachio upside down cake",
    description: "A fluffy cake enriched with the robust flavors of Chocolate AND pistachio.",
    image: "/cakes/signature/cassew.jpeg", // leave this alone
    details: "The Pistachio Upside Down Cake is a moist, nutty delight featuring a caramelized pistachio topping over soft, buttery sponge. With its unique presentation and rich, earthy flavor, it offers a perfect balance of sweetness and crunch, making it a standout dessert for any occasion."
  },
  {
    id: 3,
    name: "Chocolate cake",
    description: "A special cake made with layers of chocolate with Chocolate title.",
    image: "/cakes/signature/choco.jpeg", // leave this alone
    details: "Cake is a delightful dessert that features layers of chocolate cake interspersed with crunchy Kit Kat bars. The cake is frosted with a rich chocolate ganache and garnished with more Kit Kat pieces, making it a favorite among chocolate lovers."
  },
  
];

export default function Portfolio() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedPastry, setSelectedPastry] = useState<typeof pastries[0] | null>(null);

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Signature Creations</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my collection of handcrafted desserts, each one a unique blend of Indian flavors and modern techniques.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pastries.map((pastry, index) => (
            <motion.div
              key={pastry.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <Card className="overflow-hidden h-full bg-card hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-64 w-full">
                  <Image
                    src={pastry.image}
                    alt={pastry.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{pastry.name}</h3>
                  <p className="text-muted-foreground mb-4">{pastry.description}</p>
                  <Button 
                    variant="outline" 
                    onClick={() => setSelectedPastry(pastry)}
                    className="w-full"
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedPastry} onOpenChange={(open) => !open && setSelectedPastry(null)}>
        <DialogContent className="sm:max-w-[600px]">
          {selectedPastry && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedPastry.name}</DialogTitle>
                <DialogDescription>
                  {selectedPastry.description}
                </DialogDescription>
              </DialogHeader>
              <div className="relative h-64 w-full my-4 rounded-md overflow-hidden">
                <Image
                  src={selectedPastry.image}
                  alt={selectedPastry.name}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-muted-foreground">{selectedPastry.details}</p>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}