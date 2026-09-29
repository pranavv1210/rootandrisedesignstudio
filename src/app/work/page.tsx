import SelectedWork from "@/components/sections/SelectedWork";
import DreamOffice from "@/components/sections/DreamOffice";
import Contact from "@/components/sections/Contact";

export default function WorkPage() {
  return (
    <>
      <header className="pt-40 pb-24 px-6 md:px-12 bg-background">
        <div className="container mx-auto">
          <span className="text-sm font-bold tracking-[0.2em] uppercase text-accent">Work / 01</span>
          <h1 className="font-display text-6xl md:text-8xl max-w-4xl mt-6">Spaces, stories, and experiments.</h1>
          <p className="text-xl text-foreground/70 max-w-xl mt-8">A growing body of workplace studies and concepts, clearly marked by where they are in the journey.</p>
        </div>
      </header>
      <SelectedWork />
      <DreamOffice />
      <Contact />
    </>
  );
}
