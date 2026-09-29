export type Project = {
  slug: string;
  title: string;
  type: string;
  place: string;
  year: string;
  status: "Built" | "Concept study" | "In development";
  statement: string;
  challenge: string;
  insight: string;
  response: string;
  services: string[];
  tone: string;
};

export const projects: Project[] = [
  {
    slug: "private-residence",
    title: "House Between Light",
    type: "Private residence",
    place: "Mumbai",
    year: "2023",
    status: "Built",
    statement:
      "A home arranged around light, pause and the rituals that make a day feel grounded.",
    challenge:
      "Create privacy without losing the family's sense of connection.",
    insight: "Togetherness works best when people can choose their distance.",
    response:
      "Filtered thresholds, sliding layers and a continuous material datum let the plan change gently through the day.",
    services: ["Interior architecture", "Space planning", "Material direction"],
    tone: "clay",
  },
  {
    slug: "urban-residence",
    title: "Rooms That Move",
    type: "Urban residence",
    place: "Bengaluru",
    year: "2024",
    status: "Built",
    statement:
      "A compact home that expands and contracts around work, hosting and solitude.",
    challenge: "Give a growing household more modes without adding rooms.",
    insight: "A useful room has boundaries that negotiate rather than dictate.",
    response:
      "A joinery spine conceals work surfaces, storage and movable panels that reset the home in minutes.",
    services: ["Interior design", "Custom joinery", "Lighting"],
    tone: "olive",
  },
  {
    slug: "hospitality-lifestyle",
    title: "The Courtyard Table",
    type: "Hospitality & lifestyle",
    place: "Goa",
    year: "2024",
    status: "Concept study",
    statement:
      "A dining experience imagined as a shaded landscape for food and conversation.",
    challenge: "Create intimate moments inside one generous, open room.",
    insight: "Atmosphere begins with the distance between people.",
    response:
      "Low canopies, planted rooms and a shared table create different social scales across one continuous floor.",
    services: ["Experience strategy", "Concept design", "Material study"],
    tone: "sand",
  },
  {
    slug: "signature-interior",
    title: "Objects in Conversation",
    type: "Signature interior",
    place: "Mumbai",
    year: "2025",
    status: "Concept study",
    statement:
      "A quiet interior where collected objects and negative space hold equal weight.",
    challenge:
      "Give a collection presence without allowing it to overwhelm the room.",
    insight: "Meaningful objects need visual silence around them.",
    response:
      "A measured display grid and directional light give every object a clear relationship to the room.",
    services: ["Interior concept", "Display design", "Styling direction"],
    tone: "stone",
  },
  {
    slug: "collaborative-hq",
    title: "The Collaborative HQ",
    type: "Workplace design",
    place: "Bengaluru",
    year: "2026",
    status: "In development",
    statement:
      "A workplace built around the rhythm between energetic teamwork and protected focus.",
    challenge:
      "Make collaboration visible without making concentration impossible.",
    insight:
      "The best collaboration space includes a clear path back to focus.",
    response:
      "A social core is wrapped by project rooms, quiet thresholds and acoustically protected focus neighbourhoods.",
    services: ["Workplace strategy", "Space planning", "Experience design"],
    tone: "green",
  },
  {
    slug: "innovation-campus",
    title: "The Innovation Campus",
    type: "Future workplace",
    place: "Mumbai",
    year: "2026",
    status: "Concept study",
    statement:
      "A campus conceived as a living network of teams, tools and shared knowledge.",
    challenge:
      "Connect specialist teams without flattening their working cultures.",
    insight:
      "Cross-pollination needs planned proximity and accidental discovery.",
    response:
      "A public learning street links team houses, maker spaces and forums across adaptable levels.",
    services: ["Workplace strategy", "Campus planning", "Design intelligence"],
    tone: "metal",
  },
];

export const services = [
  ["Workplace strategy", "People, workflows, culture and business needs."],
  ["Space planning", "Efficient layouts that feel intuitive in motion."],
  ["Workplace design", "A cohesive experience from plan to detail."],
  [
    "Collaboration environments",
    "Settings for meeting, making and informal exchange.",
  ],
  [
    "Technology-enabled workplaces",
    "Hybrid work, AV and connectivity considered spatially.",
  ],
  ["Brand & experience", "Identity translated into a place people can feel."],
  ["Design development", "Materials, furniture, lighting and spatial detail."],
  [
    "Workplace transformation",
    "Environments able to evolve with the business.",
  ],
] as const;

export const team = [
  "Naga Sri Vandanapu",
  "Suhas R",
  "Pranav V",
  "Dinesh Kumar",
  "Santhiya C",
  "Sai Srija",
];
export const teamRoles: Record<(typeof team)[number], string> = {
  "Naga Sri Vandanapu": "Account Manager",
  "Suhas R": "Business Analyst",
  "Pranav V": "Solution Architect",
  "Dinesh Kumar": "Design Specialist",
  "Santhiya C": "Project Manager",
  "Sai Srija": "Quality Reviewer",
};

export const testimonials = [
  {
    name: "Client Perspective",
    designation: "Founder",
    location: "Bengaluru",
    project: "The Collaborative HQ",
    quote:
      "Root & Rise understood that our workplace needed to support both focused work and spontaneous collaboration. Their approach looked beyond the obvious design choices and focused on how people would actually use the space.",
  },
  {
    name: "Client Perspective",
    designation: "Homeowner",
    location: "Mumbai",
    project: "House Between Light",
    quote:
      "The team brought a very human approach to the design process. They asked the right questions before proposing solutions, and the result feels considered, calm and genuinely connected to the way we live.",
  },
  {
    name: "Client Perspective",
    designation: "Business Director",
    location: "Bengaluru",
    project: "The Innovation Campus",
    quote:
      "What stood out was the attention to how people would actually experience the space. The design considers movement, interaction, focus and connection as part of one larger environment.",
  },
] as const;
