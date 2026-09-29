import Team from "@/components/sections/Team";
import Location from "@/components/sections/Location";
import Manifesto from "@/components/sections/Manifesto";

export default function StudioPage() {
  return (
    <>
      <header className="pt-40 pb-24 px-6 md:px-12 bg-background">
        <div className="container mx-auto">
          <span className="text-sm font-bold tracking-[0.2em] uppercase text-accent">Studio / 03</span>
          <h1 className="font-display text-6xl md:text-8xl max-w-4xl mt-6">Rooted in Mumbai. Rising in Bengaluru.</h1>
          <p className="text-xl text-foreground/70 max-w-xl mt-8">A multidisciplinary team bringing account thinking, business understanding, spatial intelligence, and care for detail to the same table.</p>
        </div>
      </header>
      <Team />
      <Location />
      <Manifesto />
    </>
  );
}
