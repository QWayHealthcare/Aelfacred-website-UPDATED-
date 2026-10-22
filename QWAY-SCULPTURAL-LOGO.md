# QWay sculptural logo redesign

Replaces the previous boxed QWay logo treatment on About with an open composition:

- Two animated, depth-sorted blue light ribbons around the original wordmark.
- Moving highlights along the ribbons and subtle background particles.
- A soft, unframed light halo that keeps the original red-and-blue logo legible.
- Pointer-responsive depth, with supporting labels below the sculpture.
- Pause/play control, offscreen suspension and reduced-motion support.
- A static SVG ribbon fallback when JavaScript is unavailable.

Uses the existing dependency-free canvas animation controller, capped at 30 frames
per second and 1.5 device pixel ratio. The custom renderer is selected only for
the QWay sculpture. Existing page copy and previous Independent Physicians changes
are retained. This design supersedes QWAY-LOGO-HIGHLIGHT.md.

## Verification

Production build and site checks passed. Browser checks at 1440, 1024, 768, 390
and 320 pixels verified the open layout, logo loading, canvas animation, clear
caption/tag spacing, no horizontal overflow and pause/resume. Offscreen suspension,
reduced-motion behavior and the no-JavaScript fallback also passed, with no
uncaught JavaScript errors.
