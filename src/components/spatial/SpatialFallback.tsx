export default function SpatialFallback() {
  return (
    <div
      className="spatial-fallback"
      role="img"
      aria-label="Architectural workplace model with six spatial zones"
    >
      <div className="spatial-fallback__floor" />
      <i className="spatial-fallback__volume spatial-fallback__volume--a" />
      <i className="spatial-fallback__volume spatial-fallback__volume--b" />
      <i className="spatial-fallback__volume spatial-fallback__volume--c" />
      <i className="spatial-fallback__glass spatial-fallback__glass--a" />
      <i className="spatial-fallback__glass spatial-fallback__glass--b" />
      <span>ARCHITECTURAL MODEL / STATIC VIEW</span>
    </div>
  );
}
