import { useEffect, useMemo, useRef, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { MathUtils, Vector3, type Group } from "three";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import SpatialZone from "./SpatialZone";
import { spatialZones, type ZoneId } from "./spatialData";

export type CameraCommand = {
  id: number;
  action: "left" | "right" | "up" | "down" | "in" | "out" | "reset";
};

type SpatialSceneProps = {
  selected: ZoneId | null;
  onSelect: (id: ZoneId | null) => void;
  command: CameraCommand;
  reducedMotion: boolean;
};

const initialCamera = new Vector3(8.6, 7.2, 9.4);

export default function SpatialScene({
  selected,
  onSelect,
  command,
  reducedMotion,
}: SpatialSceneProps) {
  const controls = useRef<OrbitControlsImpl>(null);
  const modelGroup = useRef<Group>(null);
  const resetTarget = useRef(false);
  const reveal = useRef(reducedMotion ? 1 : 0);
  const idleTimer = useRef<ReturnType<typeof setTimeout>>();
  const [autoRotate, setAutoRotate] = useState(false);
  const { camera, size } = useThree();
  const homeCamera = useMemo(
    () =>
      size.width < 600 ? new Vector3(11.4, 8.8, 12.2) : initialCamera.clone(),
    [size.width],
  );

  useEffect(() => {
    camera.position.copy(homeCamera);
    if ("isPerspectiveCamera" in camera && camera.isPerspectiveCamera) {
      camera.fov = size.width < 600 ? 46 : 36;
      camera.updateProjectionMatrix();
    }
    controls.current?.update();
  }, [camera, homeCamera, size.width]);

  const stopAutoRotate = () => {
    setAutoRotate(false);
    if (idleTimer.current) clearTimeout(idleTimer.current);
  };
  const scheduleAutoRotate = () => {
    stopAutoRotate();
    if (!reducedMotion)
      idleTimer.current = setTimeout(() => setAutoRotate(true), 2400);
  };

  useEffect(() => {
    scheduleAutoRotate();
    return () => {
      if (idleTimer.current) clearTimeout(idleTimer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reducedMotion]);

  useEffect(() => {
    const control = controls.current;
    if (!control || command.id === 0) return;
    stopAutoRotate();
    if (command.action === "reset") {
      resetTarget.current = true;
      return;
    }
    const offset = camera.position.clone().sub(control.target);
    if (command.action === "left" || command.action === "right")
      offset.applyAxisAngle(
        new Vector3(0, 1, 0),
        command.action === "left" ? 0.16 : -0.16,
      );
    if (command.action === "up" || command.action === "down")
      offset.y = MathUtils.clamp(
        offset.y + (command.action === "up" ? 0.7 : -0.7),
        3.2,
        10,
      );
    if (command.action === "in" || command.action === "out")
      offset.multiplyScalar(command.action === "in" ? 0.88 : 1.12);
    camera.position.copy(control.target).add(offset);
    control.update();
    scheduleAutoRotate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [command, camera]);

  useFrame(() => {
    if (modelGroup.current && reveal.current < 1) {
      reveal.current = Math.min(1, reveal.current + 0.035);
      const eased = 1 - Math.pow(1 - reveal.current, 3);
      modelGroup.current.position.y = MathUtils.lerp(-0.55, 0, eased);
      modelGroup.current.scale.setScalar(MathUtils.lerp(0.94, 1, eased));
    }
    if (!resetTarget.current || !controls.current) return;
    camera.position.lerp(homeCamera, 0.09);
    controls.current.target.lerp(new Vector3(0, 0, 0), 0.09);
    controls.current.update();
    if (camera.position.distanceTo(homeCamera) < 0.03) {
      camera.position.copy(homeCamera);
      resetTarget.current = false;
      scheduleAutoRotate();
    }
  });

  return (
    <>
      <color attach="background" args={["#171918"]} />
      <ambientLight intensity={1.15} />
      <directionalLight
        position={[6, 10, 5]}
        intensity={1.45}
        color="#f1dfca"
      />
      <directionalLight
        position={[-6, 4, -5]}
        intensity={0.45}
        color="#87907f"
      />
      <group
        ref={modelGroup}
        rotation={[0, -0.12, 0]}
        position={[0, reducedMotion ? 0 : -0.55, 0]}
        scale={reducedMotion ? 1 : 0.94}
      >
        <mesh position={[0, -0.12, 0]} onClick={() => onSelect(null)}>
          <boxGeometry args={[8.4, 0.22, 5.7]} />
          <meshStandardMaterial
            color="#242724"
            roughness={0.92}
            metalness={0.02}
          />
        </mesh>
        <gridHelper
          args={[8.4, 18, "#53584f", "#343833"]}
          position={[0, 0.01, 0]}
        />
        {spatialZones.map((zone) => (
          <SpatialZone
            key={zone.id}
            zone={zone}
            active={selected === zone.id}
            onSelect={onSelect}
          />
        ))}
        <mesh position={[-1.2, 1.05, 0]}>
          <boxGeometry args={[0.045, 2.1, 5.1]} />
          <meshPhysicalMaterial
            color="#b7beb4"
            transparent
            opacity={0.16}
            roughness={0.1}
            metalness={0.15}
            depthWrite={false}
          />
        </mesh>
        <mesh position={[1.55, 0.78, 0.2]} rotation={[0, Math.PI / 2, 0]}>
          <boxGeometry args={[0.045, 1.55, 3.8]} />
          <meshPhysicalMaterial
            color="#d1b49d"
            transparent
            opacity={0.13}
            roughness={0.12}
            depthWrite={false}
          />
        </mesh>
        {[-3.65, -1.25, 1.25, 3.65].map((x) => (
          <mesh key={x} position={[x, 0.9, 0]}>
            <cylinderGeometry args={[0.045, 0.045, 1.8, 8]} />
            <meshStandardMaterial
              color="#a88a67"
              metalness={0.45}
              roughness={0.42}
            />
          </mesh>
        ))}
      </group>
      <OrbitControls
        ref={controls}
        makeDefault
        enablePan={false}
        enableDamping={!reducedMotion}
        dampingFactor={0.07}
        minDistance={8}
        maxDistance={17}
        minPolarAngle={0.58}
        maxPolarAngle={1.35}
        autoRotate={autoRotate}
        autoRotateSpeed={0.32}
        rotateSpeed={0.58}
        zoomSpeed={0.72}
        onStart={stopAutoRotate}
        onEnd={scheduleAutoRotate}
      />
    </>
  );
}
