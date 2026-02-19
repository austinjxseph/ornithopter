# Process Log

## Strip Component — Session 1 (2026-02-18)

### What was done
Created `c-strip`, a new Three.js web component combining the best of `c-reel` (drum carousel) and `c-helix` (diagonal strip orientation).

### Files changed
- `svelte/src/components/ui/Strip.svelte` — new component
- `svelte/src/main.ts` — registered `c-strip`
- `svelte/src/components/layout/LayoutIndex.svelte` — swapped `c-reel` → `c-strip`, updated event listeners from `reel:update/exit` → `strip:update/exit`
- `assets/js/script.js` — added `strip:exit` Barba navigation handler

### Architecture decisions

**From Reel:**
- Infinite card recycling via modulo wrap on world-space X position
- Inertia + snap-to-nearest-card scroll (wheel/touch on `[data-canvas-map]`)
- `strip:update` CustomEvent for GSAP title slot animation
- `strip:exit` CustomEvent → Barba navigation
- Hover state: non-hovered cards fade to `HOVER_OPACITY`
- Active card highlight (nearest to X=0)
- Raycaster for flat hit-testing (simpler than Reel's analytical cylinder intersection)
- Mobile fallback to `<c-indexcard>` flat list
- WebGL context loss, IntersectionObserver pause, ResizeObserver

**From Helix:**
- Diagonal tilt: `stripGroup.rotation.z = -18°`
- Mouse gyro: subtle `targetTiltX/Y` lerp on mouse move
- `PerspectiveCamera(40°, ...)` at Z=12

**Key difference from both:**
- No cylinder warp (Reel's vertex shader bend removed)
- No helix twist (Helix's `uTwist` uniform removed)
- Flat `PlaneGeometry(CARD_WIDTH, CARD_HEIGHT, 1, 1)` — no extra segments needed
- Infinite wrap: `worldX = ((baseSeatX + stripOffset + halfStrip) % STRIP_WIDTH + STRIP_WIDTH) % STRIP_WIDTH - halfStrip`
- Snap: `Math.round(stripOffset / CARD_SPACING) * CARD_SPACING`

### Config values
- `CARD_WIDTH=3.2, CARD_HEIGHT=4.2, CARD_GAP=0.28`
- `CAMERA_Z=12, CAMERA_FOV=40`
- `STRIP_TILT_Z=-18°, STRIP_TILT_X=4°`
- `FRICTION=0.91, WHEEL_SENSITIVITY=0.004`
