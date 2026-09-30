# Root & Rise Design Studio

Production website for Root & Rise Design Studio, built with Next.js, TypeScript, React, Framer Motion, React Three Fiber and Three.js.

## Run locally

```bash
npm install
npm run dev
```

Production checks:

```bash
npm run lint
npm run typecheck
npm run build
npm run start
```

## Interactive house

The homepage cutaway house is procedural and uses no external 3D asset. Drag or swipe to rotate, scroll or pinch to zoom, select a room to focus, and use **Reset house** to return to the overview. Keyboard controls use arrow keys, `+`/`-`, `R`, and `Escape`. Reduced-motion preferences disable idle rotation, and a static architectural illustration is shown if WebGL is unavailable.

## Team portraits

Team images live in `public/team/` and use these filenames:

- `naga-sri-vandanapu.png`
- `suhas.jpeg`
- `pranav.png`
- `dinesh.jpeg`
- `santhiya.jpeg`
- `sai-srija.png`

Each team card opens a responsive profile modal. If an image cannot load, the site displays the member's initials instead.

Project films use `public/projects/<project-slug>/film.webm` (preferred) and/or `film.mp4`. After adding a film, add its slug to `projectFilmSlugs` in `src/content/media.ts`; unavailable films are not requested or repeated.
