# Font-size-only update

Based only on the supplied archive:
`13.10.26 Changed AelfaCred_Advanced_Hero_Animations_Full_Code.zip`.

## Changes

- Supporting/body text increased to 17–18px.
- Buttons, navigation, form controls and interface text increased to 16–17px.
- Small labels, captions, badges and article helper text increased to at least 14px.
- The capability strip is now 17–18px.
- Collect / Verify / Enroll / Monitor labels are now 17–18px, with larger label boxes.
- Larger padding, natural card heights and additional diagram/panel space accommodate
  the larger text. Connector lines remain aligned with the enlarged diagram boxes.
- Existing large cinematic H1/H2 sizes, line heights and letter spacing are preserved.

The implementation is an appended, screen-only block in `public/site.css`. The
rebuilt `dist/site.css` contains the same update. No other original source file,
generated HTML, text content, image/video, JavaScript or hero stylesheet was changed.

## Verification performed

- Production build and the original site's checks pass.
- All 13 pages tested at 1440, 1024, 768, 390 and 320 pixels: 65 responsive checks.
- No unintended horizontal page overflow or clipped paragraph/heading/button widths.
- Diagram/panel text checked inside its enlarged containers on desktop and mobile.
- Compared the hero's computed H1/H2 font sizes, line heights, letter spacing and
  weights against the original stylesheet at all five sizes: identical.
- Verified larger diagram fonts/boxes and capability-strip text against the original.
- Product tabs, keyboard switching, audience popups and resource search still work.
- Byte comparisons confirm only the two stylesheet copies differ from the input ZIP.

## Run

Use the original project commands: `npm run dev`, or `npm run build` then `npm start`.
Both the complete source and the rebuilt `dist/` are included, matching the input
archive's packaging. All original project instructions remain in README.md.
