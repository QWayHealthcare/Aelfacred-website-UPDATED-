// Three distinct hero illustrations. Animated elements are decorative, not live data.
const logo = '<img src="/assets/aelfacred-logo-white.png" width="176" height="64" alt="AelfaCred">';
const controls = '<button type="button" class="motion-control" aria-pressed="false" hidden><span class="motion-control-icon" aria-hidden="true">Ⅱ</span><span class="motion-control-label">Pause animation</span></button>';
const footer = (text, detail) => `<figcaption class="live-scene-caption"><span><i aria-hidden="true"></i>${text}</span><small>${detail}</small></figcaption>`;

export function liveHeroVisual(kind) {
  if (kind === 'about') return `<figure class="live-visual aurora-visual reveal" data-live-scene="aurora" data-visual="brand-identity" aria-label="AelfaCred brand illustration with flowing blue light ribbons">
    <div class="live-scene-top"><span class="live-overline">HEALTHCARE AT THE HEART</span>${controls}</div>
    <div class="aurora-stage"><div class="aurora-fallback live-decoration" aria-hidden="true"></div><canvas class="aurora-canvas live-decoration" aria-hidden="true"></canvas>
      <div class="aurora-crystals live-decoration" aria-hidden="true"><i></i><i></i><i></i></div>
      <div class="aurora-brand"><span class="aurora-brand-edge live-decoration" aria-hidden="true"></span>${logo}<span class="aurora-brand-line" aria-hidden="true"></span><strong>Credentialing,<br><em>connected.</em></strong></div>
      <div class="aurora-values"><span>Clarity</span><span>Control</span><span>Consistency</span><span>Expertise</span></div>
    </div>${footer('CONNECTED BY DESIGN', 'Generative light illustration')}
  </figure>`;

  if (kind === 'platform') return `<figure class="live-visual engine-visual reveal" data-live-scene="engine" data-visual="provider-dossier" aria-label="Illustrated flow of provider data, documents and credentialing workflows">
    <div class="live-scene-top"><span class="live-overline">THE CONNECTED WORKSPACE</span>${controls}</div>
    <div class="engine-stage"><div class="engine-horizon live-decoration" aria-hidden="true"></div>
      <svg class="engine-machine live-decoration" viewBox="0 0 600 420" fill="none" aria-hidden="true"><defs>
        <linearGradient id="engine-surface" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#244f89" stop-opacity=".95"/><stop offset="1" stop-color="#0b1c36" stop-opacity=".94"/></linearGradient>
        <linearGradient id="engine-scan" x1="0" x2="1"><stop stop-color="#98caff" stop-opacity="0"/><stop offset=".5" stop-color="#b3dcff" stop-opacity=".65"/><stop offset="1" stop-color="#98caff" stop-opacity="0"/></linearGradient>
        <clipPath id="engine-clip-bottom"><path d="m95 295 205-85 205 85-205 86Z"/></clipPath><clipPath id="engine-clip-mid"><path d="m95 211 205-85 205 85-205 86Z"/></clipPath><clipPath id="engine-clip-top"><path d="m95 127 205-85 205 85-205 86Z"/></clipPath>
      </defs>
      <g class="engine-floor"><path d="m35 315 265-111 265 111-265 111Z"/><path d="m90 340 265-111M160 370l265-111M230 398l265-111M105 286l265 111M175 257l265 111M245 228l265 111"/></g>
      <g class="engine-layer layer-bottom"><path class="engine-side" d="m95 295 205 86 205-86v13l-205 86-205-86Z"/><path class="engine-slab" d="m95 295 205-85 205 85-205 86Z"/><g clip-path="url(#engine-clip-bottom)"><rect class="engine-scan scan-bottom" x="50" y="208" width="95" height="200" fill="url(#engine-scan)"/></g><path class="engine-trace trace-bottom" pathLength="100" d="m95 295 205-85 205 85-205 86Z"/></g>
      <g class="engine-layer layer-mid"><path class="engine-side" d="m95 211 205 86 205-86v13l-205 86-205-86Z"/><path class="engine-slab" d="m95 211 205-85 205 85-205 86Z"/><g clip-path="url(#engine-clip-mid)"><rect class="engine-scan scan-mid" x="50" y="124" width="95" height="200" fill="url(#engine-scan)"/></g><path class="engine-trace trace-mid" pathLength="100" d="m95 211 205-85 205 85-205 86Z"/></g>
      <g class="engine-layer layer-top"><path class="engine-side" d="m95 127 205 86 205-86v13l-205 86-205-86Z"/><path class="engine-slab" d="m95 127 205-85 205 85-205 86Z"/><g clip-path="url(#engine-clip-top)"><rect class="engine-scan scan-top" x="50" y="40" width="95" height="200" fill="url(#engine-scan)"/></g><path class="engine-trace trace-top" pathLength="100" d="m95 127 205-85 205 85-205 86Z"/>
        <g class="engine-document"><path d="m248 111 53-22 53 22-53 23Z"/><path d="m248 125 53 23 53-23M248 139l53 23 53-23"/></g>
      </g>
      <path class="engine-conduit" d="M95 127v168M505 127v168M300 214v168"/><path class="engine-packets" pathLength="100" d="M95 127v168M505 127v168M300 214v168"/>
      </svg>
      <span class="engine-label label-data"><i aria-hidden="true"></i>Provider data</span><span class="engine-label label-documents"><i aria-hidden="true"></i>Documents</span><span class="engine-label label-workflows"><i aria-hidden="true"></i>Workflows</span>
    </div><div class="engine-readout"><span>One organized file.</span><strong>Visibility across the lifecycle</strong><span class="engine-signal-bars live-decoration" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></span></div>
    ${footer('CONNECTED BY DESIGN', 'Illustrative workflow · not live records')}
  </figure>`;

  if (kind === 'resources') {
    const glyphs = [
      '<rect x="10" y="6" width="24" height="32" rx="3"/><path d="m15 17 3 3 5-6m2 4h4m-14 11 3 3 5-6m2 4h4"/>',
      '<path d="M8 9h12v10H8Zm16 16h12v10H24ZM14 19v11h10M30 25V14H20"/>',
      '<rect x="6" y="10" width="32" height="28" rx="3"/><path d="M14 5v10m16-10v10M6 20h32m-23 8h5m5 0h5"/>',
      '<path d="m22 5 14 6v10c0 9-14 17-14 17S8 30 8 21V11Z"/><path d="m15 21 5 5 10-11"/>',
      '<path d="m22 6 16 8-16 8-16-8Zm-16 17 16 8 16-8M6 31l16 8 16-8"/>',
      '<circle cx="19" cy="18" r="11"/><path d="m27 27 11 11M13 18l4 4 8-9"/>'
    ];
    return `<figure class="live-visual library-visual reveal" data-live-scene="library" data-visual="knowledge-stream" aria-label="Animated document library representing six practical credentialing guides">
      <div class="live-scene-top"><span class="live-overline">THE CREDENTIALING LIBRARY</span>${controls}</div>
      <div class="library-stage"><div class="library-mesh live-decoration" aria-hidden="true"></div><div class="library-portal live-decoration" aria-hidden="true"><i></i><i></i><i></i></div>
        <div class="library-conveyor live-decoration" aria-hidden="true">${glyphs.map((glyph, i) => `<div class="library-document library-document-${i}"><span class="library-document-tab"></span><svg viewBox="0 0 44 44" fill="none">${glyph}</svg><i></i><i></i><i></i><span class="library-document-seal"></span></div>`).join('')}</div>
        <div class="library-beam live-decoration" aria-hidden="true"></div><div class="library-feature"><span class="library-count">06</span><span><strong>Practical guides.</strong><small>Knowledge that moves<br>your team forward.</small></span></div>
      </div><div class="library-topics"><span>Credentialing</span><span>Enrollment</span><span>Monitoring</span></div>${footer('AELFACRED / FIELD NOTES', 'Animated editorial illustration')}
    </figure>`;
  }
  throw new Error(`Unknown animated hero: ${kind}`);
}
