import CategoriesSection from "./categories-section";
import CtaSection from "./cta-section";
import FeaturesSection from "./features-section";
import HeroSection from "./hero-section";
import HowWorkSection from "./how.work-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FeaturesSection />
      <CategoriesSection />
      <HowWorkSection />
      <CtaSection />
    </div>
  );
}
