# Competitor-informed content additions

This release extends `AelfaCred_Font_Size_Only_Updated.zip`. All original page copy,
including the homepage story, six articles, forms and existing sections, is retained.

## New content and designs

| Location | Addition | Design / interaction |
| --- | --- | --- |
| Home | The work behind a credentialing status | Three-part context board and flowing line accent |
| About | Why QWay developed AelfaCred | Original purpose narrative, sticky brand panel and editorial copy |
| Platform | A workflow worth demonstrating | Keyboard-accessible provider-file, application and monitoring explorer |
| Services | Credentialing-to-billing handoff | Three-lane process with explicit responsibilities and scope |
| Resources | Prepare a useful demonstration | Six selectable priorities that carry into the existing enquiry form |
| `/why-aelfacred/` | Purpose, QWay perspective and evaluation guidance | New five-section page with a practical evaluation matrix |

The existing blue palette, larger fonts and animation direction are retained. New
designs are isolated in `public/expansion.css`; new interactions are isolated in
`public/expansion.js`. Existing CSS and JavaScript files are unchanged.

## Source files

- `src/expansion.mjs`: all added copy, section markup and the new page.
- `src/pages.mjs`: calls `extendPages` after generating the existing pages.
- `src/components.mjs`: adds the new stylesheet/runtime only where needed.
- `source-content/Softwares Comparison.xlsx`: the supplied competitor workbook.
- `COMPETITOR-RESEARCH-NOTES.md`: reviewed sites, limitations and editorial basis.

The existing 13 pages plus the new Why AelfaCred page make 14 content pages. New
sections are inserted independently before each relevant page's final section; none
of the original sections were rewritten or packed together to accommodate them.

## Verified

- Build, schema, links, sitemap and existing content checks pass.
- Compared all original 13 pages plus 404 against the previous ZIP. Removing only
  the additions and their new asset links produces the exact original HTML.
- 56 responsive checks: all 14 pages at 1440, 768, 390 and 320 pixels, no horizontal
  overflow, one H1 per page, and a heading in every added section.
- New explorer tabs, arrow/Home keyboard behavior, planner counts and contact-form
  prefilling work. Invalid query data is ignored.
- Existing product tabs, audience popups, resource search and hero scenes still work.
- Reduced-motion behavior and no-JavaScript access to the new explorer copy checked.
- No uncaught JavaScript errors during browser tests.

## Run

Use the existing commands: `npm run dev`, or `npm run build` then `npm start`.
The complete source, original assets and rebuilt `dist/` are included.

The original email-draft flow is preserved. Selecting priorities does not submit
personal information or send a message; it only prefills the existing Message field.
