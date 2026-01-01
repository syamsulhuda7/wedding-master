import AboutHero from "../components/about/AboutHero";
import AboutIdentity from "../components/about/AboutIdentity";
import AboutJourney from "../components/about/AboutJourney";
import TeamSection from "../components/about/TeamSection";
import TrustMetrics from "../components/about/TrustMetrics";

export default function About() {
  return (
    <div>
      <AboutHero />
      <AboutJourney />
      <TeamSection />
      <AboutIdentity />
      <TrustMetrics />
    </div>
  );
}
