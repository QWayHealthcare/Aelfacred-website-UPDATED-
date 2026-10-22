import { site } from './config.mjs';
import { sectionVisual } from './visuals.mjs';

export const escape = value => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
export const arrow = '<span aria-hidden="true">↗</span>';
export const link = (text, href, style = 'text-link') => `<a class="${style}" href="${href}">${text}${arrow}</a>`;
export const button = (text = 'Book a Demo', href = '/contact/') => link(text, href, 'button');

export function icon(name = 'layers') {
  const paths = {
    layers: '<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5"/>',
    checklist: '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V2h6v2M8 10l1 1 2-2m2 1h3m-8 6 1 1 2-2m2 1h3"/>',
    network: '<rect x="9" y="2" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="16" y="16" width="6" height="6" rx="1"/><path d="M12 8v4H5v4m7-4h7v4"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 2v6m10-6v6M3 11h18m-13 5h2m4 0h2"/>',
    shield: '<path d="m12 2 8 4v6c0 5-8 10-8 10S4 17 4 12V6l8-4Z"/><path d="m8 12 3 3 5-6"/>',
    verify: '<circle cx="10" cy="10" r="7"/><path d="m15 15 6 6M7 10l2 2 4-4"/>',
    people: '<circle cx="9" cy="7" r="3"/><path d="M3 21v-3a6 6 0 0 1 12 0v3m0-17a3 3 0 0 1 0 6m4 11v-4a5 5 0 0 0-3-4"/>',
    signature: '<path d="m4 16 1-5L16 0l5 5L10 16l-6 1Zm9-13 5 5M3 22h18"/>',
    chart: '<path d="M3 3v18h18M7 16l4-6 4 3 6-8"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 3"/>',
    arrow: '<path d="M5 12h14m-5-5 5 5-5 5"/>'
  };
  return `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.layers}</svg>`;
}

export function heading(eyebrow, title, text = '', extra = '') {
  return `<div class="section-heading reveal"><p class="eyebrow">${eyebrow}</p><h2>${title}</h2>${text ? `<p class="section-intro">${text}</p>` : ''}${extra}</div>`;
}

export function card(title, text, name, number = '', href = '') {
  return `<article class="card spotlight reveal"><div class="card-top"><span class="icon-box">${icon(name)}</span>${number ? `<span class="index">${number}</span>` : ''}</div><h3>${title}</h3><p>${text}</p>${href ? link('Explore more', href) : ''}</article>`;
}

export function networkArt(label = 'ONE CONNECTED WORKFLOW', type = 'platform') {
  const labels = type === 'process' ? ['Collect', 'Complete', 'Track', 'Maintain'] : type === 'services' ? ['Collect', 'Verify', 'Enroll', 'Maintain'] : type === 'about' ? ['Clarity', 'Control', 'Consistency', 'Expertise'] : ['Provider data', 'Documents', 'Workflows', 'Visibility'];
  label = label.replace(/\bMONITOR\b/g, 'MAINTAIN');
  return `<div class="network-art reveal" aria-label="${escape(label)}"><div class="dot-field" aria-hidden="true"></div><svg class="network-lines" viewBox="0 0 500 400" fill="none" aria-hidden="true"><path d="M90 75H170L250 200 330 75h80M90 325h80l80-125 80 125h80"/><path class="packet" pathLength="100" d="M90 75H170L250 200 330 75h80M90 325h80l80-125 80 125h80"/><circle cx="250" cy="200" r="103"/><circle class="orbit" cx="250" cy="200" r="137"/></svg><div class="network-core"><img class="network-logo" src="/assets/aelfacred-logo-white.png" width="176" height="64" alt="AelfaCred"><small>${type === 'services' ? 'Expertise + software' : 'Credentialing, connected.'}</small></div>${labels.map((text, i) => `<span class="network-node node-${i}">${icon(['people', 'verify', 'layers', 'chart'][i])}${text}</span>`).join('')}<span class="visual-caption">${label}</span></div>`;
}

export function productWorkspace() {
  return `<div class="product-demo workspace-demo reveal"><div class="product-copy"><p class="eyebrow">THE DETAILS. CONNECTED.</p><h3>A clearer view.<br><span>A smarter next step.</span></h3><p>Bring approaching renewals and outstanding signatures into focus. Explore how AelfaCred helps your team see what needs attention—and keep the work moving.</p><div class="product-tabs" role="tablist" aria-label="Explore credentialing workflows" hidden><button type="button" role="tab" id="expiry-tab" aria-selected="true" aria-controls="expiry-panel">${icon('calendar')}<span>Document expirations</span></button><button type="button" role="tab" id="esign-tab" aria-selected="false" aria-controls="esign-panel" tabindex="-1">${icon('signature')}<span>E-sign status</span></button></div><div class="workspace-promise">${icon('network')}<span>One connected workflow.<br><strong>From visibility to follow-through.</strong></span></div></div>
  <div class="product-panels workspace-shell"><div class="workspace-toolbar"><span class="workspace-brand"><img src="/assets/aelfacred-logo-white.png" width="176" height="64" alt="AelfaCred"><span>WORKSPACE</span></span><span class="preview-badge">Illustrative preview</span></div>
  <div id="expiry-panel" class="product-panel workspace-panel"><div class="workspace-title"><div><p class="eyebrow">CREDENTIAL MONITORING</p><h4>Stay ahead of the deadline.</h4></div><span class="workspace-symbol">${icon('shield')}</span></div><div class="monitor-summary"><div class="reminder-dial"><svg viewBox="0 0 120 120" fill="none" aria-hidden="true"><circle class="dial-track" cx="60" cy="60" r="50"/><circle class="dial-accent" cx="60" cy="60" r="50" pathLength="100"/></svg><span><strong>60<span>/</span>30</strong><small>DAY ALERTS</small></span></div><div><span class="mini-label">AHEAD OF EXPIRATION</span><h5>Time to take action.</h5><p>Keep upcoming credential renewals visible to providers and your credentialing team.</p></div></div><div class="workspace-table"><div class="workspace-table-head"><span>EXAMPLE CREDENTIAL</span><span>NEXT ACTION</span></div>${[['State license', 'Review renewal', 'shield'], ['DEA registration', 'Request updated record', 'checklist'], ['Board certification', 'Confirm current document', 'verify']].map(([name, action, glyph]) => `<div class="workspace-row"><span class="record-name">${icon(glyph)}<span>${name}</span></span><span class="record-action">${action}</span></div>`).join('')}</div><div class="workspace-flow"><span>${icon('layers')}Record</span><i></i><span>${icon('clock')}Alert</span><i></i><span>${icon('verify')}Review</span></div></div>
  <div id="esign-panel" class="product-panel workspace-panel" hidden><div class="workspace-title"><div><p class="eyebrow">SIGNATURE COORDINATION</p><h4>Keep every signature in sight.</h4></div><span class="workspace-symbol">${icon('signature')}</span></div><div class="signature-preview"><div class="signature-paper" aria-hidden="true"><span class="paper-label">APPLICATION</span><i></i><i></i><i></i><div class="signature-line">${icon('signature')}<span>Provider signature</span></div></div><div class="signature-context"><span class="mini-label">A CLEARER FOLLOW-UP</span><h5>The next step<br>stays visible.</h5><p>Track applications awaiting provider or authorized-person signatures.</p></div></div><ol class="signature-stages"><li><span>01</span><div><strong>Request the signature</strong><small>Identify the application and required signer.</small></div></li><li><span>02</span><div><strong>Keep follow-up moving</strong><small>Use reminders to surface outstanding action.</small></div></li><li><span>03</span><div><strong>Track through completion</strong><small>Maintain visibility until the signature is complete.</small></div></li></ol></div><p class="workspace-caption"><span aria-hidden="true"></span>Workflow illustration · Example records, not live provider data</p></div></div>`;
}

export function pageHero({ eyebrow, title, text, path, label, art = 'platform', action = true }) {
  return `<section class="page-hero section"><div class="container"><nav class="breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><span aria-current="page">${label}</span></nav><div class="split hero-split"><div class="hero-copy reveal"><p class="eyebrow">${eyebrow}</p><h1>${title}</h1><p class="hero-description">${text}</p>${action ? `<div class="actions">${button()}${link('Explore Services', '/services/')}</div>` : ''}</div>${sectionVisual(art)}</div></div></section>`;
}

export function cta(title = 'Your next chapter.<br><span>Better connected.</span>', text = 'Bring your provider data, credentialing workflows and operational support into one clear conversation.') {
  return `<section class="section cta-section"><div class="container cta-panel reveal"><div><p class="eyebrow">LET’S MOVE PROVIDERS FORWARD</p><h2>${title}</h2><p>${text}</p></div><div class="cta-actions">${button('Let’s Talk Credentialing')}${link('Discover the Platform', '/platform/')}</div><svg class="cta-lines" viewBox="0 0 1200 200" aria-hidden="true"><path class="draw-path" pathLength="1" d="M0 170H260Q320 170 360 100T460 30H780Q850 30 890 100T990 170H1200"/></svg></div></section>`;
}

export function faq(items) {
  return `<div class="faq-list">${items.map(([q, a], i) => `<details class="reveal"><summary><span class="faq-number">0${i + 1}</span><span>${q}</span><i aria-hidden="true"></i></summary><div class="faq-answer"><p>${a}</p></div></details>`).join('')}</div>`;
}

export function articleCard(article, index = 0) {
  return `<article class="article-card spotlight reveal" data-category="${article.category}" data-search="${escape(`${article.title} ${article.excerpt} ${article.keywords.join(' ')}`.toLowerCase())}"><a class="article-cover cover-${index % 3}" href="/resources/${article.slug}/" tabindex="-1" aria-hidden="true"><span class="article-cover-grid"></span><span class="article-cover-icon">${icon(article.icon)}</span><span class="cover-number">0${index + 1}</span><span class="cover-label">AELFACRED / FIELD NOTES</span></a><div class="article-card-copy"><p class="eyebrow">${article.category} <span class="reading-time">${readingTime(article)} min read</span></p><h3><a href="/resources/${article.slug}/">${article.title}</a></h3><p>${article.excerpt}</p>${link('Read the article', `/resources/${article.slug}/`)}</div></article>`;
}

export function readingTime(article) {
  const text = [article.intro, ...article.parts.flatMap(p => [p.title, ...p.paragraphs, ...(p.bullets || [])])].join(' ');
  return Math.max(3, Math.ceil(text.split(/\s+/).length / 200));
}

export function workflow() {
  const steps = [
    ['Collect', 'Gather accurate provider information and the documents required for the selected workflow.'],
    ['Verify', 'Complete the required primary source checks and organize the supporting verification records.'],
    ['Credential', 'Coordinate review requirements, outstanding questions and credentialing decisions.'],
    ['Enroll', 'Track payer applications, follow-ups, requests and confirmed enrollment details.'],
    ['Monitor', 'Keep license expirations, CAQH attestations and recurring requirements visible.'],
    ['Report', 'Give the team a shared view of progress, open actions and approaching deadlines.']
  ];
  return `<div class="workflow reveal"><div class="workflow-track" aria-hidden="true"><span></span></div><div class="workflow-steps">${steps.map(([title, text], i) => `<div class="workflow-step"><button type="button" aria-pressed="${i === 0}" aria-controls="workflow-detail" data-step="${i}"><span class="step-number">0${i + 1}</span><strong>${title}</strong></button><p>${text}</p></div>`).join('')}</div><div class="workflow-detail" id="workflow-detail" aria-live="polite" aria-atomic="true" hidden><span class="detail-number">01 / 06</span><div><p class="eyebrow">THE NEXT STEP IS CLEAR</p><h3>Collect</h3><p class="detail-text">${steps[0][1]}</p></div>${icon('network')}</div></div>`;
}

export function header(path) {
  return `<a class="skip-link" href="#main">Skip to content</a><header class="site-header"><div class="nav-container"><a class="brand" href="/" aria-label="AelfaCred home"><img src="/assets/aelfacred-logo-white.png" width="118" height="44" alt="AelfaCred"></a><button class="menu-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="main-nav" type="button"><span></span><span></span></button><nav id="main-nav" aria-label="Main navigation">${site.navigation.map(([text, url]) => `<a href="${url}"${(url === '/resources/' ? path.startsWith(url) : path === url) ? ' aria-current="page"' : ''}>${text}</a>`).join('')}</nav>${link('Book a Demo', '/contact/', 'nav-cta')}</div></header>`;
}

export function footer() {
  return `<footer class="site-footer"><div class="container footer-grid"><div class="footer-brand"><a class="brand" href="/" aria-label="AelfaCred home"><img src="/assets/aelfacred-logo-white.png" width="118" height="44" alt="AelfaCred"></a><p>Healthcare credentialing software and managed services. One connected approach to provider operations.</p><span class="footer-tag">CREDENTIALING, CONNECTED.</span><h2 class="footer-app-title">Get the AelfaCred App</h2><div class="footer-store-badges"><a class="store-badge store-badge-apple" href="${site.appStoreUrl}" target="_blank" rel="noopener noreferrer" aria-label="Download the AelfaCred app on the Apple App Store"><svg class="store-badge-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="#fff" d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/></svg><span class="store-badge-text"><small>Download on the</small><strong>App Store</strong></span></a><a class="store-badge store-badge-google" href="${site.googlePlayUrl}" target="_blank" rel="noopener noreferrer" aria-label="Get the AelfaCred app on Google Play"><svg class="store-badge-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="#00d4ff" d="M3.6 1.8 13.4 12 3.6 22.2c-.4-.3-.6-.8-.6-1.4V3.2c0-.6.2-1.1.6-1.4z"/><path fill="#00f076" d="m16.7 8.7-3.3 3.3L3.6 1.8c.4-.3 1-.3 1.6 0z"/><path fill="#ffce00" d="m20.4 10.8-3.7-2.1-3.3 3.3 3.3 3.3 3.7-2.1c.9-.5.9-1.9 0-2.4z"/><path fill="#ff3a44" d="m16.7 15.3-11.5 6.5c-.6.3-1.2.3-1.6 0l9.8-10.2z"/></svg><span class="store-badge-text"><small>GET IT ON</small><strong>Google Play</strong></span></a></div></div><div><h2>Explore AelfaCred</h2><a href="/platform/">Credentialing Software</a><a href="/services/">Credentialing Services</a><a href="/who-we-serve/">Who We Serve</a><a href="/about/">About Us</a><a href="/contact/">Book a Demo</a></div><div><h2>Practical Resources</h2><a href="/resources/provider-credentialing-checklist/">Credentialing Checklist</a><a href="/resources/credentialing-vs-payer-enrollment/">Credentialing vs. Enrollment</a><a href="/resources/caqh-attestation-management/">CAQH Attestation</a><a href="/resources/primary-source-verification/">Primary Source Verification</a><a href="/resources/">All Articles</a></div><div><h2>Start a Conversation</h2><a href="mailto:${site.email}">${site.email}</a><a href="tel:${site.phoneLink}">${site.phone}</a><a href="https://qwayhealthcare.ai/">QWay Healthcare ${arrow}</a><p class="footer-small">Software. Managed services.<br>Or a connected combination.</p></div></div><div class="container footer-bottom"><p>© ${site.date.slice(0, 4)} AelfaCred. All rights reserved.</p><span>Designed around the provider lifecycle.</span><a href="#top">Back to top ↑</a></div></footer>`;
}

export function layout(page) {
  const canonical = `${site.origin}${page.path}`;
  const schemas = [
    { '@context': 'https://schema.org', '@type': 'Organization', '@id': `${site.origin}/#organization`, name: site.name, url: `${site.origin}/`, logo: `${site.origin}/assets/aelfacred-logo-blue.png` },
    { '@context': 'https://schema.org', '@type': 'WebSite', '@id': `${site.origin}/#website`, name: site.name, url: `${site.origin}/` },
    { '@context': 'https://schema.org', '@type': 'WebPage', '@id': `${canonical}#webpage`, name: page.title, description: page.description, url: canonical, isPartOf: { '@id': `${site.origin}/#website` } },
    ...(page.schema || [])
  ];
  if (page.path !== '/') schemas.push({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${site.origin}/` },
    ...(page.article ? [{ '@type': 'ListItem', position: 2, name: 'Resources', item: `${site.origin}/resources/` }] : []),
    { '@type': 'ListItem', position: page.article ? 3 : 2, name: page.label, item: canonical }
  ] });
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escape(page.title)}</title><meta name="description" content="${escape(page.description)}"><meta name="keywords" content="${escape(page.keywords.join(', '))}"><meta name="robots" content="${page.noindex ? 'noindex,follow' : 'index,follow,max-image-preview:large'}"><link rel="canonical" href="${canonical}"><meta name="theme-color" content="#060d18"><meta property="og:type" content="${page.article ? 'article' : 'website'}"><meta property="og:title" content="${escape(page.title)}"><meta property="og:description" content="${escape(page.description)}"><meta property="og:url" content="${canonical}"><meta property="og:site_name" content="AelfaCred"><meta property="og:image" content="${site.origin}/assets/social-card.png"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="AelfaCred — Credentialing, Connected"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${escape(page.title)}"><meta name="twitter:description" content="${escape(page.description)}"><meta name="twitter:image" content="${site.origin}/assets/social-card.png">${page.article ? `<meta property="article:published_time" content="${site.date}"><meta property="article:modified_time" content="${site.date}">` : ''}<link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="stylesheet" href="/site.css">${page.path === '/' ? '<link rel="stylesheet" href="/hero.css">' : ''}<script type="application/ld+json">${JSON.stringify(schemas).replace(/</g, '\\u003c')}</script><script src="/site.js" defer></script>${page.path === '/' ? '<script src="/hero.js" defer></script>' : ''}</head>
<body id="top" class="${page.path === '/' ? 'home-page' : ''}${page.article ? ' article-page' : ''}"><noscript><style>.cinematic{height:auto!important}.cinematic-pin{position:relative!important}.scroll-cue,.hero-meter,.menu-toggle{display:none!important}</style></noscript>${header(page.path)}<main id="main" tabindex="-1">${page.content}</main>${footer()}${page.article ? '<div class="reading-progress" aria-hidden="true"><span></span></div>' : ''}</body></html>`
    .replace('</head>',page.content.includes('data-expansion')?'<link rel="stylesheet" href="/expansion.css"><script src="/expansion.js" defer></script></head>':page.path==='/contact/'?'<script src="/expansion.js" defer></script></head>':'</head>')
    .replace('</head>',page.content.includes('service-route-visual')?'<script src="/route-labels.js" defer></script></head>':'</head>')
    .replace('</head>',page.content.includes('data-pendant')?'<link rel="stylesheet" href="/qway-pendant.css"><script src="/qway-pendant.js" defer></script></head>':'</head>');
}
