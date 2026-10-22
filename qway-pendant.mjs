export function qwayPendant() {
  return `<figure class="qway-pendant reveal" data-pendant data-light="off">
    <div class="pendant-scene">
      <svg class="pendant-beam pendant-light" viewBox="0 0 600 280" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="pendant-beam-fill" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#ffe6af" stop-opacity=".24"/><stop offset=".6" stop-color="#ffe4ac" stop-opacity=".1"/><stop offset="1" stop-color="#ffe4ac" stop-opacity="0"/></linearGradient>
          <filter id="pendant-beam-soft" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="9"/></filter>
        </defs>
        <path d="M229 0Q300 15 371 0L573 244Q300 295 27 244Z" fill="url(#pendant-beam-fill)" filter="url(#pendant-beam-soft)"/>
      </svg>
      <span class="pendant-logo-light pendant-light" aria-hidden="true"></span>
      <svg class="pendant-fixture" viewBox="0 0 220 160" fill="none" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="pendant-metal" x1="26" y1="90" x2="196" y2="120" gradientUnits="userSpaceOnUse"><stop stop-color="#25354a"/><stop offset=".3" stop-color="#718197"/><stop offset=".5" stop-color="#9ba6b4"/><stop offset=".7" stop-color="#53647a"/><stop offset="1" stop-color="#1c2b3d"/></linearGradient>
          <linearGradient id="pendant-rim" x1="24" y1="135" x2="196" y2="135" gradientUnits="userSpaceOnUse"><stop stop-color="#7d6f55"/><stop offset=".4" stop-color="#ded0aa"/><stop offset="1" stop-color="#8f7c58"/></linearGradient>
          <radialGradient id="pendant-bulb-halo"><stop stop-color="#ffedc4" stop-opacity=".65"/><stop offset="1" stop-color="#ffe4a9" stop-opacity="0"/></radialGradient>
        </defs>
        <rect x="102" width="16" height="5" rx="2.5" fill="#5b6a7e"/>
        <path d="M110 5V66" stroke="#657184" stroke-width="2"/>
        <path d="M111 5V64" stroke="#b2becd" stroke-opacity=".25"/>
        <rect x="104" y="61" width="12" height="10" rx="3" fill="#a1acb7"/>
        <path d="M78 69Q110 58 142 69L196 128Q110 151 24 128Z" fill="url(#pendant-metal)" stroke="#afbac7" stroke-opacity=".35"/>
        <path d="M81 70Q110 61 139 70" stroke="#c9d2dd" stroke-opacity=".55"/>
        <path d="M78 73L31 126" stroke="#dce3ec" stroke-opacity=".16"/>
        <ellipse cx="110" cy="129" rx="86" ry="13" fill="#2f3336" stroke="url(#pendant-rim)" stroke-width="2"/>
        <ellipse class="pendant-light" cx="110" cy="130" rx="83" ry="11" fill="#ffe8b6"/>
        <ellipse class="pendant-light" cx="110" cy="134" rx="73" ry="25" fill="url(#pendant-bulb-halo)"/>
        <ellipse cx="110" cy="134" rx="15" ry="6" fill="#9d9b91"/>
        <ellipse class="pendant-light" cx="110" cy="134" rx="15" ry="6" fill="#fff8df"/>
      </svg>
      <button type="button" class="pendant-cord" aria-label="Turn on the QWay logo spotlight" aria-pressed="false" aria-describedby="pendant-instructions" hidden><span class="pendant-rope" aria-hidden="true"></span><span class="pendant-cord-grip" aria-hidden="true"></span></button>
      <div class="pendant-wordmark"><img src="/assets/qway-healthcare-logo.webp" width="800" height="69" alt="QWay Healthcare"></div>
      <p class="pendant-instructions" id="pendant-instructions" hidden><span class="pendant-instruction-icon" aria-hidden="true">↓</span><span data-pendant-hint>Pull the cord to illuminate</span></p>
      <span class="sr-only" role="status" aria-live="polite" data-pendant-status></span>
    </div>
    <figcaption><p class="pendant-caption">HEALTHCARE REVENUE OPERATIONS</p><ul class="pendant-services"><li><span aria-hidden="true">01</span>Credentialing</li><li><span aria-hidden="true">02</span>Billing &amp; coding</li><li><span aria-hidden="true">03</span>Revenue cycle</li></ul></figcaption>
  </figure>`;
}
