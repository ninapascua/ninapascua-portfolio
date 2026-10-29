# Nina Pascua - Creative Archive

A React + Vite portfolio preserving the scrapbook design, all content, project screenshots, and dynamic GitHub archive.

## Run locally

Use Node.js 22.12+ or a newer supported LTS release. In PowerShell:

```powershell
cd C:\Users\PC\Desktop\portfolio\nina-archive
npm.cmd install
npm.cmd run dev
```

Open the local URL printed by Vite (normally http://127.0.0.1:5173). Source changes appear automatically. Press Ctrl+C to stop. Using npm.cmd avoids PowerShell script execution policy restrictions.

```powershell
npm.cmd test
npm.cmd run build
npm.cmd run preview
```

The production build is generated in dist/. Deploy that directory to static hosting, using npm run build as the build command. The relative Vite base supports subdirectory hosting. Do not edit generated dist files.

## Source structure

- src/App.jsx - page composition, CV actions, navigation, and dialog state.
- src/components/ - page sections, project browser and case study, galleries, modal, certificates, and GitHub archive.
- src/hooks/useRepositories.js - public GitHub data, caching, loading, cancellation, and errors.
- src/data.js - editable profile, projects and media, skills, certificates, and leadership.
- src/styles.css - existing scrapbook design and responsive layouts.
- public/assets/ - authentic screenshots and future personal assets.
- tests/ - repository filtering, sorting, and safe link checks.

## Updating content

Edit src/data.js. The original CV is connected at public/assets/Nina-Pascua-CV.pdf, with viewing and download actions. The LinkedIn URL is set in profile.linkedin. Set profile.photo to assets/portrait.jpg after adding the authentic photograph to public/assets/; its placeholder remains until configured. Add or replace assets in public/assets/, since Vite regenerates dist/ on every build.

Project media arrays are in src/data.js. Each image uses {src: 'assets/file.png', alt: 'Actual interface description'}. Sipori and Truth in Tales use authentic repository screenshots. Other projects show labeled artwork. Original certificate files and verification URLs can be added when supplied.

GitHub repositories are fetched client-side without tokens and cached for 30 minutes. Owned repositories and curated collaborative projects share the same searchable archive. Repositories containing fcc and the exact name Rice-Leaf-Disease-Detection are hidden. Featured projects and collaborative links remain available when the API is offline. React renders external text, and API-provided website URLs are restricted to HTTP/HTTPS.
