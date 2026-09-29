export type Project = {
  slug: string;
  title: string;
  category: string;
  location: string;
  year: string;
  status: "Completed" | "Concept study" | "In development";
  kind: "Residential" | "Lifestyle" | "Workplace";
  description: string;
  concept: string;
  challenge: string;
  insight: string;
  designResponse: string;
  services: string[];
  palette: [string, string, string];
};

export const projects: Project[] = [
  {
    slug: "private-residence",
    title: "A House of Quiet Edges",
    category: "Private residence",
    location: "Mumbai",
    year: "2023",
    status: "Completed",
    kind: "Residential",
    description: "A warm, restrained home organised around light, pause and everyday rituals.",
    concept: "A sequence of thresholds turns a compact footprint into a home that unfolds slowly.",
    challenge: "Create privacy without losing daylight or the sense of family connection.",
    insight: "People need separation and togetherness at different moments of the same day.",
    designResponse: "Sliding layers, filtered views and a continuous material datum let the home change state without feeling divided.",
    services: ["Spatial planning", "Interior architecture", "Material direction"],
    palette: ["#c8b59e", "#75695c", "#eee9df"],
  },
  {
    slug: "urban-residence",
    title: "The Adaptable Apartment",
    category: "Urban residence",
    location: "Bengaluru",
    year: "2024",
    status: "Completed",
    kind: "Residential",
    description: "An urban home that moves easily between solitude, hosting and work.",
    concept: "Furniture and partitions work as small pieces of architecture.",
    challenge: "Give a young family more modes without adding more rooms.",
    insight: "A room becomes useful when its boundaries can negotiate, not dictate.",
    designResponse: "A joinery spine conceals storage, a desk and movable panels that reset the plan in minutes.",
    services: ["Interior design", "Custom joinery", "Lighting"],
    palette: ["#8b8c7b", "#d4c5ae", "#f1eee8"],
  },
  {
    slug: "hospitality-lifestyle",
    title: "The Courtyard Table",
    category: "Hospitality & lifestyle",
    location: "Goa",
    year: "2024",
    status: "Concept study",
    kind: "Lifestyle",
    description: "A hospitality study where food, landscape and conversation share one room.",
    concept: "The dining room behaves like a shaded garden rather than a sealed interior.",
    challenge: "Build intimacy into a generous, open hospitality floor.",
    insight: "Atmosphere is created by the distance between people as much as by material and light.",
    designResponse: "Low canopies, planted rooms and a shared central table create different social scales across one continuous plan.",
    services: ["Experience strategy", "Concept design", "Material study"],
    palette: ["#7a806a", "#b66c50", "#d8d0bf"],
  },
  {
    slug: "signature-interior",
    title: "Objects in Conversation",
    category: "Signature interior",
    location: "Mumbai",
    year: "2025",
    status: "Concept study",
    kind: "Lifestyle",
    description: "A small interior shaped as a dialogue between crafted objects and negative space.",
    concept: "Treat every object as a participant, not decoration.",
    challenge: "Give a collection presence without allowing it to overwhelm the room.",
    insight: "Meaningful objects need visual silence around them.",
    designResponse: "A measured display grid, directional light and quiet mineral surfaces make the collection legible.",
    services: ["Interior concept", "Display design", "Styling direction"],
    palette: ["#9e8d78", "#44463f", "#ece8df"],
  },
  {
    slug: "collaborative-hq",
    title: "The Collaborative HQ",
    category: "Workplace design study",
    location: "Bengaluru",
    year: "2026",
    status: "In development",
    kind: "Workplace",
    description: "A workplace concept shaped around how teams gather, decide and recover focus.",
    concept: "Collaboration is a gradient, not a room type.",
    challenge: "Support energetic teamwork without sacrificing deep, individual work.",
    insight: "The best collaboration spaces include a clear path back to focus.",
    designResponse: "A social core is wrapped by project rooms, quiet thresholds and acoustically protected focus neighbourhoods.",
    services: ["Workplace strategy", "Space planning", "Experience design"],
    palette: ["#65705f", "#b66c50", "#d9d8d0"],
  },
  {
    slug: "innovation-campus",
    title: "The Innovation Campus",
    category: "Future workplace concept",
    location: "Mumbai",
    year: "2026",
    status: "Concept study",
    kind: "Workplace",
    description: "A future-facing campus imagined as a landscape of teams, tools and shared knowledge.",
    concept: "A workplace should make ideas visible while they are still becoming.",
    challenge: "Connect specialist teams without flattening their distinct working cultures.",
    insight: "Cross-pollination needs planned moments of proximity and accidental discovery.",
    designResponse: "A public learning street links team houses, maker spaces and shared forums across adaptable levels.",
    services: ["Workplace strategy", "Campus planning", "Design intelligence"],
    palette: ["#53625a", "#a99b82", "#e7e8e3"],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
