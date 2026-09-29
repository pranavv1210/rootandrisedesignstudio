import Hero from "@/components/hero/Hero";
import MondayMorning from "@/components/sections/MondayMorning";
import Philosophy from "@/components/sections/Philosophy";
import WhatWeDesign from "@/components/sections/WhatWeDesign";
import B2CToB2B from "@/components/sections/B2CToB2B";
import SelectedWork from "@/components/sections/SelectedWork";
import DreamOffice from "@/components/sections/DreamOffice";
import DesignIntelligence from "@/components/sections/DesignIntelligence";
import MondayMorningTest from "@/components/sections/MondayMorningTest";
import Services from "@/components/sections/Services";
import DesignPrinciples from "@/components/sections/DesignPrinciples";
import Process from "@/components/sections/Process";
import Team from "@/components/sections/Team";
import Testimonials from "@/components/sections/Testimonials";
import Location from "@/components/sections/Location";
import Manifesto from "@/components/sections/Manifesto";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <MondayMorning />
      <Philosophy />
      <WhatWeDesign />
      <B2CToB2B />
      <SelectedWork />
      <DreamOffice />
      <DesignIntelligence />
      <MondayMorningTest />
      <Services />
      <DesignPrinciples />
      <Process />
      <Team />
      <Testimonials />
      <Location />
      <Manifesto />
      <Contact />
    </div>
  );
}
