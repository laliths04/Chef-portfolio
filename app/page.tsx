import Navbar from "@/components/navbar";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Portfolio from "@/components/sections/portfolio";
import Skills from "@/components/sections/skills";
import PhoneScreenshots from "@/components/sections/phone-screenshots";
import Education from "@/components/sections/education";
import Experience from "@/components/sections/experience";
import Certifications from "@/components/sections/certifications";
import Services from "@/components/sections/services";
import Gallery from "@/components/sections/gallery";
import Contact from "@/components/sections/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Skills />
      <PhoneScreenshots />
      <Education />
      <Experience />
      <Certifications />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}