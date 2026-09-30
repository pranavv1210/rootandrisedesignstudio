import { useState } from "react";
import { Edges } from "@react-three/drei";
import type { ThreeEvent } from "@react-three/fiber";
import type { SpatialZoneData, ZoneId } from "./spatialData";

type SpatialZoneProps = {
  zone: SpatialZoneData;
  active: boolean;
  onSelect: (id: ZoneId) => void;
};

export default function SpatialZone({ zone, active, onSelect }: SpatialZoneProps) {
  const [hovered, setHovered] = useState(false);
  const highlighted = active || hovered;
  const handlePointer = (event: ThreeEvent<PointerEvent>, value: boolean) => {
    event.stopPropagation();
    setHovered(value);
    document.body.style.cursor = value ? "pointer" : "";
  };

  return (
    <mesh
      position={zone.position}
      onPointerOver={(event) => handlePointer(event, true)}
      onPointerOut={(event) => handlePointer(event, false)}
      onClick={(event) => { event.stopPropagation(); onSelect(zone.id); }}
    >
      <boxGeometry args={[zone.size[0], 0.055, zone.size[1]]} />
      <meshStandardMaterial color={active ? "#d69273" : "#d9cdbb"} transparent opacity={active ? 0.32 : hovered ? 0.16 : 0.002} roughness={0.8} depthWrite={false} />
      {highlighted && <Edges color={active ? "#e4a184" : "#c7a184"} threshold={15} />}
    </mesh>
  );
}
