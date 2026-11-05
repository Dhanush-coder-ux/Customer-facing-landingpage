import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Download from "../components/Download";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Showcase from "../components/Showcase";
import Discover from "../components/Discover";
import Why from "../components/Why";
import Benefits from "../components/Benefits";
import FAQ from "../components/FAQ";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-page">
      <Navbar />
      <main id="main-content" className="flex-1">
        <Hero />
        <Features />
        <HowItWorks />
        <Showcase />
        <Discover />
        <Why />
        <Benefits />
        <Download />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
