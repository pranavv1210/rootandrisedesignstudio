import Philosophy from "@/components/sections/Philosophy";
import DesignIntelligence from "@/components/sections/DesignIntelligence";
import Process from "@/components/sections/Process";
import DesignPrinciples from "@/components/sections/DesignPrinciples";

export default function ApproachPage() {
  return (
    <>
      <header className="pt-40 pb-24 px-6 md:px-12 bg-background">
        <div className="container mx-auto">
          <span className="text-sm font-bold tracking-[0.2em] uppercase text-accent">Approach / 02</span>
          <h1 className="font-display text-6xl md:text-8xl max-w-4xl mt-6">How we design beyond structures.</h1>
          <p className="text-xl text-foreground/70 max-w-xl mt-8">We begin with people, translate what we learn into decisions, and build spaces that can keep changing.</p>
        </div>
      </header>
      <Philosophy />
      <DesignIntelligence />
      <Process />
      <DesignPrinciples />
    </>
  );
}
