# Interactive standing lamp — About / QWay

Adds a floor lamp to the existing open, curved QWay logo composition. No box
template is introduced. Existing visual dimensions, copy, typography and service
labels are retained.

## Source files

- `src/standing-lamp.mjs`: decorative SVG with a metallic stand, stable base,
  fabric-style shade, bulb, halo, downward beam and illuminated floor.
- `public/standing-lamp.css`: scoped, nonblocking lighting layers. The light turns
  on over 800ms and off over 550ms. Ambient light fades out at the visual edges;
  the original logo stays above the illumination layer.
- `public/standing-lamp.js`: IntersectionObserver controller with a 32% on / 12%
  off hysteresis band and a 72px top offset for the header. It uses no scroll
  handlers or animation loop. Repeated entries work in both scroll directions.
- `src/pages.mjs`: inserts the lamp into the existing QWay visual.
- `src/components.mjs`: loads lamp CSS/JS only when its markup is present.

The light switches off when the document is hidden or the page is left, and
resumes viewport observation when restored. Observers and lifecycle listeners
are disposed when the visual is removed. Without IntersectionObserver or
JavaScript, the unlit illustration remains usable. Reduced-motion users get
instant light-state changes without fades. No external assets or dependencies
were added.

## Verification

- Production build and existing site checks passed.
- Browser checks at 1440, 1024, 768, 390 and 320 pixels: on/off, hysteresis,
  repeated visits, nonblocking overlays, no horizontal overflow and logo loading.
- Compared figure contents with the previous delivered version: stage, oval,
  logo and caption dimensions match within browser subpixel rounding.
- Tested reduced motion, no-JavaScript fallback, page lifecycle restoration,
  removal cleanup and stable state while the visual remains in view.
- No uncaught JavaScript errors during the browser checks.

Run `npm run build` to regenerate `dist/`, `npm run check` for site checks, and
`npm start` to preview. This ZIP includes both complete source and rebuilt output.
