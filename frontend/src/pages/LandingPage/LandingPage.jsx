import ContentSection from "./ContentSection";
import HeroSection from "./HeroSection";

export default function LandingPage() {
  return (
    <div className="overflow-x-hidden flex flex-col">
      <HeroSection></HeroSection>
      <ContentSection></ContentSection>
    </div>
  );
}
