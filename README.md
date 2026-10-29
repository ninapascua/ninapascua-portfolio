# Niña Pascua - Creative Archive

A React + Vite portfolio with six project showcases, a personal portrait, CV viewing and downloading, skills, education, leadership, awards, eleven credential links, and contact details.

## Run locally

Use Node.js 22.12+ or a newer supported LTS release. In PowerShell:

```powershell
cd C:\Users\PC\Desktop\portfolio\nina-archive
npm.cmd ci
npm.cmd run dev
```

Open the URL printed by Vite (normally http://127.0.0.1:5173). Press Ctrl+C to stop. `npm.cmd` avoids PowerShell script execution policy restrictions. After changing package.json dependencies, use `npm.cmd install` to update the lockfile.

```powershell
npm.cmd test
npm.cmd run build
npm.cmd run preview
```

Deploy the generated `dist/` directory to static hosting. Use `npm run build` as the build command. The relative Vite base supports subdirectory hosting. Do not edit files in `dist/`: the next build replaces them.

## Architecture

- `src/main.jsx`: React entry point and global stylesheet.
- `src/App.jsx`: page composition, navigation, and active dialog state.
- `src/components/PageSections.jsx`: Home, About, education/involvement, and Contact.
- `src/components/Projects.jsx`: category filters, project selection, and case-study content.
- `src/components/Common.jsx`: tabs, technology labels, project actions, media galleries, and accessible native dialogs.
- `src/components/CvDocument.jsx`: PDF viewer and download/open links.
- `src/components/Certifications.jsx`: credential category filters, icons, and provider verification links.
- `src/data.js`: profile, projects/media, skills, certifications, evidence, and leadership content.
- `src/utils.js`: deployment-relative asset URLs.
- `src/styles.css`: base component styles followed by consolidated responsive breakpoints and reduced-motion rules.
- `public/assets/`: original CV, portrait, project media, badge artwork, and provider logos.
- `tests/`: content/asset integrity and complete-page rendering checks.

The Code Archive section and its GitHub fetching/caching logic were removed at the owner's request. GitHub links remain attached to the relevant projects and profile. The site needs no backend, environment variables, API keys, or login. Google Fonts is the only runtime resource fetched automatically from another site; verification links and project deployments open only when visitors select them.

## Updating content and assets

Edit `src/data.js`. Profile paths are relative to `public/`, for example `assets/portrait/photo.jpg`. Keep original uploads in `public/assets/`, never in `dist/`.

Each `projectMedia` entry has a local image path, meaningful alt text, width, height, and an optional caption. Keep width/height equal to the source image's dimensions; CSS scales images proportionally. All six projects currently have media. eLingkod's presentation slides and Bake & Co.'s design board are labeled as those media types.

Certification evidence stores a verification URL and an icon path. Eight entries use original Credly badge artwork. Coursera and the two freeCodeCamp entries use official provider logos. The AWS and CompTIA icons have a small CSS scale adjustment to compensate for padding in their original artwork. All icons use the same 24px frame.

Tests reject missing/empty assets, incomplete project data, missing credential dates or verification links, invalid badge images, broken internal anchors, and obsolete placeholder text. Bake & Co. has no supplied public repository, so no repository link is fabricated. Certificate PDFs, additional demo videos, and more screenshots may be added later but are not required for the current site.
