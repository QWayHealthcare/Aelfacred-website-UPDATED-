# Header, logo and diagram update

Requested refinements applied to the complete expanded-content website:

1. Changed the visible lifecycle illustration labels from Monitor to Maintain,
   including the homepage diagram caption and service-route endpoint.
2. Moved the first service-route stroke below Collect. Responsive path fitting keeps
   it clear of the text and routes the first bend to the left of the Verify label.
3. Replaced the constructed Q/Way/Healthcare lettering in the About graphic with the
   red/blue QWay Healthcare wordmark matching the supplied reference. The logo is
   bundled locally in `public/assets/qway-healthcare-logo.webp` with its aspect ratio
   preserved. The surrounding blue graphic and supporting caption remain.
4. Added Why AelfaCred to the shared header, linking to `/why-aelfacred/` and using
   the existing active-link treatment and mobile navigation.
5. Removed CRED / Provider Operations beside the header logo. The AelfaCred image
   remains the home link.

## Verified

- Production build and existing content/link/schema checks pass.
- Home, Services, About and Why AelfaCred checked at 1440, 1024, 901, 768, 390 and
  320 pixels: 24 layout checks without horizontal overflow or JavaScript errors.
- Sampled the SVG route geometry to confirm that no stroke intersects the Collect
  text at these sizes, including during responsive resizing.
- Confirmed the logo loads, keeps its natural 800:69 proportions and replaces the
  previous text-generated wordmark.
- Tested Why AelfaCred navigation and its active state on desktop and mobile.

The complete source, all existing content/additions, assets and rebuilt `dist/` are
included. Run with the original commands in README.md.
