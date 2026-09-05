import Hero from "@/components/home/Hero";
import EvidenceSection from "@/components/home/EvidenceSection";
import WorkflowSection from "@/components/home/WorkflowSection";
import DirectionSection from "@/components/home/DirectionSection";

export default function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <EvidenceSection />
      <WorkflowSection />
      <DirectionSection />
    </main>
  );
}
