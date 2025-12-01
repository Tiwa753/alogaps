import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ExpertsSection } from "@/components/experts-section"
import { ThreeColumnGrid } from "@/components/three-column-grid"
import { FounderSection } from "@/components/founder-section"
import { PressSection } from "@/components/press-section"
import { QualitySection } from "@/components/quality-section"
import { InstagramSection } from "@/components/instagram-section"
import { AsSeenInSection } from "@/components/as-seen-in-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      <Header />
      <HeroSection />
      <ExpertsSection />
      <ThreeColumnGrid />
      <FounderSection />
      <PressSection />
      <QualitySection />
      <InstagramSection />
      <AsSeenInSection />
      <Footer />
    </main>
  )
}
