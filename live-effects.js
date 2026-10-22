// Loaded only on the three selected heroes. Real-time decorative motion, not live data.
// No dependencies. One bounded 30fps canvas, DPR <= 1.5, no offscreen rendering.
(() => {
  const scenes = [...document.querySelectorAll('[data-live-scene]')];
  if (!scenes.length) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
  let frame = 0, lastFrame = 0;

  function createAurora(canvas) {
    const context = canvas.getContext('2d', { alpha: true });
    if (!context) return null;
    let width = 1, height = 1, dpr = 1;
    const particles = Array.from({ length: 34 }, (_, i) => ({
      x: ((i * .6180339) % 1), y: ((i * .381966) % 1), phase: i * 1.37,
      radius: .7 + (i % 3) * .38
    }));
    return {
      resize() {
        const box = canvas.getBoundingClientRect();
        width = Math.max(1, box.width); height = Math.max(1, box.height);
        dpr = Math.min(window.devicePixelRatio || 1, 1.5);
        canvas.width = Math.round(width * dpr); canvas.height = Math.round(height * dpr);
      },
      draw(time, pointerX = 0, pointerY = 0) {
        context.setTransform(dpr, 0, 0, dpr, 0, 0);
        context.clearRect(0, 0, width, height);
        context.globalCompositeOperation = 'source-over';
        const wave = (u, ribbon, strand) => {
          const phase = time * .72 + ribbon * 1.5;
          const envelope = .45 + .55 * Math.pow(Math.sin((u + 1) * Math.PI / 2), 2);
          return {
            x: width * (.5 + u * .63) + pointerX * 8,
            y: height * (.40 + ribbon * .075 + Math.sin(u * 3.6 + phase) * .225 + Math.cos(u * 7 - phase * .7) * .035 + strand * envelope * .009) + pointerY * 7
          };
        };
        for (let ribbon = 0; ribbon < 4; ribbon++) {
          const gradient = context.createLinearGradient(0, 0, width, height);
          gradient.addColorStop(0, 'rgba(64,136,246,0)');
          gradient.addColorStop(.2, `rgba(62,139,255,${.11 + ribbon * .025})`);
          gradient.addColorStop(.65, `rgba(130,196,255,${.2 + ribbon * .035})`);
          gradient.addColorStop(1, 'rgba(74,137,255,0)');
          context.beginPath();
          for (let i = 0; i <= 72; i++) { const p = wave(i / 36 - 1, ribbon, -5); i ? context.lineTo(p.x, p.y) : context.moveTo(p.x, p.y); }
          for (let i = 72; i >= 0; i--) { const p = wave(i / 36 - 1, ribbon, 5); context.lineTo(p.x, p.y); }
          context.closePath(); context.fillStyle = gradient; context.fill();
          for (let strand = -5; strand <= 5; strand++) {
            context.beginPath();
            for (let i = 0; i <= 72; i++) { const p = wave(i / 36 - 1, ribbon, strand); i ? context.lineTo(p.x, p.y) : context.moveTo(p.x, p.y); }
            context.lineWidth = strand === -5 ? 1.1 : .55;
            context.strokeStyle = `rgba(${95 + ribbon * 16},${158 + ribbon * 12},255,${strand === -5 ? .6 : .16})`;
            context.stroke();
          }
        }
        for (const particle of particles) {
          const x = width * particle.x + Math.sin(time * .35 + particle.phase) * 14;
          const y = height * particle.y + Math.cos(time * .27 + particle.phase) * 13;
          const alpha = .16 + (.5 + .5 * Math.sin(time * .9 + particle.phase)) * .5;
          context.beginPath(); context.arc(x, y, particle.radius, 0, Math.PI * 2);
          context.fillStyle = `rgba(157,203,255,${alpha})`; context.fill();
        }
      }
    };
  }

  // An open, depth-sorted ribbon sculpture specifically for the QWay wordmark.
  function createSculpture(canvas) {
    const context = canvas.getContext('2d', { alpha: true });
    if (!context) return null;
    let width = 1, height = 1, dpr = 1;
    const project = (theta, side, band, time, pointerX, pointerY) => {
      const radius = 1.06 + .1 * Math.sin(theta * 3 + time * .3 + band);
      const twist = theta * 2 + time * .22 + band * 1.3;
      let x = (radius + side * Math.cos(twist)) * Math.cos(theta);
      let y = (radius + side * Math.cos(twist)) * Math.sin(theta) * .82;
      let z = .25 * Math.sin(theta * 2 + band) + side * Math.sin(twist) * 1.6;
      const pitch = .65 + band * .38 + pointerY * .07;
      const yaw = Math.sin(time * .13 + band * 2) * .32 + pointerX * .09;
      const roll = -.4 + band * .95 + Math.sin(time * .09) * .08;
      const py = y * Math.cos(pitch) - z * Math.sin(pitch);
      const pz = y * Math.sin(pitch) + z * Math.cos(pitch);
      const px = x * Math.cos(yaw) + pz * Math.sin(yaw);
      z = -x * Math.sin(yaw) + pz * Math.cos(yaw);
      x = px * Math.cos(roll) - py * Math.sin(roll);
      y = px * Math.sin(roll) + py * Math.cos(roll);
      const scale = Math.min(width * .38, height * .39) * 3.8 / (3.8 - z);
      return { x: width * .5 + x * scale, y: height * .47 + y * scale, z };
    };
    return {
      resize() {
        const box = canvas.getBoundingClientRect(); width = Math.max(1, box.width); height = Math.max(1, box.height);
        dpr = Math.min(devicePixelRatio || 1, 1.5);
        canvas.width = Math.round(width * dpr); canvas.height = Math.round(height * dpr);
      },
      draw(time, pointerX = 0, pointerY = 0) {
        context.setTransform(dpr, 0, 0, dpr, 0, 0); context.clearRect(0, 0, width, height);
        const glow = context.createRadialGradient(width*.5,height*.52,0,width*.5,height*.52,width*.46);
        glow.addColorStop(0,'rgba(43,108,212,.19)'); glow.addColorStop(1,'rgba(43,108,212,0)');
        context.fillStyle=glow;context.fillRect(0,0,width,height);
        const faces = [], segments = 112;
        for (let band = 0; band < 2; band++) {
          const spin = time * (band ? -.14 : .18) + band * .9;
          for (let i = 0; i < segments; i++) {
            const a = i / segments * Math.PI * 2 + spin, b = (i+1) / segments * Math.PI * 2 + spin;
            const points = [project(a,-.12,band,time,pointerX,pointerY),project(b,-.12,band,time,pointerX,pointerY),project(b,.12,band,time,pointerX,pointerY),project(a,.12,band,time,pointerX,pointerY)];
            faces.push({ points, band, light: .5 + .5 * Math.cos(a - time*.25), depth: points.reduce((sum,p)=>sum+p.z,0)/4 });
          }
        }
        faces.sort((a,b)=>a.depth-b.depth);
        for (const face of faces) {
          const light = face.light, points = face.points;
          context.beginPath();points.forEach((p,i)=>i?context.lineTo(p.x,p.y):context.moveTo(p.x,p.y));context.closePath();
          context.fillStyle = face.band ? `rgba(${105+Math.round(light*90)},${161+Math.round(light*65)},255,${.25+light*.34})` : `rgba(${31+Math.round(light*60)},${98+Math.round(light*72)},${190+Math.round(light*65)},${.4+light*.4})`;
          context.fill();context.strokeStyle=`rgba(174,217,255,${.05+light*.12})`;context.lineWidth=.6;context.stroke();
          context.beginPath();context.moveTo(points[0].x,points[0].y);context.lineTo(points[1].x,points[1].y);
          context.strokeStyle=`rgba(200,231,255,${.2+light*.5})`;context.lineWidth=1;context.stroke();
        }
        // Small glints follow the actual 3D ribbon paths, not arbitrary screen circles.
        for(let i=0;i<16;i++){
          const band=i%2,theta=time*(band?-.35:.42)+i*.79;
          const p=project(theta,.12,band,time,pointerX,pointerY);
          const alpha=.3+.5*(.5+.5*Math.sin(time*1.2+i));
          context.beginPath();context.arc(p.x,p.y,i%4===0?2.1:1.2,0,Math.PI*2);
          context.fillStyle=`rgba(202,232,255,${alpha})`;context.fill();
        }
        for(let i=0;i<24;i++){
          const x=width*((i*.618)%1)+Math.sin(time*.23+i)*9;
          const y=height*((i*.383)%1)+Math.cos(time*.19+i)*11;
          context.beginPath();context.arc(x,y,.65+(i%3)*.25,0,Math.PI*2);
          context.fillStyle=`rgba(130,183,250,${.15+(.5+.5*Math.sin(time*.7+i))*.3})`;context.fill();
        }
      }
    };
  }

  const states = scenes.map(element => {
    const canvas = element.querySelector('canvas');
    const button = element.querySelector('.motion-control');
    const renderer = canvas ? (element.dataset.liveScene === 'qway-sculpture' ? createSculpture(canvas) : createAurora(canvas)) : null;
    const state = { element, button, renderer, visible: false, paused: false, running: false, time: .85, x: 0, y: 0, pointerFrame: 0 };
    if (renderer && element.dataset.liveScene === 'qway-sculpture') element.classList.add('has-sculpture-canvas');
    element.classList.add('live-initialized');
    button.hidden = false;
    button.addEventListener('click', () => { state.paused = !state.paused; refresh(); });
    const resetPointer = () => {
      cancelAnimationFrame(state.pointerFrame); state.pointerFrame = 0;
      state.x = 0; state.y = 0;
      element.style.removeProperty('--motion-x'); element.style.removeProperty('--motion-y');
    };
    element.addEventListener('pointermove', event => {
      if (!state.running || !finePointer.matches || reduced.matches) return;
      const rect = element.getBoundingClientRect();
      state.x = Math.max(-1, Math.min(1, (event.clientX - rect.left) / rect.width * 2 - 1));
      state.y = Math.max(-1, Math.min(1, (event.clientY - rect.top) / rect.height * 2 - 1));
      if (state.pointerFrame) return;
      state.pointerFrame = requestAnimationFrame(() => {
        state.pointerFrame = 0;
        element.style.setProperty('--motion-x', state.x.toFixed(3));
        element.style.setProperty('--motion-y', state.y.toFixed(3));
      });
    });
    element.addEventListener('pointerleave', resetPointer);
    state.resetPointer = resetPointer;
    if (state.renderer) {
      const resize = () => { state.renderer.resize(); state.renderer.draw(state.time, state.x, state.y); };
      if ('ResizeObserver' in window) new ResizeObserver(resize).observe(canvas);
      else window.addEventListener('resize', resize);
      resize();
    }
    return state;
  });

  function tick(timestamp) {
    frame = 0;
    if (!states.some(state => state.running && state.renderer)) return;
    if (timestamp - lastFrame >= 1000 / 30) {
      const delta = Math.min(.08, (timestamp - lastFrame) / 1000);
      lastFrame = timestamp;
      for (const state of states) {
        if (!state.running || !state.renderer) continue;
        state.time += delta;
        state.renderer.draw(state.time, state.x, state.y);
      }
    }
    frame = requestAnimationFrame(tick);
  }
  function refresh() {
    for (const state of states) {
      const running = state.visible && !document.hidden && !reduced.matches && !state.paused;
      state.running = running;
      state.element.classList.toggle('is-running', running);
      state.element.dataset.motionState = reduced.matches ? 'reduced' : state.paused ? 'paused' : document.hidden ? 'hidden' : state.visible ? 'running' : 'offscreen';
      state.button.disabled = reduced.matches;
      state.button.setAttribute('aria-pressed', String(state.paused || reduced.matches));
      state.button.querySelector('.motion-control-label').textContent = reduced.matches ? 'Reduced motion' : state.paused ? 'Play animation' : 'Pause animation';
      state.button.querySelector('.motion-control-icon').textContent = state.paused || reduced.matches ? '▷' : 'Ⅱ';
      if (!running) state.resetPointer();
    }
    const needsFrame = states.some(state => state.running && state.renderer);
    if (needsFrame && !frame) { lastFrame = performance.now(); frame = requestAnimationFrame(tick); }
    if (!needsFrame && frame) { cancelAnimationFrame(frame); frame = 0; }
  }
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) states.find(state => state.element === entry.target).visible = entry.isIntersecting;
      refresh();
    }, { threshold: 0 });
    states.forEach(state => observer.observe(state.element));
  } else {
    const updateVisibility = () => {
      for (const state of states) { const rect = state.element.getBoundingClientRect(); state.visible = rect.top < innerHeight && rect.bottom > 0; }
      refresh();
    };
    window.addEventListener('scroll', updateVisibility, { passive: true });
    window.addEventListener('resize', updateVisibility); updateVisibility();
  }
  reduced.addEventListener('change', refresh);
  document.addEventListener('visibilitychange', refresh);
  window.addEventListener('pagehide', () => { cancelAnimationFrame(frame); frame = 0; });
  window.addEventListener('pageshow', refresh);
  refresh();
})();
