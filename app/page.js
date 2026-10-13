import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import HeroSection from "./components/sections/HeroSection";
import ProblemLeaksSection from "./components/sections/ProblemLeaksSection";
import MethodologySection from "./components/sections/MethodologySection";
import ProductControlRoomSection from "./components/sections/ProductControlRoomSection";
import DailyMissionSection from "./components/sections/DailyMissionSection";
import BlueprintSection from "./components/sections/BlueprintSection";
import VisualLearningSection from "./components/sections/VisualLearningSection";
import StudentTypesSection from "./components/sections/StudentTypesSection";
import ParentsSection from "./components/sections/ParentsSection";
import InstitutionsSection from "./components/sections/InstitutionsSection";
import FAQSection from "./components/sections/FAQSection";
import FinalCTASection from "./components/sections/FinalCTASection";
import ContactSection from "./components/sections/ContactSection";

export default function Home() {
  return (
    <div style={{ backgroundColor: "var(--color-background)", minHeight: "100vh" }}>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <ProblemLeaksSection />
        <MethodologySection />
        <ProductControlRoomSection />
        <DailyMissionSection />
        <BlueprintSection />
        <VisualLearningSection />
        <StudentTypesSection />
        <ParentsSection />
        <InstitutionsSection />
        <FAQSection />
        <FinalCTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
