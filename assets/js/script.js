document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  // --- Lenis smooth scroll ---
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

    // Refresh Lenis dimensions after Svelte components hydrate
    // (components add height to the page that Lenis needs to measure)
    window.addEventListener(
      "svelte-ready",
      function () {
        requestAnimationFrame(function () {
          lenis.resize();
          if (typeof ScrollTrigger !== "undefined") ScrollTrigger.refresh();
        });
      },
      { once: true },
    );

    // Also refresh after all images have loaded (belt and suspenders)
    window.addEventListener("load", function () {
      lenis.resize();
      if (typeof ScrollTrigger !== "undefined") ScrollTrigger.refresh();
    });
  })();

  // --- Barba.js page transitions ---
  (function initBarba() {
    if (typeof barba === "undefined" || typeof gsap === "undefined") return;

    // Listen for Reel canvas clicks — route through Barba instead of window.location
    document.addEventListener("reel-navigate", function (e) {
      barba.go(e.detail.url);
    });

    // --- Initial load: preloader or immediate reveal ---
    var mainEl = document.querySelector("[data-barba='container']");
    if (mainEl) {
      gsap.set(mainEl, { opacity: 0 });
    }

    var hasPreloader = !!document.querySelector("c-preloader");
    if (hasPreloader) {
      window.addEventListener(
        "preloader-done",
        function () {
          if (mainEl) {
            gsap.to(mainEl, {
              opacity: 1,
              duration: 0.4,
              delay: 0.1,
              ease: "power2.out",
            });
          }
        },
        { once: true },
      );
    } else if (mainEl) {
      gsap.set(mainEl, { opacity: 1 });
    }

    barba.init({
      prevent: function (data) {
        return data.el && data.el.hasAttribute("data-barba-prevent");
      },

      transitions: [
        {
          name: "default",

          leave: function (data) {
            if (window.lenis) window.lenis.stop();
            window.dispatchEvent(new CustomEvent("barba-close-nav"));

            return new Promise(function (resolve) {
              gsap.to(data.current.container, {
                opacity: 0,
                duration: 0.2,
                ease: "power2.in",
                onComplete: function () {
                  data.current.container.style.display = "none";
                  resolve();
                },
              });
            });
          },

          enter: function (data) {
            var el = data.next.container;
            window.scrollTo(0, 0);
            if (window.lenis) window.lenis.scrollTo(0, { immediate: true });

            el.style.opacity = "0";

            return new Promise(function (resolve) {
              requestAnimationFrame(function () {
                gsap.to(el, {
                  opacity: 1,
                  duration: 0.2,
                  ease: "power2.out",
                  onComplete: resolve,
                });
              });
            });
          },

          after: function () {
            if (window.lenis) {
              window.lenis.start();
              window.lenis.resize();
            }
            if (typeof ScrollTrigger !== "undefined") ScrollTrigger.refresh();
          },
        },
      ],
    });
  })();
});
