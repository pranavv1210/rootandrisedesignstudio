import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interactive 3D Campus Demo",
  description:
    "Explore the TATTVA Zencore campus masterplan, buildings, interiors, routes and workplace floors in an interactive 3D walkthrough.",
};

export default function DemoPage() {
  return (
    <main className="demo-page">
      <iframe
        src="/zencore/index.html"
        title="TATTVA Zencore interactive 3D campus walkthrough"
        allow="fullscreen"
      />
    </main>
  );
}
