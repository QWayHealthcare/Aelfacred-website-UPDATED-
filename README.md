# AelfaCred — Multi-page Website

Latest refinements: updated Maintain labels, corrected Collect animation clearance,
the supplied-style QWay wordmark, a Why AelfaCred header link, and removal of the
header's extra CRED / Provider Operations text. See `VISUAL-CORRECTIONS.md`.

## Current release: original content plus new additions

This edition contains the original 13 pages and a new **Why AelfaCred** page, with
additional content on Home, About, Platform, Services and Resources. Existing copy,
templates, larger fonts and the cinematic hero are preserved. See
`CONTENT-ADDITIONS.md` and `COMPETITOR-RESEARCH-NOTES.md` for the additions and sources.

Complete source, original assets and ready-to-deploy static website.

## What is included

- **13 separate pages:** Home, Platform, Services, Who We Serve, Resources, About,
  Contact and six full-length credentialing articles. All primary navigation loads
  real pages, including `/about/`; this is not a single-page section layout.
- **Five main sections maximum per page.** Article pages have four sections.
- Original dark blue / ice-blue design direction, with no green/teal theme accents.
- Home retains the supplied cinematic video, pinned scroll storytelling, three
  scenes, zoom/filter treatment and magnetic CTA interaction.
- Blue SVG data pathways, pointer-lit cards, staggered reveals, an interactive
  lifecycle, product tabs, smooth FAQs and searchable/filterable articles.
- About includes separate QWay Healthcare and AelfaCred narratives.
- Refined product showcase with responsive blue document-monitoring and signature
  workflow illustrations. The examples are clearly labeled as illustrative.
- All six Who We Serve arrows open audience-specific dialogs with practical,
  source-grounded content, related guides and a contact action.
- The connected-logo diagram appears only in the Home provider-lifecycle section.
  Other placements use distinct, contextual illustrations: a workflow engine,
  service route, healthcare campus, generative brand scene, document library and
  software capability index.
  The QWay visual uses one large Q aligned with “Way” and “Healthcare.”
- About, Platform and Resources heroes now have continuously animated scenes with
  individual pause/play controls. About uses real-time canvas ribbons and particles;
  Platform uses isometric scanning layers; Resources uses a 3D document conveyor.
- Unique SEO titles/descriptions, topical keywords, canonicals, social metadata,
  Organization/WebSite/WebPage/Breadcrumb/Software/Service/Article schema as
  appropriate, visible FAQ schema, sitemap and robots.txt.
- All content is present in generated HTML, including articles. No client-side
  rendering, external fonts, runtime libraries or production dependencies.

## Run locally

Install Node.js 20 or newer, open a terminal in this folder, then:

```sh
npm run dev
```

Open **http://localhost:5192**. On Windows PowerShell, use `npm.cmd` if your script
policy blocks `npm.ps1`. No dependency installation is required.

```sh
npm run build       # Regenerate every page and copy static assets
npm run check       # Check links, metadata, article length and section limits
npm start          # Serve the current dist/ build
```

For a different port: `npm start -- --port 5200`.

## Deploy

Upload the **contents of `dist/`** to the root of a static website host. It includes
all page directories, CSS, JavaScript, images, video, sitemap and robots.txt. Configure
the host to serve each directory's `index.html` and use `404.html` for missing pages.
Do not apply an SPA catch-all rewrite; every route has its own HTML file.

Serve over HTTP/HTTPS, rather than opening HTML with `file://`. Video seeking needs
HTTP byte-range support; the included preview server supports it.

The default canonical domain is `https://aelfacred.com`. To change it before building:

```powershell
$env:SITE_URL = "https://your-domain.com"
npm.cmd run build
```

Publish at the domain root. Navigation/assets intentionally use root-relative URLs.

## Where to edit

| File | Purpose |
| --- | --- |
| `src/pages.mjs` | Seven main pages, page metadata and article page layout |
| `src/articles.mjs` | Six complete articles, summaries, keywords and sources |
| `src/audiences.mjs` | Six audience-specific popup explanations and dialog markup |
| `src/visuals.mjs` | Five unique, section-specific illustrations |
| `src/live-heroes.mjs` | Three advanced About, Platform and Resources hero compositions |
| `src/components.mjs` | Shared header/footer, cards, diagrams, product workspace and SEO shell |
| `src/config.mjs` | Canonical domain, public contact details and source URLs |
| `public/site.css` | Blue theme, responsive layouts, section effects and print styling |
| `public/visuals.css` | Contextual effects from the new animation/styling catalogue |
| `public/live-effects.css` / `public/live-effects.js` | Three scoped motion scenes, real-time canvas, pause/resume and visibility management |
| `public/site.js` | Navigation, tabs, stepper, FAQs, search, contact draft and reveals |
| `public/hero.css` / `public/hero.js` | Homepage cinematic styling and video scrolling |
| `public/assets/` | Original assets plus editable social SVG and ready-to-use PNG |
| `scripts/` | Dependency-free build, local HTTP server and structural checks |
| `dist/` | Complete generated website ready for hosting |
| `SEO-MAP.json` | Per-page keyword targets, metadata and section counts |
| `source-content/` | The supplied source documents and effects catalogue |

After editing source or public files, rerun `npm run build` and refresh the browser.
The local server serves `dist/` and does not have hot module replacement.

## Page map

| Page | URL | Main sections |
| --- | --- | --- |
| Home | `/` | 5 |
| Platform | `/platform/` | 5 |
| Services | `/services/` | 5 |
| Who We Serve | `/who-we-serve/` | 4 |
| Resources | `/resources/` | 3 |
| About Us | `/about/` | 5 |
| Contact / Demo | `/contact/` | 3 |
| Provider credentialing checklist | `/resources/provider-credentialing-checklist/` | 4 |
| Credentialing vs. payer enrollment | `/resources/credentialing-vs-payer-enrollment/` | 4 |
| CAQH attestation management | `/resources/caqh-attestation-management/` | 4 |
| Recredentialing and expiration tracking | `/resources/recredentialing-and-expiration-tracking/` | 4 |
| Credentialing software and onboarding | `/resources/credentialing-software-provider-onboarding/` | 4 |
| Primary source verification | `/resources/primary-source-verification/` | 4 |

## Contact flow

The source archive did not include a backend. This version provides an explicit
**email-draft workflow** using QWay's published `sales@qwayhealthcare.ai` address.
Required fields are validated; the form prepares an encoded email, opens the user's
email app and shows a copyable fallback. It never falsely reports a server submission.
The website does not save form data. Replace this flow with your own form endpoint
if you want direct server delivery.

## Content and search optimization

The copy targets useful search intent rather than repeated keyword blocks. Articles
include contextual internal links, readable headings, descriptions and official
sources. Metadata and schema support discovery; actual rankings depend on indexing,
competition, site authority and ongoing publishing.

`SOURCE-NOTES.md` records the content basis. `VERIFICATION.md` summarizes checks.
`SECTION-EFFECTS.md` maps each unique illustration to the supplied effects catalogue.
