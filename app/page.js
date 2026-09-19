import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import HeroSection from "./components/sections/HeroSection";
import ProblemLeaksSection from "./components/sections/ProblemLeaksSection";
import MethodologySection from "./components/sections/MethodologySection";
import DiagnosticDifferentiatorSection from "./components/sections/DiagnosticDifferentiatorSection";
import ProductControlRoomSection from "./components/sections/ProductControlRoomSection";
import IllustrativeAuditSection from "./components/sections/IllustrativeAuditSection";
import MockTestAutopsySection from "./components/sections/MockTestAutopsySection";
import DailyMissionSection from "./components/sections/DailyMissionSection";
import BlueprintSection from "./components/sections/BlueprintSection";
import MarksRankSection from "./components/sections/MarksRankSection";
import PsychologySection from "./components/sections/PsychologySection";
import VisualLearningSection from "./components/sections/VisualLearningSection";
import StudentTypesSection from "./components/sections/StudentTypesSection";
import ParentsSection from "./components/sections/ParentsSection";
import InstitutionsSection from "./components/sections/InstitutionsSection";
import FeedbackLoopSection from "./components/sections/FeedbackLoopSection";
import EvidenceSection from "./components/sections/EvidenceSection";
import FAQSection from "./components/sections/FAQSection";
import FinalCTASection from "./components/sections/FinalCTASection";

export default function Home() {
  return (
    <div style={{ backgroundColor: "var(--color-background)", minHeight: "100vh" }}>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemLeaksSection />
        <MethodologySection />
        <DiagnosticDifferentiatorSection />
        <ProductControlRoomSection />
        <IllustrativeAuditSection />
        <MockTestAutopsySection />
        <DailyMissionSection />
        <BlueprintSection />
        <MarksRankSection />
        <PsychologySection />
        <VisualLearningSection />
        <StudentTypesSection />
        <ParentsSection />
        <InstitutionsSection />
        <FeedbackLoopSection />
        <EvidenceSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
