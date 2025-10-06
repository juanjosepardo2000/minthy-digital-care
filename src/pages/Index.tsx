import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Journey } from "@/components/Journey";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Future } from "@/components/Future";

const Index = () => {
  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <Header />
      <Hero />
      <About />
      <Services />
      <Journey />
      <Future />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
      
    </div>
  );
};

export default Index;
