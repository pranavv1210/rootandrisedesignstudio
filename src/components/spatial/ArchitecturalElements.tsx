import { modelMaterials as mat } from "./modelMaterials";

type Position = [number, number, number];

function Box({ position, size, material, rotation = [0, 0, 0] }: { position: Position; size: Position; material: object; rotation?: Position }) {
  return <mesh position={position} rotation={rotation}><boxGeometry args={size} /><primitive object={material} attach="material" /></mesh>;
}

export function Wall({ position, size }: { position: Position; size: Position }) {
  return <Box position={position} size={size} material={mat.wall} />;
}

export function WindowPanel({ position, size, rotation = [0, 0, 0] }: { position: Position; size: Position; rotation?: Position }) {
  return <group position={position} rotation={rotation}><Box position={[0, 0, 0]} size={size} material={mat.glass} /><Box position={[0, size[1] / 2 + 0.03, 0]} size={[size[0] + 0.08, 0.045, 0.055]} material={mat.metal} /><Box position={[0, -size[1] / 2 - 0.03, 0]} size={[size[0] + 0.08, 0.045, 0.055]} material={mat.metal} /></group>;
}

export function Rug({ position, size, color = "olive" }: { position: Position; size: [number, number]; color?: "olive" | "terracotta" | "fabric" }) {
  return <Box position={position} size={[size[0], 0.035, size[1]]} material={mat[color]} />;
}

export function Sofa({ position, rotation = 0 }: { position: Position; rotation?: number }) {
  return <group position={position} rotation={[0, rotation, 0]}><Box position={[0, 0.23, 0]} size={[1.7, 0.38, 0.72]} material={mat.olive} /><Box position={[0, 0.58, 0.27]} size={[1.7, 0.56, 0.18]} material={mat.olive} /><Box position={[-0.82, 0.43, 0]} size={[0.16, 0.55, 0.74]} material={mat.olive} /><Box position={[0.82, 0.43, 0]} size={[0.16, 0.55, 0.74]} material={mat.olive} /><Box position={[0.52, 0.2, -0.47]} size={[0.68, 0.34, 0.55]} material={mat.olive} /></group>;
}

export function LoungeChair({ position, rotation = 0 }: { position: Position; rotation?: number }) {
  return <group position={position} rotation={[0, rotation, 0]}><Box position={[0, 0.28, 0]} size={[0.58, 0.22, 0.58]} material={mat.terracotta} /><Box position={[0, 0.56, 0.23]} size={[0.58, 0.48, 0.12]} material={mat.terracotta} /><Box position={[-0.23, 0.12, 0]} size={[0.06, 0.25, 0.5]} material={mat.metal} /><Box position={[0.23, 0.12, 0]} size={[0.06, 0.25, 0.5]} material={mat.metal} /></group>;
}

export function CoffeeTable({ position }: { position: Position }) {
  return <group position={position}><mesh position={[0, 0.3, 0]}><cylinderGeometry args={[0.52, 0.52, 0.09, 24]} /><primitive object={mat.oak} attach="material" /></mesh><mesh position={[0, 0.15, 0]}><cylinderGeometry args={[0.08, 0.12, 0.3, 12]} /><primitive object={mat.metal} attach="material" /></mesh></group>;
}

export function TvUnit({ position, rotation = 0 }: { position: Position; rotation?: number }) {
  return <group position={position} rotation={[0, rotation, 0]}><Box position={[0, 0.25, 0]} size={[1.45, 0.38, 0.35]} material={mat.walnut} /><Box position={[0, 1.0, 0.04]} size={[1.35, 0.78, 0.07]} material={mat.screen} /><Box position={[-0.52, 0.08, 0]} size={[0.05, 0.16, 0.26]} material={mat.metal} /><Box position={[0.52, 0.08, 0]} size={[0.05, 0.16, 0.26]} material={mat.metal} /></group>;
}

export function Chair({ position, rotation = 0, material = mat.oak }: { position: Position; rotation?: number; material?: object }) {
  return <group position={position} rotation={[0, rotation, 0]}><Box position={[0, 0.33, 0]} size={[0.38, 0.09, 0.4]} material={material} /><Box position={[0, 0.66, 0.17]} size={[0.38, 0.56, 0.08]} material={material} /><Box position={[-0.14, 0.15, -0.14]} size={[0.045, 0.3, 0.045]} material={mat.metal} /><Box position={[0.14, 0.15, -0.14]} size={[0.045, 0.3, 0.045]} material={mat.metal} /><Box position={[-0.14, 0.15, 0.14]} size={[0.045, 0.3, 0.045]} material={mat.metal} /><Box position={[0.14, 0.15, 0.14]} size={[0.045, 0.3, 0.045]} material={mat.metal} /></group>;
}

export function DiningSet({ position }: { position: Position }) {
  const chairs: Array<[Position, number]> = [[[-0.68, 0, -0.68], 0], [[0, 0, -0.68], 0], [[0.68, 0, -0.68], 0], [[-0.68, 0, 0.68], Math.PI], [[0, 0, 0.68], Math.PI], [[0.68, 0, 0.68], Math.PI]];
  return <group position={position}><Box position={[0, 0.48, 0]} size={[1.65, 0.12, 0.86]} material={mat.oak} /><Box position={[-0.58, 0.23, 0]} size={[0.09, 0.46, 0.62]} material={mat.metal} /><Box position={[0.58, 0.23, 0]} size={[0.09, 0.46, 0.62]} material={mat.metal} />{chairs.map(([pos, rot], index) => <Chair key={index} position={pos} rotation={rot} material={mat.fabric} />)}<mesh position={[0, 1.55, 0]}><cylinderGeometry args={[0.34, 0.18, 0.18, 20]} /><primitive object={mat.brass} attach="material" /></mesh><Box position={[0, 1.94, 0]} size={[0.025, 0.72, 0.025]} material={mat.brass} /></group>;
}

export function Kitchen({ position }: { position: Position }) {
  return <group position={position}><Box position={[0.95, 0.48, -1.05]} size={[1.5, 0.94, 0.5]} material={mat.walnut} /><Box position={[-0.55, 0.48, -1.05]} size={[1.35, 0.94, 0.5]} material={mat.oak} /><Box position={[0.15, 1.0, -1.05]} size={[2.95, 0.09, 0.58]} material={mat.terrazzo} /><Box position={[1.32, 1.52, -1.08]} size={[0.68, 1.0, 0.55]} material={mat.wallEdge} /><Box position={[0.05, 0.52, 0.18]} size={[1.75, 0.96, 0.78]} material={mat.olive} /><Box position={[0.05, 1.03, 0.18]} size={[1.9, 0.08, 0.86]} material={mat.terrazzo} /><Box position={[-0.35, 1.08, 0.18]} size={[0.48, 0.025, 0.34]} material={mat.metal} />{[-0.6, 0.65].map((x) => <group key={x} position={[x, 0, 0.85]}><mesh position={[0, 0.48, 0]}><cylinderGeometry args={[0.22, 0.22, 0.08, 16]} /><primitive object={mat.terracotta} attach="material" /></mesh><mesh position={[0, 0.24, 0]}><cylinderGeometry args={[0.035, 0.055, 0.48, 10]} /><primitive object={mat.metal} attach="material" /></mesh></group>)}</group>;
}

export function Bed({ position, rotation = 0, double = true }: { position: Position; rotation?: number; double?: boolean }) {
  const width = double ? 1.65 : 1.05;
  return <group position={position} rotation={[0, rotation, 0]}><Box position={[0, 0.18, 0]} size={[width, 0.32, 2.0]} material={mat.oak} /><Box position={[0, 0.39, -0.03]} size={[width - 0.08, 0.16, 1.86]} material={mat.fabric} /><Box position={[0, 0.73, -0.94]} size={[width, 0.85, 0.12]} material={mat.walnut} /><Box position={[-width * 0.26, 0.51, -0.65]} size={[width * 0.4, 0.16, 0.42]} material={mat.wall} /><Box position={[width * 0.26, 0.51, -0.65]} size={[width * 0.4, 0.16, 0.42]} material={mat.wall} /><Box position={[0, 0.51, 0.35]} size={[width - 0.12, 0.08, 0.78]} material={mat.olive} /></group>;
}

export function Bedside({ position }: { position: Position }) {
  return <group position={position}><Box position={[0, 0.24, 0]} size={[0.42, 0.45, 0.38]} material={mat.oak} /><Box position={[0, 0.66, 0]} size={[0.05, 0.42, 0.05]} material={mat.brass} /><mesh position={[0, 0.9, 0]}><cylinderGeometry args={[0.17, 0.23, 0.28, 16]} /><primitive object={mat.fabric} attach="material" /></mesh></group>;
}

export function Wardrobe({ position, size = [1.5, 1.55, 0.48], rotation = 0 }: { position: Position; size?: Position; rotation?: number }) {
  return <group position={position} rotation={[0, rotation, 0]}><Box position={[0, 0, 0]} size={size} material={mat.oak} />{[-0.34, 0.34].map((x) => <Box key={x} position={[x, 0, size[2] / 2 + 0.01]} size={[0.025, 0.32, 0.025]} material={mat.brass} />)}</group>;
}

export function Desk({ position, rotation = 0 }: { position: Position; rotation?: number }) {
  return <group position={position} rotation={[0, rotation, 0]}><Box position={[0, 0.62, 0]} size={[1.2, 0.1, 0.58]} material={mat.oak} /><Box position={[-0.48, 0.3, 0]} size={[0.06, 0.6, 0.5]} material={mat.metal} /><Box position={[0.48, 0.3, 0]} size={[0.06, 0.6, 0.5]} material={mat.metal} /><Box position={[0, 0.98, -0.18]} size={[0.62, 0.42, 0.05]} material={mat.screen} /></group>;
}

export function Bookshelf({ position, rotation = 0 }: { position: Position; rotation?: number }) {
  return <group position={position} rotation={[0, rotation, 0]}><Box position={[0, 0.82, 0]} size={[0.95, 1.62, 0.24]} material={mat.walnut} />{[-0.45, 0, 0.45].map((y) => <Box key={y} position={[0, 0.82 + y, 0.13]} size={[0.84, 0.05, 0.24]} material={mat.oak} />)}</group>;
}

export function BathroomFixtures({ position }: { position: Position }) {
  return <group position={position}><Box position={[-0.3, 0.48, -0.85]} size={[0.72, 0.78, 0.48]} material={mat.oak} /><Box position={[-0.3, 0.9, -0.85]} size={[0.78, 0.08, 0.52]} material={mat.ceramic} /><Box position={[-0.3, 1.38, -1.08]} size={[0.74, 0.72, 0.04]} material={mat.glass} /><Box position={[0.28, 0.28, 0.05]} size={[0.52, 0.36, 0.68]} material={mat.ceramic} /><Box position={[0.28, 0.56, 0.26]} size={[0.48, 0.56, 0.18]} material={mat.ceramic} /><WindowPanel position={[0, 0.9, 0.88]} size={[1.22, 1.45, 0.035]} /></group>;
}

export function Plant({ position, scale = 1 }: { position: Position; scale?: number }) {
  return <group position={position} scale={scale}><mesh position={[0, 0.2, 0]}><cylinderGeometry args={[0.2, 0.15, 0.4, 12]} /><primitive object={mat.terracotta} attach="material" /></mesh><mesh position={[0, 0.66, 0]}><cylinderGeometry args={[0.035, 0.045, 0.72, 8]} /><primitive object={mat.walnut} attach="material" /></mesh>{[[-0.18, 0.82, 0], [0.16, 0.95, 0.05], [0.05, 0.72, 0.16], [-0.06, 1.07, -0.08]].map((p, index) => <mesh key={index} position={p as Position} scale={[0.55, 0.22, 0.3]}><sphereGeometry args={[0.48, 10, 7]} /><primitive object={mat.green} attach="material" /></mesh>)}</group>;
}

export function Bench({ position, rotation = 0 }: { position: Position; rotation?: number }) {
  return <group position={position} rotation={[0, rotation, 0]}><Box position={[0, 0.34, 0]} size={[1.2, 0.22, 0.46]} material={mat.terracotta} /><Box position={[-0.46, 0.14, 0]} size={[0.06, 0.28, 0.36]} material={mat.metal} /><Box position={[0.46, 0.14, 0]} size={[0.06, 0.28, 0.36]} material={mat.metal} /></group>;
}

export function Pendant({ position }: { position: Position }) {
  return <group position={position}><Box position={[0, 0.35, 0]} size={[0.025, 0.7, 0.025]} material={mat.brass} /><mesh position={[0, 0, 0]}><cylinderGeometry args={[0.24, 0.34, 0.2, 18]} /><primitive object={mat.brass} attach="material" /></mesh></group>;
}

