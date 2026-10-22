// Each large illustration belongs to one section. Only the Home lifecycle uses
// the original connected-logo diagram. All motion is confined to decorative layers.
const logo = '<img src="/assets/aelfacred-logo-white.png" width="176" height="64" alt="AelfaCred">';
const caption = text => `<figcaption>${text}</figcaption>`;
import { liveHeroVisual } from './live-heroes.mjs';

export function sectionVisual(kind) {
  switch (kind) {
    case 'platform':
      return liveHeroVisual('platform');
    case 'services':
      return `<figure class="section-visual service-route-visual reveal" data-visual="service-route" aria-label="Credentialing support follows the work from collection through ongoing monitoring">
        <div class="route-heading"><span class="visual-overline">EXPERTISE IN MOTION</span><strong>Every handoff.<br><em>A defined next step.</em></strong></div>
        <div class="route-map"><svg class="route-paths visual-decoration" viewBox="0 0 500 260" fill="none" aria-hidden="true"><path class="route-base" d="M35 225H150Q185 225 185 175T205 110H265Q315 110 315 65T375 25H470"/><path class="route-draw" pathLength="1" d="M35 225H150Q185 225 185 175T205 110H265Q315 110 315 65T375 25H470"/><path class="route-streak" pathLength="100" d="M35 225H150Q185 225 185 175T205 110H265Q315 110 315 65T375 25H470"/><path class="route-contour" d="M35 250H140Q190 250 190 185T220 135H265Q340 135 340 75T390 50H470"/></svg>
          <div class="route-stop stop-collect"><span>01</span><strong>Collect</strong></div><div class="route-stop stop-verify"><span>02</span><strong>Verify</strong></div><div class="route-stop stop-enroll"><span>03</span><strong>Enroll</strong></div><div class="route-stop stop-monitor"><span>04</span><strong>Maintain</strong></div>
        </div><div class="route-legend"><span>Software</span><i aria-hidden="true"></i><span>Credentialing expertise</span></div>${caption('CONNECTED BY DESIGN')}
      </figure>`;
    case 'audiences':
      return `<figure class="section-visual campus-visual reveal" data-visual="healthcare-campus" aria-label="Different healthcare organizations supported by a common focus on provider operations">
        <div class="campus-glow visual-decoration" aria-hidden="true"></div><div class="campus-heading"><span class="visual-overline">YOUR HEALTHCARE LANDSCAPE</span><strong>Different settings.<br><em>Shared operational clarity.</em></strong></div>
        <svg class="campus-skyline visual-decoration" viewBox="0 0 520 290" fill="none" aria-hidden="true"><path class="campus-ground" d="M15 249 260 284 505 249M15 226 260 261 505 226M55 210l205 30 205-30"/>
          <g class="campus-building clinic-building"><path class="building-front" d="M48 132 145 145V249L48 235Z"/><path class="building-side" d="m145 145 40-19v104l-40 19Z"/><path class="building-roof" d="m48 132 41-19 96 13-40 19Z"/><path class="building-window" d="m64 154 18 2v19l-18-2Zm34 4 18 2v19l-18-2Zm-34 31 18 2v19l-18-2Zm34 4 18 2v19l-18-2Z"/></g>
          <g class="campus-building hospital-building"><path class="building-front" d="m194 61 114 15v177l-114-16Z"/><path class="building-side" d="m308 76 43-24v178l-43 23Z"/><path class="building-roof" d="m194 61 43-24 114 15-43 24Z"/><path class="building-cross" d="m240 88 20 3v14l14 2v19l-14-2v15l-20-3v-15l-14-2v-19l14 2Z"/><path class="building-window" d="m211 153 19 2v19l-19-2Zm35 5 19 2v19l-19-2Zm35 5 13 2v19l-13-2Zm-70 32 19 2v19l-19-2Zm35 5 19 2v19l-19-2Zm35 5 13 2v19l-13-2Z"/></g>
          <g class="campus-building center-building"><path class="building-front" d="m366 136 82-12v111l-82 12Z"/><path class="building-side" d="m448 124 27 16v112l-27-17Z"/><path class="building-roof" d="m366 136 27 15 82-11-27-16Z"/><path class="building-window" d="m379 165 18-3v18l-18 3Zm31-5 18-3v18l-18 3Zm-31 39 18-3v18l-18 3Zm31-5 18-3v18l-18 3Z"/></g>
          <path class="campus-signal" pathLength="1" d="M18 256 161 276 261 290 378 274 510 256"/>
        </svg><div class="campus-labels"><span>Practices</span><span>Health systems</span><span>Facilities</span></div>${caption('CONNECTED BY DESIGN')}
      </figure>`;
    case 'about':
      return liveHeroVisual('about');
    case 'software':
      return `<figure class="section-visual capability-visual reveal" data-visual="capability-index" aria-label="AelfaCred connects provider records, workflow tools and ongoing visibility">
        <div class="capability-edge visual-decoration" aria-hidden="true"></div><div class="capability-top"><span class="visual-overline">THE CREDENTIALING TOOLKIT</span>${logo}</div>
        <div class="capability-index"><div class="capability-index-row"><span class="capability-index-number">01</span><div><strong>Clarity</strong><span>Provider records & documents</span></div><svg viewBox="0 0 44 44" fill="none" aria-hidden="true"><path d="M10 9h20l5 5v22H10Z"/><path d="M16 19h13M16 25h13M16 31h8"/></svg></div>
          <div class="capability-index-row"><span class="capability-index-number">02</span><div><strong>Control</strong><span>Tasks, signatures & reminders</span></div><svg viewBox="0 0 44 44" fill="none" aria-hidden="true"><path d="M10 12h24M10 22h24M10 32h24"/><path d="M17 8v8M28 18v8M20 28v8"/></svg></div>
          <div class="capability-index-row"><span class="capability-index-number">03</span><div><strong>Consistency</strong><span>Repeatable credentialing workflows</span></div><svg viewBox="0 0 44 44" fill="none" aria-hidden="true"><path d="m22 7 14 8-14 8-14-8Zm-14 15 14 8 14-8M8 29l14 8 14-8"/></svg></div>
          <div class="capability-index-row"><span class="capability-index-number">04</span><div><strong>Expertise</strong><span>Practical operational support</span></div><svg viewBox="0 0 44 44" fill="none" aria-hidden="true"><circle cx="22" cy="14" r="6"/><path d="M10 37v-4a12 12 0 0 1 24 0v4"/></svg></div></div>
        <div class="capability-footnote"><span>Software</span><span>Managed support</span><span>Hybrid</span></div>${caption('TECHNOLOGY + PRACTICAL CREDENTIALING SUPPORT')}
      </figure>`;
    default:
      throw new Error(`Unknown section illustration: ${kind}`);
  }
}
