# Niña Pascua — Creative Archive

Responsive, buildless ES-module portfolio. Serve `dist` with any static server, for example `python -m http.server 4173 --directory dist`. Deploy `dist` to GitHub Pages, Netlify, or Vercel without a build command.

## Updating content

Edit `dist/data.js` for projects, skills, certificates, and leadership. Set `profile.photo` and `profile.cv` to local asset URLs after adding the original portrait and PDF under `dist/assets`. The original CV and portrait were not included; the site clearly identifies these missing assets. CV viewing and downloading become available when its path is configured.

Add `{src:'assets/file.png', alt:'Actual interface description'}` entries to a project's `media` array. Sipori and Truth in Tales screenshots are sourced from their public repositories. Their assignments are currently in `app.js`; replace or extend those arrays there. Other projects use expressly labeled artwork placeholders.

GitHub repository data is fetched client-side without tokens and cached for 30 minutes. Search, language filters, sorting, refresh, errors, and cached fallback are handled in `app.js`. Featured projects and collaborative links remain available offline.

No additional biographical claims, CV documents, certificate images, private credentials, or unprovided repository URLs were invented.
