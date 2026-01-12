# event-decor-site

Static website for an event decoration/styling business.  
Live site: https://devozair.github.io/event-decor-site/

---

## Project structure
event-decor-site/
├─ index.html
├─ css/
│ └─ styles.css
├─ js/
│ └─ main.js
└─ assets/
├─ images/
└─ icons/

> If your folders/files differ, update this tree to match your repo.

---

## Run locally

### Option A: Open directly (quickest)
1. Open `index.html` in your browser.

### Option B: VS Code Live Server (recommended)
1. Install the **Live Server** extension in VS Code.
2. Right-click `index.html` → **Open with Live Server**.

---

## Deploy (GitHub Pages)

This site is deployed with **GitHub Pages** from the `main` branch.

To redeploy:
1. Commit your changes
2. Push to `main`
3. GitHub Pages updates automatically

Docs: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

---

## Notes / gotchas (GitHub Pages)

- Use **relative paths** for assets (recommended):
  - ✅ `./css/styles.css`
  - ✅ `./assets/images/logo.png`
  - ❌ `/css/styles.css` (can break on project Pages)
- Ensure the entry file is named exactly `index.html` (case-sensitive).

Troubleshooting 404s: https://docs.github.com/en/pages/getting-started-with-github-pages/troubleshooting-404-errors-for-github-pages-sites

---

## License

MIT.
