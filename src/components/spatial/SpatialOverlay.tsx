import type { CameraCommand } from "./SpatialScene";
import { spatialZones, type ZoneId } from "./spatialData";

type SpatialOverlayProps = {
  selected: ZoneId | null;
  onSelect: (id: ZoneId | null) => void;
  onCommand: (action: CameraCommand["action"]) => void;
};

export default function SpatialOverlay({
  selected,
  onSelect,
  onCommand,
}: SpatialOverlayProps) {
  const active = spatialZones.find((zone) => zone.id === selected);
  return (
    <div className="spatial-overlay">
      <div className="spatial-overlay__top">
        <span>Drag to explore</span>
        <button type="button" onClick={() => onCommand("reset")}>
          Reset view
        </button>
      </div>
      <div
        className="spatial-overlay__zones"
        aria-label="Workplace spatial zones"
      >
        {spatialZones.map((zone) => (
          <button
            key={zone.id}
            type="button"
            className={selected === zone.id ? "active" : ""}
            onClick={() => onSelect(zone.id)}
            aria-pressed={selected === zone.id}
          >
            <b>{zone.number}</b>
            <span>{zone.name}</span>
          </button>
        ))}
      </div>
      {active && (
        <aside className="spatial-overlay__detail" aria-live="polite">
          <button
            type="button"
            aria-label="Close zone information"
            onClick={() => onSelect(null)}
          >
            ×
          </button>
          <span>{active.number} / Spatial zone</span>
          <strong>{active.name}</strong>
          <p>{active.description}</p>
        </aside>
      )}
    </div>
  );
}
