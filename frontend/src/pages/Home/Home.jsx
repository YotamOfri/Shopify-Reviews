import ContentSection from "./ContentSection";
import HeroSection from "./HeroSection";

export default function Home() {
  return (
    <div className="overflow-x-hidden flex flex-col">
      <HeroSection></HeroSection>
      <ContentSection></ContentSection>
    </div>
  );
}
