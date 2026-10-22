// Pull to switch. Native button activation also supports taps, Enter and Space.
(() => {
  document.querySelectorAll('[data-pendant]').forEach(scene => {
    const cord = scene.querySelector('.pendant-cord');
    const hint = scene.querySelector('[data-pendant-hint]');
    const status = scene.querySelector('[data-pendant-status]');
    const controller = new AbortController();
    const options = { signal: controller.signal };
    let drag = null, lastDragEnd = -Infinity;
    const toggle = () => {
      const on = scene.dataset.light !== 'on';
      scene.dataset.light = on ? 'on' : 'off';
      cord.setAttribute('aria-pressed', String(on));
      cord.setAttribute('aria-label', `Turn ${on ? 'off' : 'on'} the QWay logo spotlight`);
      hint.textContent = on ? 'Pull again to turn off' : 'Pull the cord to illuminate';
      status.textContent = `Logo spotlight ${on ? 'on' : 'off'}.`;
    };
    const release = () => {
      if (!drag) return;
      const id = drag.id;
      drag = null;
      cord.classList.remove('is-pulling');
      cord.style.setProperty('--pull', '0px');
      if (cord.hasPointerCapture(id)) cord.releasePointerCapture(id);
    };
    const cancel = () => {
      if (drag) { lastDragEnd = performance.now(); release(); }
    };
    cord.addEventListener('pointerdown', event => {
      if (!event.isPrimary || event.button !== 0 || drag) return;
      drag = { id: event.pointerId, y: event.clientY, pull: 0, moved: 0 };
      cord.setPointerCapture(event.pointerId);
      cord.classList.add('is-pulling');
    }, options);
    cord.addEventListener('pointermove', event => {
      if (!drag || event.pointerId !== drag.id) return;
      const distance = event.clientY - drag.y;
      drag.moved = Math.max(drag.moved, Math.abs(distance));
      drag.pull = Math.min(42, Math.max(0, distance * .75));
      cord.style.setProperty('--pull', `${drag.pull}px`);
    }, options);
    cord.addEventListener('pointerup', event => {
      if (!drag || event.pointerId !== drag.id) return;
      const pulled = drag.pull >= 24;
      if (drag.moved > 6) lastDragEnd = performance.now();
      release();
      if (pulled) toggle();
    }, options);
    cord.addEventListener('pointercancel', cancel, options);
    cord.addEventListener('lostpointercapture', cancel, options);
    cord.addEventListener('click', event => {
      // Browsers synthesize a click after pointerup; a successful drag toggles once.
      if (event.detail > 0 && performance.now() - lastDragEnd < 500) return;
      toggle();
    }, options);
    window.addEventListener('pagehide', cancel, options);
    document.addEventListener('visibilitychange', () => { if (document.hidden) cancel(); }, options);
    const removalObserver = new MutationObserver(() => {
      if (!scene.isConnected) { cancel(); controller.abort(); removalObserver.disconnect(); }
    });
    removalObserver.observe(document.body, { childList: true, subtree: true });
    cord.hidden = false;
    scene.querySelector('.pendant-instructions').hidden = false;
  });
})();
