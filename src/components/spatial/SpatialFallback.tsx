export default function SpatialFallback() {
  return (
    <div
      className="spatial-fallback"
      role="img"
      aria-label="Static isometric cutaway of a furnished modern house with living, dining, kitchen, bedrooms, study, bathroom and courtyard"
    >
      <svg viewBox="0 0 960 620" aria-hidden="true">
        <g transform="translate(480 305) skewY(-9) scale(1 .72) rotate(30) translate(-330 -220)">
          <rect className="fallback-slab" x="25" y="20" width="610" height="400" rx="2" />
          <rect className="fallback-court" x="515" y="32" width="105" height="174" />
          <path className="fallback-wall" d="M25 20H635V420H25V20M25 215H635M215 20V215M350 20V215M430 20V215M515 20V420M215 215V420" />
          <path className="fallback-opening" d="M86 20h72M246 20h52M381 20h35M540 20h55M25 278v74M635 255v95" />
          <g className="fallback-living"><rect x="45" y="244" width="135" height="72" rx="8" /><rect x="45" y="304" width="190" height="46" rx="7" /><ellipse cx="150" cy="370" rx="48" ry="24" /><rect x="45" y="394" width="132" height="12" rx="2" /></g>
          <g className="fallback-dining"><rect x="260" y="270" width="120" height="72" rx="4" />{[270, 310, 350].map((x) => <circle key={`top-${x}`} cx={x} cy="257" r="10" />)}{[270, 310, 350].map((x) => <circle key={`bottom-${x}`} cx={x} cy="355" r="10" />)}</g>
          <g className="fallback-kitchen"><rect x="410" y="238" width="83" height="150" rx="3" /><rect x="390" y="270" width="58" height="110" rx="3" /><circle cx="419" cy="303" r="8" /><circle cx="419" cy="347" r="8" /></g>
          <g className="fallback-bedrooms"><rect x="44" y="48" width="140" height="125" rx="3" /><rect x="63" y="55" width="45" height="24" rx="6" /><rect x="120" y="55" width="45" height="24" rx="6" /><rect x="235" y="55" width="94" height="125" rx="3" /><rect x="252" y="60" width="60" height="22" rx="6" /></g>
          <g className="fallback-study"><rect x="445" y="48" width="54" height="106" /><circle cx="470" cy="175" r="15" /></g>
          <g className="fallback-bath"><rect x="370" y="45" width="42" height="60" rx="15" /><rect x="365" y="128" width="54" height="45" rx="3" /></g>
          <g className="fallback-plants">{[{ x: 548, y: 60 }, { x: 585, y: 115 }, { x: 547, y: 168 }].map((plant) => <g key={`${plant.x}-${plant.y}`} transform={`translate(${plant.x} ${plant.y})`}><circle cx="0" cy="0" r="17" /><circle cx="13" cy="8" r="12" /><circle cx="-10" cy="12" r="10" /></g>)}</g>
        </g>
      </svg>
      <span>CUTAWAY HOUSE / STATIC VIEW</span>
    </div>
  );
}
