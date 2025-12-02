# Inference Street LLC Landing Page

Static, single-page marketing site for **Inference Street LLC** covering algorithmic trading, the Beats67 AI music prototype, and data/AI consulting services. Designed for GitHub Pages with a custom domain.

## Structure

```
/
├── index.html
├── CNAME
└── assets/
    ├── styles.css
    ├── main.js
    ├── logo.svg
    └── og-image.svg
```

## Running locally

No build step is required. Simply open `index.html` in a browser or serve the folder with a simple HTTP server:

```bash
python -m http.server 8000
```

Then visit <http://localhost:8000>.

## Deployment (GitHub Pages)

1. Push this repository to GitHub.
2. In repository settings, enable GitHub Pages and select the `main` branch as the source.
3. Ensure the `CNAME` file contains `inferencestreet.com` (already included). Update DNS records for the domain to point to GitHub Pages.

## Editing content

- Update contact email by changing the `mailto:` link in the Contact section of `index.html`.
- Adjust section copy directly in `index.html`; styles are centralized in `assets/styles.css`.
- Replace `assets/logo.svg` or `assets/og-image.svg` with updated SVGs if desired (avoid binary formats).

## Notes

- Performance language is intentionally conservative and references internal, unaudited research. Review and update ranges after internal validation. <!-- TODO: Confirm final performance language with the founder. -->
- Legal/disclaimer text should be reviewed by counsel if the company pursues external capital. <!-- TODO: Confirm disclaimer with legal. -->
- Analytics placeholder is included in `index.html`; insert your analytics script when ready.
