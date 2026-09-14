import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import HeroSection from "./components/sections/HeroSection";
import VideoComparison from "./components/sections/VideoComparison";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import VisualLearningBanner from "./components/sections/VisualLearningBanner";
import ExperienceSection from "./components/sections/ExperienceSection";
import FeaturesSection from "./components/sections/FeaturesSection";
import AudienceSection from "./components/sections/AudienceSection";
import LearningKitSection from "./components/sections/LearningKitSection";
import PricingSection from "./components/sections/PricingSection";
import FAQSection from "./components/sections/FAQSection";
import SyllabusSection from "./components/sections/SyllabusSection";
import ComparisonSection from "./components/sections/ComparisonSection";
import DreamSection from "./components/sections/DreamSection";
import EngagementSection from "./components/sections/EngagementSection";
import FinalCTASection from "./components/sections/FinalCTASection";
import ContactSection from "./components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <VideoComparison />
        <TestimonialsSection />
        <VisualLearningBanner />
        <ExperienceSection />
        <FeaturesSection />
        <AudienceSection />
        <LearningKitSection />
        <PricingSection />
        <FAQSection />
        <SyllabusSection />
        <ComparisonSection />
        <DreamSection />
        <EngagementSection />
        <FinalCTASection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
