import Navbar from "@/app/components/amanah-ai/Navbar";
import HeroSection from "@/app/components/amanah-ai/HeroSection";
import TrustSection from "@/app/components/amanah-ai/TrustSection";
import ProblemSection from "@/app/components/amanah-ai/ProblemSection";
import SolutionSection from "@/app/components/amanah-ai/SolutionSection";
import WorkflowSection from "@/app/components/amanah-ai/WorkflowSection";
import FeaturesSection from "@/app/components/amanah-ai/FeaturesSection";
import PakistanFocusSection from "@/app/components/amanah-ai/PakistanFocusSection";
import CTASection from "@/app/components/amanah-ai/CTASection";
import Footer from "@/app/components/amanah-ai/Footer";

export default function AmanahAIPage() {
  return (
    <main className="min-h-screen bg-[#F9FAFB]">
      <Navbar />
      <HeroSection />
      <TrustSection />
      <ProblemSection />
      <SolutionSection />
      <WorkflowSection />
      <FeaturesSection />
      <PakistanFocusSection />
      <CTASection />
      <Footer />
    </main>
  );
}
