import ServicesPreview from "../components/ServicesPreview";
import PortfolioHighlight from "../components/PortfolioHighlight";
import Testimonials from "../components/Testimonials";
import Hero from "../components/Hero";
import AboutPreview from "../components/AboutPreview";
import HowItWorks from "../components/HowItWorks";
import SignatureExperience from "../components/SignatureExperience";
import FinalCTA from "../components/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <HowItWorks />
      <PortfolioHighlight />
      <SignatureExperience />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
