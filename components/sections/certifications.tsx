"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Award, ExternalLink, Download } from "lucide-react";

const certifications = [
  {
    id: 1,
    title: "10th Certificate",
    company: "Rajavignesh HSS Melamathur",
    year: "2014",
    description: "My 10th standard certificate from Rajavignesh Higher Secondary School, Melamathur.",
    pdfUrl: "/cert/10th.pdf"
  },
  {
    id: 2,
    title: "12th Certificate",
    company: "Eden Garden Hr Sec School",
    year: "2016",
    description: "My 12th standard certificate from Eden Garden Higher Secondary School.",
    pdfUrl: "/cert/12th.pdf"
  },
  {
    id: 3,
    title: "Marksheets",
    company: "Alagappa University",
    year: "2017",
    description: "My B.SC in Catering and Hotel Management first year diploma from Alagappa University.",
    pdfUrl: "/cert/cer.pdf"
  },
  {
    id: 6,
    title: "On-job Training Certificate",
    company: "Savoy IHCL Seleqtions",
    year: "2019",
    description: "Certification in food and beverage management, focusing on service excellence and operational efficiency.",
    pdfUrl: "/cert/savoy.pdf"
  },
  {
    id: 7,
    title: "IET 2 Certificate",
    company: "Club Mahindra",
    year: "2018",
    description: "Certification in creating healthier dessert alternatives using natural sweeteners and nutritious ingredients.",
    pdfUrl: "/cert/club_ma.pdf"
  },
  {
    id: 8,
    title: "IET 1 Certificate",
    company: "Le Poshe",
    year: "2017",
    description: "Specialized certification in multi-tier wedding cake construction, design principles, and event coordination.",
    pdfUrl: "/cert/leposhe.pdf"
  },
  {
    id: 9,
    title: "Pastry Production",
    company: "Cafe 7",
    year: "2020",
    description: "Certification in advanced pastry production techniques, focusing on quality control and large-scale production.",
    pdfUrl: "/cert/cafe7.pdf"
  },
  {
    id: 10,
    title: "BSC Degree",
    company: "Alagappa University",
    year: "2019",
    description: "Received my diploma degree in Catering and Hotel Management from Alagappa University.",
    pdfUrl: "/cert/diploma.pdf"
  },
  {
    id: 11,
    title: "Provisional Certificate",
    company: "Alagappa University",
    year: "2019",
    description: "Received my provisional certificate in Catering and Hotel Management from Alagappa University.",
    pdfUrl: "/cert/provision.pdf"
  },
  {
    id: 12,
    title: "Creativity Certificate",
    company: "Chocolateness Central Kitchen",
    year: "2024",
    description: "Master-level certification in sugar art, including pulled sugar, blown sugar, and sculptural decorative elements.",
    pdfUrl: "/cert/cr.pdf"
  },
];

export default function Certifications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCertification, setSelectedCertification] = useState<typeof certifications[0] | null>(null);

  const downloadPDF = () => {
    if (selectedCertification?.pdfUrl) {
      const link = document.createElement('a');
      link.href = selectedCertification.pdfUrl;
      link.download = `${selectedCertification.title}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const openInNewTab = () => {
    if (selectedCertification?.pdfUrl) {
      window.open(selectedCertification.pdfUrl, '_blank');
    }
  };

  return (
    <section id="certifications" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and specialized training that enhance my culinary expertise.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.05 * index }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <Card className="h-full bg-card hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center mb-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                      <Award className="h-8 w-8" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-center">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2 text-center">{cert.company}</p>
                  <p className="text-sm font-medium text-center mb-4">{cert.year}</p>
                  <Button 
                    variant="outline" 
                    onClick={() => setSelectedCertification(cert)}
                    className="w-full"
                    size="sm"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedCertification} onOpenChange={(open) => !open && setSelectedCertification(null)}>
        <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-hidden">
          {selectedCertification && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  {selectedCertification.title}
                </DialogTitle>
                <DialogDescription>
                  <span className="font-medium">{selectedCertification.company}</span> • {selectedCertification.year}
                </DialogDescription>
              </DialogHeader>
              
              <div className="my-4">
                <p className="text-muted-foreground mb-4">{selectedCertification.description}</p>
                
                {/* PDF Controls */}
                <div className="flex items-center justify-end mb-4 p-2 bg-muted rounded-lg gap-2">
                  <Button variant="outline" size="sm" onClick={openInNewTab}>
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Open in New Tab
                  </Button>
                  <Button variant="outline" size="sm" onClick={downloadPDF}>
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>

                {/* PDF Viewer */}
                <div className="border rounded-lg overflow-hidden max-h-[70vh] bg-gray-50">
                  <iframe
                    src={selectedCertification.pdfUrl}
                    width="100%"
                    height="600px"
                    title={`${selectedCertification.title} Certificate`}
                    className="border-0"
                    onError={() => {
                      console.error('Failed to load PDF:', selectedCertification.pdfUrl);
                    }}
                  />
                  <div className="p-4 text-center text-sm text-muted-foreground border-t">
                    <p>If the PDF doesn't display properly, try downloading it or opening in a new tab.</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <Button variant="outline" onClick={() => setSelectedCertification(null)}>
                  Close
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}