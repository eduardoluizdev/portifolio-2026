import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileNav from "@/components/MobileNav";
import StructuredData from "@/components/StructuredData";

export default function Home() {
  return (
    <main className="min-h-screen pb-20 md:pb-0">
      <StructuredData />
      <Header />
      <Hero />
      <Projects />
      <Technologies />
      <Experience />
      <About />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <MobileNav />
    </main>
  );
}
