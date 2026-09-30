import { useEffect, useMemo, useRef, useState } from "react";
import { OrbitControls, SoftShadows } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { MathUtils, Vector3, type Group } from "three";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import { BathroomFixtures, Bed, Bedside, Bench, Bookshelf, Chair, CoffeeTable, Desk, DiningSet, Kitchen, LoungeChair, Pendant, Plant, Rug, Sofa, TvUnit, Wall, Wardrobe, WindowPanel } from "./ArchitecturalElements";
import { modelMaterials as mat } from "./modelMaterials";
import SpatialZone from "./SpatialZone";
import { spatialZones, type ZoneId } from "./spatialData";

export type CameraCommand = { id: number; action: "left" | "right" | "up" | "down" | "in" | "out" | "reset" };
type SpatialSceneProps = { selected: ZoneId | null; onSelect: (id: ZoneId | null) => void; command: CameraCommand; reducedMotion: boolean };
const desktopCamera = new Vector3(12.8, 11.2, 14.2);

function House({ selected, onSelect }: { selected: ZoneId | null; onSelect: (id: ZoneId | null) => void }) {
  return (
    <group>
      <mesh position={[0, -0.13, 0]} receiveShadow onClick={() => onSelect(null)}><boxGeometry args={[11.35, 0.28, 8.25]} /><primitive object={mat.limestone} attach="material" /></mesh>
      <mesh position={[4.55, 0.025, -2.2]}><boxGeometry args={[1.65, 0.07, 3.35]} /><primitive object={mat.garden} attach="material" /></mesh>

      <Wall position={[0, 1, -4]} size={[11.2, 2, 0.14]} />
      <Wall position={[-5.6, 0.85, 0]} size={[0.14, 1.7, 8.1]} />
      <Wall position={[5.6, 0.85, 0]} size={[0.14, 1.7, 8.1]} />
      <Wall position={[-3.75, 0.48, 4]} size={[3.7, 0.96, 0.14]} />
      <Wall position={[1.35, 0.48, 4]} size={[2.35, 0.96, 0.14]} />
      <Wall position={[5.05, 0.48, 4]} size={[1.0, 0.96, 0.14]} />

      <Wall position={[-4.85, 0.72, -0.42]} size={[1.35, 1.44, 0.11]} />
      <Wall position={[-2.65, 0.72, -0.42]} size={[1.1, 1.44, 0.11]} />
      <Wall position={[-1.45, 0.72, -0.42]} size={[0.75, 1.44, 0.11]} />
      <Wall position={[0.75, 0.72, -0.42]} size={[2.3, 1.44, 0.11]} />
      <Wall position={[3.1, 0.72, -0.42]} size={[0.9, 1.44, 0.11]} />
      <Wall position={[5.08, 0.72, -0.42]} size={[1.0, 1.44, 0.11]} />

      <Wall position={[-2.2, 0.72, -2.85]} size={[0.11, 1.44, 2.25]} />
      <Wall position={[-2.2, 0.72, -0.87]} size={[0.11, 1.44, 0.75]} />
      <Wall position={[0.15, 0.72, -2.9]} size={[0.11, 1.44, 2.1]} />
      <Wall position={[0.15, 0.72, -0.85]} size={[0.11, 1.44, 0.65]} />
      <Wall position={[1.5, 0.72, -3.15]} size={[0.11, 1.44, 1.6]} />
      <Wall position={[1.5, 0.72, -0.9]} size={[0.11, 1.44, 0.65]} />
      <Wall position={[3.75, 0.72, -2.85]} size={[0.11, 1.44, 2.3]} />
      <Wall position={[3.75, 0.72, -0.85]} size={[0.11, 1.44, 0.7]} />

      <WindowPanel position={[-3.75, 1.05, -3.91]} size={[2.25, 1.05, 0.04]} />
      <WindowPanel position={[-0.95, 1.05, -3.91]} size={[1.25, 1.05, 0.04]} />
      <WindowPanel position={[2.55, 1.05, -3.91]} size={[1.15, 1.05, 0.04]} />
      <WindowPanel position={[4.55, 1.0, -3.91]} size={[1.35, 1.15, 0.04]} />
      <WindowPanel position={[5.51, 0.95, 1.55]} size={[2.25, 1.05, 0.04]} rotation={[0, Math.PI / 2, 0]} />

      <Rug position={[-3.65, 0.075, 1.65]} size={[2.7, 2.5]} color="fabric" />
      <Sofa position={[-4.25, 0.12, 1.65]} rotation={Math.PI / 2} />
      <LoungeChair position={[-2.85, 0.1, 2.65]} rotation={-2.35} />
      <CoffeeTable position={[-3.25, 0.08, 1.55]} />
      <TvUnit position={[-2.02, 0.08, 1.45]} rotation={-Math.PI / 2} />
      <Plant position={[-5.05, 0.06, 3.25]} scale={0.78} />

      <DiningSet position={[-0.78, 0.05, 1.6]} />
      <Kitchen position={[2.05, 0.05, 1.45]} />
      <Pendant position={[2.05, 1.65, 1.55]} />

      <Rug position={[-3.8, 0.07, -2.2]} size={[2.65, 2.65]} color="olive" />
      <Bed position={[-3.8, 0.08, -2.3]} double />
      <Bedside position={[-4.95, 0.05, -2.95]} />
      <Bedside position={[-2.65, 0.05, -2.95]} />
      <Wardrobe position={[-5.18, 0.82, -1.0]} size={[0.55, 1.55, 1.4]} rotation={Math.PI / 2} />
      <Bench position={[-3.8, 0.05, -0.95]} />

      <Bed position={[-1.05, 0.08, -2.45]} double={false} />
      <Desk position={[-1.05, 0.05, -0.85]} />
      <Chair position={[-1.05, 0.05, -1.45]} rotation={Math.PI} material={mat.olive} />
      <Wardrobe position={[-1.7, 0.78, -3.55]} size={[0.95, 1.45, 0.38]} />

      <BathroomFixtures position={[0.75, 0.05, -2.25]} />

      <Desk position={[2.55, 0.05, -2.7]} />
      <Chair position={[2.55, 0.05, -2.05]} rotation={Math.PI} material={mat.olive} />
      <Bookshelf position={[3.22, 0.05, -3.5]} />
      <LoungeChair position={[2.15, 0.05, -0.95]} rotation={2.7} />

      <Bench position={[4.55, 0.05, -2.45]} rotation={Math.PI / 2} />
      <CoffeeTable position={[4.55, 0.03, -1.45]} />
      <Plant position={[4.2, 0.04, -3.2]} scale={0.72} />
      <Plant position={[5.0, 0.04, -3.05]} scale={0.9} />
      <Plant position={[4.95, 0.04, -1.0]} scale={0.62} />

      <BoxEntry />
      {spatialZones.map((zone) => <SpatialZone key={zone.id} zone={zone} active={selected === zone.id} onSelect={onSelect} />)}
    </group>
  );
}

function BoxEntry() {
  return <group><mesh position={[4.55, 0.055, 2.8]}><boxGeometry args={[1.35, 0.04, 1.55]} /><primitive object={mat.terrazzo} attach="material" /></mesh><Bench position={[4.8, 0.08, 2.7]} rotation={Math.PI / 2} /><Plant position={[4.05, 0.06, 3.35]} scale={0.6} /></group>;
}

export default function SpatialScene({ selected, onSelect, command, reducedMotion }: SpatialSceneProps) {
  const controls = useRef<OrbitControlsImpl>(null);
  const houseGroup = useRef<Group>(null);
  const reveal = useRef(reducedMotion ? 1 : 0);
  const transition = useRef<{ camera: Vector3; target: Vector3 } | null>(null);
  const idleTimer = useRef<ReturnType<typeof setTimeout>>();
  const [autoRotate, setAutoRotate] = useState(false);
  const { camera, size } = useThree();
  const homeCamera = useMemo(() => size.width < 600 ? new Vector3(10.4, 9.2, 11.6) : desktopCamera.clone(), [size.width]);

  const stopAutoRotate = () => { setAutoRotate(false); if (idleTimer.current) clearTimeout(idleTimer.current); };
  const scheduleAutoRotate = () => { stopAutoRotate(); if (!reducedMotion) idleTimer.current = setTimeout(() => setAutoRotate(true), 3500); };
  const moveTo = (cameraPosition: Vector3, target: Vector3) => { transition.current = { camera: cameraPosition, target }; };

  useEffect(() => {
    camera.position.copy(homeCamera);
    if ("isPerspectiveCamera" in camera && camera.isPerspectiveCamera) { camera.fov = size.width < 600 ? 44 : 37; camera.updateProjectionMatrix(); }
    controls.current?.target.set(0, 0, 0);
    controls.current?.update();
  }, [camera, homeCamera, size.width]);

  // Auto-rotation is deliberately rescheduled only when the motion preference changes.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { scheduleAutoRotate(); return () => { if (idleTimer.current) clearTimeout(idleTimer.current); }; }, [reducedMotion]);

  useEffect(() => {
    if (!selected) return;
    const room = spatialZones.find((zone) => zone.id === selected);
    if (!room) return;
    stopAutoRotate();
    const target = new Vector3(room.position[0], 0.35, room.position[2]);
    const offset = new Vector3(...room.cameraOffset);
    if (size.width < 600) offset.multiplyScalar(1.2);
    moveTo(target.clone().add(offset), target);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected, size.width]);

  useEffect(() => {
    const control = controls.current;
    if (!control || command.id === 0) return;
    stopAutoRotate();
    if (command.action === "reset") { onSelect(null); moveTo(homeCamera.clone(), new Vector3(0, 0, 0)); return; }
    const offset = camera.position.clone().sub(control.target);
    if (command.action === "left" || command.action === "right") offset.applyAxisAngle(new Vector3(0, 1, 0), command.action === "left" ? 0.16 : -0.16);
    if (command.action === "up" || command.action === "down") offset.y = MathUtils.clamp(offset.y + (command.action === "up" ? 0.8 : -0.8), 6, 18);
    if (command.action === "in" || command.action === "out") offset.multiplyScalar(command.action === "in" ? 0.88 : 1.12);
    camera.position.copy(control.target).add(offset); control.update(); scheduleAutoRotate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [command, camera]);

  useFrame(() => {
    if (houseGroup.current && reveal.current < 1) { reveal.current = Math.min(1, reveal.current + 0.03); const eased = 1 - Math.pow(1 - reveal.current, 3); houseGroup.current.position.y = MathUtils.lerp(-0.5, 0, eased); houseGroup.current.scale.setScalar(MathUtils.lerp(0.94, 1, eased)); }
    if (!transition.current || !controls.current) return;
    camera.position.lerp(transition.current.camera, reducedMotion ? 1 : 0.075);
    controls.current.target.lerp(transition.current.target, reducedMotion ? 1 : 0.075);
    controls.current.update();
    if (camera.position.distanceTo(transition.current.camera) < 0.035 && controls.current.target.distanceTo(transition.current.target) < 0.025) { transition.current = null; scheduleAutoRotate(); }
  });

  return (
    <>
      <color attach="background" args={["#171918"]} />
      <SoftShadows size={10} samples={6} focus={0.4} />
      <hemisphereLight args={["#f0e5d5", "#353a32", 1.5]} />
      <directionalLight position={[7, 13, 9]} intensity={2.2} color="#fff0da" castShadow shadow-mapSize={[size.width < 700 ? 512 : 1024, size.width < 700 ? 512 : 1024]} shadow-camera-near={2} shadow-camera-far={35} shadow-camera-left={-9} shadow-camera-right={9} shadow-camera-top={9} shadow-camera-bottom={-9} />
      <directionalLight position={[-8, 6, -6]} intensity={0.65} color="#87917f" />
      <group ref={houseGroup} position={[0, reducedMotion ? 0 : -0.5, 0]} scale={reducedMotion ? 1 : 0.94}><House selected={selected} onSelect={onSelect} /></group>
      <OrbitControls ref={controls} makeDefault enablePan={false} enableDamping={!reducedMotion} dampingFactor={0.065} minDistance={9} maxDistance={25} minPolarAngle={0.5} maxPolarAngle={1.25} autoRotate={autoRotate} autoRotateSpeed={0.22} rotateSpeed={0.5} zoomSpeed={0.7} onStart={stopAutoRotate} onEnd={scheduleAutoRotate} />
    </>
  );
}
