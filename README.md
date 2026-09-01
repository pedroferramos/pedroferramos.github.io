# pedroramos.github.io

Personal portfolio site built with plain HTML, CSS, and JavaScript, hosted on GitHub Pages.

## Structure

- `index.html`, `about.html`, `projects.html`, `cv.html` — main pages
- `projects/` — one detail page per project
- `partials/` — shared nav and footer, injected via `js/include.js`
- `css/` — `style.css` holds shared variables/base styles; each page has its own stylesheet for page-specific layout
- `js/` — `include.js` handles partial injection; `main.js` is reserved for any future interactivity
- `assets/images/` — photos, organized by page/project
- `assets/cv/` — downloadable CV PDF

## Running locally

Because the nav/footer are loaded via `fetch()`, opening `index.html` directly (`file://`) won't work due to browser CORS restrictions. Run a local server from the project root instead:

python -m http.server


Then visit `http://localhost:8000` in your browser.

## Images needed


**Recommended, once available** (currently placeholder icons only, no file needed yet):
- Olympus MARS: 2–3 photos → `assets/images/projects/olympus-mars/`
- Thesis: 1–2 photos (mind the embargo — no confidential setup/data shots) → `assets/images/projects/thesis/`
- Each of the other 8 project pages: 2–3 photos each → `assets/images/projects/<project-name>/`

### Format & sizing

- **Format**: JPG for photos (smaller file size, fine for photographic content); PNG only if transparency is needed. Avoid HEIC — not all browsers render it.
- **Headshot**: roughly square or portrait, at least 400×400px so it stays sharp in the 120×120px hero slot; JPG, ideally under 300KB.
- **Project photos**: landscape/4:3 (matches the `aspect-ratio: 4/3` grid in the CSS), roughly 800–1200px wide is enough for web, keep each under ~500KB for fast loading.

## Adding a new project

1. Copy an existing file in `projects/` and rename it.
2. Update the title, icon, description, and media placeholders.
3. Add a card linking to it from `projects.html`.
4. Drop any images into a new folder under `assets/images/projects/`.

## Deployment

Hosted via GitHub Pages. Push to the repository's default branch (or configure Pages to build from the branch/folder of your choice) and the site updates automatically.

## To do

- Add real photos (headshot, project photos) to `assets/images/`
- Add Blog page (deferred for now)