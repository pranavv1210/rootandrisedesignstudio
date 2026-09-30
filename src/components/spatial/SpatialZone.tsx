import { useState } from "react";
import { Edges } from "@react-three/drei";
import type { ThreeEvent } from "@react-three/fiber";
import type { SpatialZoneData, ZoneId } from "./spatialData";

type SpatialZoneProps = {
  zone: SpatialZoneData;
  active: boolean;
  onSelect: (id: ZoneId) => void;
};

export default function SpatialZone({
  zone,
  active,
  onSelect,
}: SpatialZoneProps) {
  const [hovered, setHovered] = useState(false);
  const highlighted = active || hovered;
  const handlePointer = (event: ThreeEvent<PointerEvent>, value: boolean) => {
    event.stopPropagation();
    setHovered(value);
    document.body.style.cursor = value ? "pointer" : "";
  };

  return (
    <group position={zone.position}>
      <mesh
        onPointerOver={(event) => handlePointer(event, true)}
        onPointerOut={(event) => handlePointer(event, false)}
        onClick={(event) => {
          event.stopPropagation();
          onSelect(zone.id);
        }}
      >
        <boxGeometry args={zone.size} />
        <meshStandardMaterial
          color={zone.color}
          roughness={0.78}
          metalness={0.08}
          emissive={zone.color}
          emissiveIntensity={highlighted ? 0.16 : 0}
          transparent
          opacity={highlighted ? 0.96 : 0.82}
        />
        <Edges color={highlighted ? "#e2a186" : "#d4d2c9"} threshold={15} />
      </mesh>
      <mesh position={[0, zone.size[1] / 2 + 0.1, 0]}>
        <boxGeometry args={[zone.size[0] * 0.54, 0.08, zone.size[2] * 0.44]} />
        <meshStandardMaterial color="#b9aa90" roughness={0.75} />
      </mesh>
      <mesh position={[0, zone.size[1] / 2 + 0.32, 0]}>
        <cylinderGeometry args={[0.23, 0.28, 0.42, 12]} />
        <meshStandardMaterial color="#262926" roughness={0.85} />
      </mesh>
    </group>
  );
}
