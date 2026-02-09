document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  (function initLenis() {
    if (typeof Lenis === "undefined") {
      console.warn("Lenis library not loaded. Smooth scrolling disabled.");
      return;
    }

    var lenis = new Lenis({
      smoothWheel: true,
      wheelMultiplier: 1,
      lerp: 0.12,
    });

    // Integrate with GSAP ticker if available
    if (typeof gsap !== "undefined" && gsap.ticker) {
      gsap.ticker.add(function (time) {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    } else {
      // Fallback to rAF loop
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }

    // Integrate with ScrollTrigger if available
    if (typeof ScrollTrigger !== "undefined") {
      lenis.on("scroll", ScrollTrigger.update);
    }

    // Expose globally
    window.lenis = lenis;

    // Signal ready for components that load later
    window.dispatchEvent(new CustomEvent("lenis-ready"));
  })();
});
