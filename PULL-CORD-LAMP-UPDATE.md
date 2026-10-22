# QWay hanging lamp and interactive pull cord

The About-page company visual now uses an open composition with a hanging lamp
above the QWay wordmark. The previous oval, perimeter ring and floor lamp have
been replaced. Surrounding company copy and the three service labels are retained.

## Interaction

- Drag the rope downward approximately 32px and release to toggle the spotlight.
- The rope follows the pointer, with a bounded extension, and springs back.
- Pull again to turn the light off. Clicking/tapping the rope also toggles it.
- Keyboard users can Tab to the cord and press Enter or Space. Focus, pressed
  state, action labels and a screen-reader status are included.
- The lamp starts off and keeps the visitor's manual choice while scrolling.
- Short/upward or cancelled drags do not toggle the lamp.
- Reduced-motion users get immediate state changes without the spring/fades.

The warm spotlight illuminates the wordmark with a soft downward cone. The logo
remains visible when the lamp is off. There is no card or oval behind it.

## Implementation

- `src/qway-pendant.mjs`: complete semantic visual and inline SVG fixture.
- `public/qway-pendant.css`: responsive open layout, light and rope styling.
- `public/qway-pendant.js`: mouse/touch Pointer Events, pointer capture, keyboard
  activation, drag cancellation and component-removal cleanup.
- `src/pages.mjs`: replaces the previous QWay figure with the new component.
- `src/components.mjs`: conditionally loads its CSS and JS on the relevant page.

No dependencies, external visual assets, scroll handlers or animation loops were
added. Decorative light layers do not intercept pointer input. With JavaScript
disabled, the logo and unlit fixture remain visible and the inactive control is
hidden. The former standalone standing-lamp source/CSS/JS files were removed.

## Checked

Build and existing site checks pass. Browser tests at 1440, 1024, 768, 390 and
320px verified mouse pulls, short/upward drags, spring return, clicks, Enter/Space,
stable layout, nonblocking lighting and no horizontal overflow. Chromium touch
tests verified real touch drag, tap and cancellation without scrolling the page
while pulling. Reduced motion, removal cleanup and the no-JavaScript fallback
passed; no uncaught JavaScript errors occurred.

This document supersedes the earlier QWay oval and standing-lamp design notes.
The archive contains complete source and rebuilt `dist/`. Use `npm run build`,
`npm run check` and `npm start` for build, checks and local preview.
