"use client";

import {
  Component,
  useEffect,
  useState,
  type ErrorInfo,
  type ReactNode,
} from "react";
import { Canvas } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";
import SpatialFallback from "./SpatialFallback";
import SpatialOverlay from "./SpatialOverlay";
import SpatialScene, { type CameraCommand } from "./SpatialScene";
import type { ZoneId } from "./spatialData";

class CanvasBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidCatch(_error: Error, _info: ErrorInfo) {
    /* Intentional visual fallback. */
  }
  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}

function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl2") || canvas.getContext("webgl")),
    );
  } catch {
    return false;
  }
}

export default function SpatialModel() {
  const reducedMotion = Boolean(useReducedMotion());
  const [webgl, setWebgl] = useState<boolean | null>(null);
  const [selected, setSelected] = useState<ZoneId | null>(null);
  const [command, setCommand] = useState<CameraCommand>({
    id: 0,
    action: "reset",
  });

  useEffect(() => setWebgl(supportsWebGL()), []);

  const issueCommand = (action: CameraCommand["action"]) =>
    setCommand((current) => ({ id: current.id + 1, action }));
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (
      ["INPUT", "TEXTAREA", "SELECT"].includes(
        (event.target as HTMLElement).tagName,
      )
    )
      return;
    const actions: Partial<Record<string, CameraCommand["action"]>> = {
      ArrowLeft: "left",
      ArrowRight: "right",
      ArrowUp: "up",
      ArrowDown: "down",
      "+": "in",
      "=": "in",
      "-": "out",
      r: "reset",
      R: "reset",
    };
    if (event.key === "Escape") {
      setSelected(null);
      return;
    }
    const action = actions[event.key];
    if (action) {
      event.preventDefault();
      issueCommand(action);
    }
  };
  const fallback = <SpatialFallback />;

  return (
    <div
      className="spatial-model"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onContextMenu={(event) => event.preventDefault()}
      aria-label="Interactive architectural workplace model. Use arrow keys to rotate, plus and minus to zoom, R to reset, and Escape to close zone details."
    >
      {webgl === true ? (
        <CanvasBoundary fallback={fallback}>
          <Canvas
            camera={{ position: [8.6, 7.2, 9.4], fov: 36, near: 0.1, far: 100 }}
            dpr={[1, 1.5]}
            gl={{
              antialias: true,
              alpha: false,
              powerPreference: "high-performance",
              failIfMajorPerformanceCaveat: true,
            }}
            onCreated={({ gl }) => {
              gl.setClearColor("#171918");
            }}
          >
            <SpatialScene
              selected={selected}
              onSelect={setSelected}
              command={command}
              reducedMotion={reducedMotion}
            />
          </Canvas>
        </CanvasBoundary>
      ) : (
        fallback
      )}
      <SpatialOverlay
        selected={selected}
        onSelect={setSelected}
        onCommand={issueCommand}
      />
      <span className="spatial-model__caption">CONCEPT MODEL / 01</span>
    </div>
  );
}
