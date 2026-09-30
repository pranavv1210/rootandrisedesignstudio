export type ZoneId = "entry" | "living" | "dining" | "kitchen" | "primary" | "bedroom" | "study" | "bathroom" | "courtyard";

export type SpatialZoneData = {
  id: ZoneId;
  number: string;
  name: string;
  description: string;
  position: [number, number, number];
  size: [number, number];
  cameraOffset: [number, number, number];
};

export const spatialZones: SpatialZoneData[] = [
  { id: "entry", number: "01", name: "Entry", description: "A calm threshold that creates a clear transition from arrival to home.", position: [4.55, 0.08, 2.8], size: [1.7, 2.15], cameraOffset: [4.8, 4.4, 5.2] },
  { id: "living", number: "02", name: "Living room", description: "A shared environment designed around conversation, comfort and connection.", position: [-3.65, 0.08, 1.55], size: [3.55, 4.55], cameraOffset: [4.8, 4.2, 5.4] },
  { id: "dining", number: "03", name: "Dining", description: "A warm gathering space positioned between daily living and the kitchen.", position: [-0.8, 0.08, 1.55], size: [2.15, 3.2], cameraOffset: [4.5, 4.2, 5.1] },
  { id: "kitchen", number: "04", name: "Kitchen", description: "A practical social core designed around movement, preparation and gathering.", position: [2.05, 0.08, 1.45], size: [3.45, 3.35], cameraOffset: [4.6, 4.3, 5.2] },
  { id: "primary", number: "05", name: "Primary bedroom", description: "A quieter private environment designed for rest, retreat and soft morning light.", position: [-3.8, 0.08, -2.2], size: [3.35, 3.35], cameraOffset: [4.7, 4.2, 5] },
  { id: "bedroom", number: "06", name: "Second bedroom", description: "A flexible bedroom with integrated storage, study and reading space.", position: [-1.05, 0.08, -2.2], size: [2.15, 3.35], cameraOffset: [4.5, 4.1, 5] },
  { id: "bathroom", number: "07", name: "Bathroom", description: "A compact, naturally toned bathroom organised into dry and wet zones.", position: [0.75, 0.08, -2.3], size: [1.4, 3.05], cameraOffset: [4.2, 4.1, 4.8] },
  { id: "study", number: "08", name: "Study", description: "A focused environment for uninterrupted work, reading and reflection.", position: [2.55, 0.08, -2.2], size: [2.05, 3.35], cameraOffset: [4.3, 4.1, 4.9] },
  { id: "courtyard", number: "09", name: "Courtyard", description: "A planted outdoor room that brings daylight, air and pause into the plan.", position: [4.55, 0.08, -2.2], size: [1.65, 3.35], cameraOffset: [4.5, 4.3, 5] },
];
