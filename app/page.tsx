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

export default function Home() {
  return (
    <main className="min-h-screen pb-20 md:pb-0">
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
