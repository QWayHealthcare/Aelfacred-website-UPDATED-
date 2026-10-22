# QWay logo highlight update

The About-page QWay graphic now uses a bright, near-white logo surface inside a
blue illuminated frame. The original red/blue logo image is retained without filters,
recoloring or distortion.

Effects include a traveling frame highlight, a gentle ambient glow, a light sweep
behind the logo, and restrained pointer-responsive depth. Text and logo do not drift
continuously. A pause/play button reuses the existing animation controller; motion
pauses offscreen and respects reduced-motion preferences.

All new styles are scoped to `.qway-highlight`. The surrounding text and the rest
of the site retain their existing content and designs.

Verified at 1440, 1024, 768, 390 and 320 pixels: logo loaded at its original ratio,
light surface visible, no horizontal overflow, animation active while visible,
pause/resume functional, offscreen suspension and reduced-motion behavior correct.
No JavaScript errors occurred. Build and existing site checks pass.
