export type ZoneId =
  "focus" | "collaborate" | "social" | "meeting" | "executive" | "hybrid";

export type SpatialZoneData = {
  id: ZoneId;
  number: string;
  name: string;
  description: string;
  position: [number, number, number];
  size: [number, number, number];
  color: string;
};

export const spatialZones: SpatialZoneData[] = [
  {
    id: "focus",
    number: "01",
    name: "Focus",
    description: "Quiet environments designed for uninterrupted work.",
    position: [-2.5, 0.35, -1.55],
    size: [2.25, 0.7, 1.65],
    color: "#77806f",
  },
  {
    id: "collaborate",
    number: "02",
    name: "Collaborate",
    description:
      "Spaces designed for shared thinking, project work and exchange.",
    position: [0, 0.25, -1.55],
    size: [2.15, 0.5, 1.65],
    color: "#a96750",
  },
  {
    id: "social",
    number: "03",
    name: "Social",
    description:
      "Informal environments for connection, breaks and conversation.",
    position: [2.45, 0.2, -1.45],
    size: [2.05, 0.4, 1.85],
    color: "#8a765e",
  },
  {
    id: "meeting",
    number: "04",
    name: "Meeting",
    description: "Technology-enabled spaces for structured collaboration.",
    position: [-2.3, 0.45, 1.25],
    size: [2.55, 0.9, 1.8],
    color: "#9a9d90",
  },
  {
    id: "executive",
    number: "05",
    name: "Executive",
    description: "Private environments for leadership, focus and conversation.",
    position: [0.45, 0.55, 1.35],
    size: [2.25, 1.1, 1.75],
    color: "#6c6f65",
  },
  {
    id: "hybrid",
    number: "06",
    name: "Hybrid",
    description: "Flexible environments supporting multiple ways of working.",
    position: [2.75, 0.32, 1.25],
    size: [1.8, 0.64, 1.8],
    color: "#b66c50",
  },
];
