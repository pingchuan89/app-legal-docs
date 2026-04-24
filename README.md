# App Legal Docs Site (GitHub Pages)

This folder is a static website for NextYou legal documents.

## Deploy to GitHub Pages with `(root)`

1. Copy **all files inside this folder** into the root of your GitHub repo.
2. Push to GitHub.
3. In GitHub repo settings:
   - Go to `Settings` -> `Pages`
   - `Source`: `Deploy from a branch`
   - Branch: `main` (or your branch), folder: `/(root)`
4. Save, then open your Pages URL.

## Current setup

- App list on homepage is defined in [apps-data.js](/Users/xiangna/Documents/New project/github-pages-root/apps-data.js)
- Icon file is [nextyou-app-icon.png](/Users/xiangna/Documents/New project/github-pages-root/assets/icons/nextyou-app-icon.png)
- NextYou home + legal pages are in [nextyou](/Users/xiangna/Documents/New project/github-pages-root/nextyou)

To change links:
- `homepage`: currently `nextyou/index.html`
- `appPage`: currently `nextyou/legal/index.html`
