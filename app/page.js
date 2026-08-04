import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MenuCards from "@/components/MenuCards";
import CaraOrder from "@/components/CaraOrder";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <MenuCards />
        <CaraOrder />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
