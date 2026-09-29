# Root & Rise media generation and placement guide

All image and video slots are data-driven. A missing asset automatically falls back to an architectural plan graphic; broken-image icons are never shown.

## Folder and naming convention

Create one folder per project inside `public/projects/`:

```text
public/projects/{project-slug}/
  hero.webp             2400 × 1350, primary project image
  gallery-01.webp       1800 × 2250, portrait/detail image
  gallery-02.webp       2400 × 1600, wide secondary image
  detail.webp           1600 × 1600, material/joinery close-up
  floor-plan.webp       2400 × 1600, clean plan or axonometric
  video-poster.webp     2400 × 1350, video fallback frame
  film.webm             1920 × 1080, preferred web video
  film.mp4              1920 × 1080, H.264 fallback video
```

Valid project slugs:

- `private-residence`
- `urban-residence`
- `hospitality-lifestyle`
- `signature-interior`
- `collaborative-hq`
- `innovation-campus`

Use lowercase filenames exactly as shown. WebP quality 80–86 is recommended. PNG and JPG are also detected automatically when the preferred WebP file is missing—for example, `hero.png` works without code changes. Keep hero images below 700 KB, gallery images below 500 KB, and each video ideally below 12 MB. Videos must be silent or have audio removed because they autoplay muted.

## Visual consistency

- Aspect ratio: generate hero/poster at 16:9; gallery-01 at 4:5; gallery-02 at 3:2.
- Camera: architectural lenses between 18–35 mm, eye-level unless an axonometric is requested.
- Grade: warm mineral neutrals, controlled olive and terracotta accents, natural contrast, no teal-orange grade.
- Avoid: visible brand logos, text in the render, fisheye distortion, impossible structures, excessive staging, cyberpunk lighting, generic luxury décor.
- Video: 10–15 seconds, stable dolly/gimbal motion, clean first and last frames, no cuts needed, no embedded titles.

The complete building briefs and generation prompts are stored in `src/content/media.ts` so each project’s visual inputs remain versioned alongside the website.
