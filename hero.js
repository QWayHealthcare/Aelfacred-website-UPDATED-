/* Home hero: continuously looping background video. */
(() => {
  const journey = document.querySelector('#journey');
  const video = document.querySelector('#journeyVideo');
  if (!journey || !video) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
  video.muted = true; video.loop = true;
  if (reduced.matches) video.pause();
  else { const playing = video.play(); if (playing) playing.catch(() => {}); }
  // Rotate the three hero contents every 5.5s; pause while the pointer or focus is on the content.
  const scenes = [...journey.querySelectorAll('.scene')];
  let current = 0, timer = 0;
  const show = index => { current = index; scenes.forEach((scene, i) => { scene.classList.toggle('is-active', i === index); scene.inert = i !== index; }); };
  const stop = () => { clearInterval(timer); timer = 0; };
  const start = () => { stop(); if (scenes.length > 1 && !reduced.matches) timer = setInterval(() => show((current + 1) % scenes.length), 5500); };
  scenes.forEach(scene => {
    scene.addEventListener('mouseenter', stop);
    scene.addEventListener('mouseleave', start);
    scene.addEventListener('focusin', stop);
    scene.addEventListener('focusout', start);
  });
  document.addEventListener('visibilitychange', () => document.hidden ? stop() : start());
  start();
  video.addEventListener('error', () => document.documentElement.classList.add('hero-static'));
  journey.querySelectorAll('.button').forEach(button => {
    button.addEventListener('pointermove', event => {
      if (!finePointer.matches || reduced.matches) return;
      const rect = button.getBoundingClientRect();
      button.style.transform = `translate(${(event.clientX - rect.left - rect.width / 2) * .12}px,${(event.clientY - rect.top - rect.height / 2) * .12}px)`;
    });
    button.addEventListener('pointerleave', () => { button.style.transform = ''; });
  });
})();
