/* Native enhancements shared by every static page. Content is already in HTML. */
(() => {
  'use strict';
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
  const activeTransitions = new WeakMap();
  function animateChange(element) {
    activeTransitions.get(element)?.cancel();
    if (reduced.matches || !element.animate) return;
    activeTransitions.set(element, element.animate([{ opacity: .4, transform: 'translateY(8px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 300, easing: 'cubic-bezier(.2,.7,.2,1)' }));
  }

  // Real page navigation; the mobile menu dismisses on Escape or outside click.
  const header = $('.site-header');
  const menu = $('.menu-toggle');
  function setMenu(open) {
    header.classList.toggle('menu-open', open);
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }
  menu.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') { setMenu(false); menu.focus(); }
  });
  document.addEventListener('click', event => { if (!header.contains(event.target)) setMenu(false); });
  $$('#main-nav a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  matchMedia('(max-width: 900px)').addEventListener('change', () => setMenu(false));
  header.addEventListener('focusout', event => { if (event.relatedTarget && !header.contains(event.relatedTarget)) setMenu(false); });

  // Native dialogs provide focus containment, Escape dismissal and inert background.
  $$('.audience-open').forEach(button => {
    const dialog = document.getElementById(button.dataset.dialog);
    if (!dialog || typeof dialog.showModal !== 'function') return;
    button.hidden = false;
    let pointerStartedOutside = false;
    button.addEventListener('click', () => {
      dialog.showModal();
      dialog.scrollTop = 0;
      document.body.classList.add('dialog-open');
      if (!reduced.matches) dialog.animate([{ opacity: 0, transform: 'translateY(16px) scale(.98)' }, { opacity: 1, transform: 'none' }], { duration: 240, easing: 'cubic-bezier(.2,.7,.2,1)' });
    });
    $('.dialog-close', dialog).addEventListener('click', () => dialog.close());
    const outside = event => {
      const rect = dialog.getBoundingClientRect();
      return event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
    };
    dialog.addEventListener('pointerdown', event => { pointerStartedOutside = event.target === dialog && outside(event); });
    dialog.addEventListener('click', event => {
      if (pointerStartedOutside && event.target === dialog && outside(event)) dialog.close();
      pointerStartedOutside = false;
    });
    dialog.addEventListener('close', () => {
      if ($('.audience-dialog[open]')) return;
      document.body.classList.remove('dialog-open');
      button.focus({ preventScroll: true });
    });
  });

  // Product tabs support Arrow keys, Home and End with correct tab/panel semantics.
  const tabs = $$('.product-tabs [role="tab"]');
  if (tabs.length) {
    $('.product-tabs').hidden = false;
    tabs.forEach(tab => {
      const panel = document.getElementById(tab.getAttribute('aria-controls'));
      panel.setAttribute('role', 'tabpanel'); panel.setAttribute('aria-labelledby', tab.id); panel.tabIndex = 0;
    });
    const activate = index => tabs.forEach((tab, i) => {
      const selected = i === index;
      tab.setAttribute('aria-selected', String(selected)); tab.tabIndex = selected ? 0 : -1;
      const panel = document.getElementById(tab.getAttribute('aria-controls'));
      panel.hidden = !selected;
      if (selected) animateChange(panel);
    });
    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => activate(index));
      tab.addEventListener('keydown', event => {
        const next = event.key === 'ArrowRight' ? (index + 1) % tabs.length : event.key === 'ArrowLeft' ? (index + tabs.length - 1) % tabs.length : event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : null;
        if (next === null) return;
        event.preventDefault(); activate(next); tabs[next].focus();
      });
    });
  }

  // Lifecycle: labels and descriptions are read from the visible source content.
  const stepButtons = $$('.workflow-step button');
  const detail = $('#workflow-detail');
  if (stepButtons.length && detail) {
    detail.hidden = false;
    const activate = index => {
      stepButtons.forEach((button, i) => button.setAttribute('aria-pressed', String(i === index)));
      $('.detail-number', detail).textContent = `0${index + 1} / 06`;
      $('h3', detail).textContent = $('strong', stepButtons[index]).textContent;
      $('.detail-text', detail).textContent = $('p', stepButtons[index].parentElement).textContent;
      $('.workflow-track span').style.width = `${index / (stepButtons.length - 1) * 100}%`;
      animateChange(detail);
    };
    stepButtons.forEach((button, index) => {
      button.addEventListener('click', () => activate(index));
      button.addEventListener('keydown', event => {
        const next = event.key === 'ArrowRight' ? (index + 1) % stepButtons.length : event.key === 'ArrowLeft' ? (index + stepButtons.length - 1) % stepButtons.length : event.key === 'Home' ? 0 : event.key === 'End' ? stepButtons.length - 1 : null;
        if (next === null) return;
        event.preventDefault(); activate(next); stepButtons[next].focus();
      });
    });
  }

  // Details retain native keyboard/no-JS behavior; both open and close animate.
  $$('.faq-list details').forEach(details => {
    const summary = $('summary', details);
    let animation = null;
    let expanded = details.open;
    summary.addEventListener('click', event => {
      if (reduced.matches || !details.animate) return;
      event.preventDefault();
      const from = details.getBoundingClientRect().height;
      animation?.cancel();
      expanded = !expanded;
      details.open = true;
      details.style.height = 'auto';
      const to = expanded ? details.getBoundingClientRect().height : summary.getBoundingClientRect().height + 2;
      details.style.height = `${from}px`;
      animation = details.animate({ height: [`${from}px`, `${to}px`] }, { duration: 300, easing: 'cubic-bezier(.2,.7,.2,1)' });
      animation.onfinish = () => { details.open = expanded; details.style.height = ''; animation = null; };
    });
    details.addEventListener('toggle', () => { if (!animation) expanded = details.open; });
    reduced.addEventListener('change', () => {
      if (!animation) return;
      animation.cancel(); animation = null; details.open = expanded; details.style.height = '';
    });
  });

  // Resources: combined category and text filtering, result counts and reset.
  const search = $('#article-search');
  if (search) {
    const cards = $$('.article-library .article-card');
    const filters = $$('[data-filter]');
    const status = $('.search-status');
    let category = 'All';
    $('.resource-controls').hidden = false;
    const filter = () => {
      const query = search.value.trim().toLocaleLowerCase();
      let count = 0;
      cards.forEach(card => {
        card.hidden = !((category === 'All' || card.dataset.category === category) && card.dataset.search.includes(query));
        if (!card.hidden) { count++; card.classList.add('is-visible'); }
      });
      filters.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === category)));
      status.hidden = false; status.textContent = `${count} ${count === 1 ? 'article' : 'articles'} found${category !== 'All' ? ` in ${category}` : ''}.`;
      $('.empty-state').hidden = count > 0;
    };
    search.addEventListener('input', filter);
    filters.forEach(button => button.addEventListener('click', () => { category = button.dataset.filter; filter(); }));
    $('#reset-search').addEventListener('click', () => { search.value = ''; category = 'All'; filter(); search.focus(); });
  }

  // Contact form uses the published QWay sales address, with no invented endpoint.
  const form = $('#demo-form');
  if (form) {
    let enquiry = '';
    form.addEventListener('submit', event => {
      event.preventDefault();
      const data = new FormData(form);
      const value = key => String(data.get(key) || '').trim();
      const subject = `AelfaCred enquiry: ${value('interest')}`;
      enquiry = `Hello QWay Healthcare team,\n\nI would like to discuss AelfaCred.\n\nName: ${value('firstName')} ${value('lastName')}\nWork email: ${value('email')}\nOrganization: ${value('company')}\nJob title: ${value('jobTitle')}\nNumber of providers: ${value('providers')}\nInterest: ${value('interest')}\n\nRequirements:\n${value('message')}\n`;
      const address = form.getAttribute('action');
      const emailLink = $('.draft-email', form);
      emailLink.href = `${address}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(enquiry)}`;
      $('.prepared-message', form).value = enquiry;
      $('.draft-fallback', form).hidden = false;
      $('.form-status', form).textContent = 'Your enquiry is prepared. Complete sending in your email app, or copy the draft below. It has not been submitted to a server.';
      emailLink.click();
    });
    $('.copy-enquiry', form).addEventListener('click', async () => {
      const status = $('.form-status', form);
      try {
        await navigator.clipboard.writeText(enquiry);
        status.textContent = 'Enquiry copied. Paste it into an email to the address above and send it from your email app.';
      } catch {
        const field = $('.prepared-message', form); field.focus(); field.select();
        status.textContent = 'The enquiry text is selected. Copy it and paste it into your email app.';
      }
    });
  }

  // Contained card illumination: bounded pointer work and no touch parallax.
  $$('.spotlight').forEach(card => {
    let frame = 0, x = 0, y = 0;
    card.addEventListener('pointermove', event => {
      if (!finePointer.matches || reduced.matches) return;
      x = event.clientX; y = event.clientY;
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--px', `${x - rect.left}px`); card.style.setProperty('--py', `${y - rect.top}px`);
      });
    });
    card.addEventListener('pointerleave', () => { cancelAnimationFrame(frame); frame = 0; card.style.removeProperty('--px'); card.style.removeProperty('--py'); });
  });

  // One-shot entrance reveals; ongoing decorative motion pauses out of view.
  const reveals = $$('.reveal');
  reveals.forEach(element => {
    const index = [...element.parentElement.children].indexOf(element);
    element.style.setProperty('--delay', `${Math.min(index % 4, 3) * 65}ms`);
  });
  let revealObserver, sectionObserver;
  function configureMotion() {
    revealObserver?.disconnect(); sectionObserver?.disconnect();
    const enabled = !reduced.matches && 'IntersectionObserver' in window;
    document.documentElement.classList.toggle('motion-ready', enabled);
    if (!enabled) {
      reveals.forEach(element => element.classList.add('is-visible'));
      $$('.section,.site-footer').forEach(element => element.classList.add('in-view'));
      return;
    }
    revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible'); revealObserver.unobserve(entry.target);
    }), { rootMargin: '0px 0px -30px 0px', threshold: 0 });
    reveals.filter(element => !element.classList.contains('is-visible')).forEach(element => revealObserver.observe(element));
    sectionObserver = new IntersectionObserver(entries => entries.forEach(entry => entry.target.classList.toggle('in-view', entry.isIntersecting)));
    $$('.section,.site-footer').forEach(element => sectionObserver.observe(element));
  }
  configureMotion(); reduced.addEventListener('change', configureMotion);

  // Article reading progress is based on the actual article body, not the footer.
  const article = $('.article-body');
  const toc = $$('.article-toc nav a');
  const articleParts = $$('.article-part');
  const progress = $('.reading-progress span');
  let scrollFrame = 0;
  function updateScroll() {
    scrollFrame = 0;
    document.body.classList.toggle('has-scrolled', scrollY > 60);
    if (!article) return;
    const rect = article.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (innerHeight - rect.top) / (rect.height + innerHeight)));
    progress.style.transform = `scaleX(${ratio})`;
    let selected = -1;
    articleParts.forEach((part, i) => { if (part.getBoundingClientRect().top <= 180) selected = i; });
    toc.forEach((a, i) => { if (selected === i) a.setAttribute('aria-current', 'location'); else a.removeAttribute('aria-current'); });
  }
  window.addEventListener('scroll', () => { if (!scrollFrame) scrollFrame = requestAnimationFrame(updateScroll); }, { passive: true });
  window.addEventListener('resize', () => { if (!scrollFrame) scrollFrame = requestAnimationFrame(updateScroll); });
  updateScroll();
  const print = $('.print-article');
  if (print) { print.hidden = false; print.addEventListener('click', () => window.print()); }
  // Advanced motion is loaded only for the three explicitly redesigned hero sections.
  if ($('[data-live-scene]')) import('/live-effects.js');
})();
