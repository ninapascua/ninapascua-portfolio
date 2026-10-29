# Portfolio cleanup — October 30, 2026

## Completed

- Removed the unused Code Archive component, GitHub fetching/caching hook, repository-order data, sorting utilities, and obsolete tests.
- Consolidated and formatted CSS into base styles and responsive breakpoint groups. Removed archive-specific and obsolete placeholder styles.
- Compared the retained selector values against the previous stylesheet at 320, 375, 650, 651, 768, 800, 850, 900, 1000, 1024, 1280, and 1440 pixels. These are stylesheet comparisons, not browser screenshots.
- Removed obsolete portrait/CV/project placeholders. Required content and files are now checked by automated tests; an actual image-loading failure displays a neutral error message.
- Moved the CV document UI into its own component. The hero downloads the original PDF through a normal link; the About and Contact buttons open the viewer.
- Corrected dialog focus setup by capturing the prior focus before the native dialog opens. Background page scrolling is disabled while a dialog is open.
- Added intrinsic dimensions to all 11 project images to reduce layout shifts.
- Kept all project media, original portrait, original CV, 11 credentials, verification links, and requested icon sizes/spacing.
- Rewrote the README to match the current architecture and asset workflow. No backend or automatic GitHub API calls remain.

## Validation

The automated suite checks required profile assets and the PDF header, six complete project entries, all project media paths/alt text/dimensions, 11 credential dates/verification links/PNG icons, the full page, every case study, CV viewer markup, unique IDs, internal anchor targets, and the absence of obsolete sections/placeholders.

The production build succeeds. Nineteen external project/profile/credential URLs returned HTTP 200. LinkedIn returned HTTP 999 and could not be validated automatically; its user-supplied URL was retained.

## Limits and intentional omissions

- Visual desktop/mobile browser QA is not completed: Computer Use halted because it could not confidently verify Chrome's URL. No further browser automation was attempted for this cleanup.
- Bake & Co. has no supplied public repository or live deployment. Its case study and authentic design board remain available, without a fabricated link.
- eLingkod media consists of the supplied presentation slides; Bake & Co. uses the supplied interface design board. Both are labeled accordingly.
- The Coursera and freeCodeCamp icons are official provider logos; the other eight icons are original Credly badge artwork.
- Hosted project functionality behind authentication, including private Sipori records, was not accessed or tested.
