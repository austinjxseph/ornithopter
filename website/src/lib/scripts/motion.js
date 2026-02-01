// Lenis Smooth Scroll

import Lenis from "lenis";

let lenis;

function initLenis() {
  if (lenis) return; // Already initialized

  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    touchMultiplier: 2,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}

if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initLenis);
  } else {
    initLenis();
  }
}

export function destroySmoothScroll() {
  if (lenis) {
    lenis.destroy();
    lenis = null;
  }
}
