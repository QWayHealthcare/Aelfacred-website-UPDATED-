// Fit the first animated route to the actual text bounds at every font/viewport size.
(() => {
  document.querySelectorAll('.route-map').forEach(map => {
    const svg = map.querySelector('.route-paths');
    const collect = map.querySelector('.stop-collect strong');
    const verify = map.querySelector('.stop-verify strong');
    if (!svg || !collect || !verify) return;
    let frame = 0;
    function draw() {
      frame = 0;
      const matrix = svg.getScreenCTM();
      if (!matrix) return;
      const inverse = matrix.inverse();
      const collectBox = collect.getBoundingClientRect();
      const verifyBox = verify.getBoundingClientRect();
      const end = new DOMPoint(collectBox.right + 6, collectBox.bottom).matrixTransform(inverse).x;
      const avoid = new DOMPoint(verifyBox.left - 6, verifyBox.top).matrixTransform(inverse).x;
      const bend = (end + avoid) / 2;
      // Stay below Collect until its last letter, then rise to the left of Verify.
      const d = `M35 225H${end.toFixed(2)}C${bend.toFixed(2)} 225 ${bend.toFixed(2)} 110 ${avoid.toFixed(2)} 110H265Q315 110 315 65T375 25H470`;
      svg.querySelectorAll('.route-base,.route-draw,.route-streak').forEach(path => path.setAttribute('d', d));
    }
    const schedule = () => { if (!frame) frame = requestAnimationFrame(draw); };
    if ('ResizeObserver' in window) {
      const observer = new ResizeObserver(schedule);
      [map, collect, verify].forEach(element => observer.observe(element));
    } else addEventListener('resize', schedule);
    document.fonts?.ready.then(schedule);
    schedule();
  });
})();
