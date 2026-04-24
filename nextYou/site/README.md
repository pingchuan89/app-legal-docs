# App Legal Docs Site

This folder is ready to publish as a standalone GitHub Pages repository.

## Included routes
- `/privacy-policy`
- `/terms`
- `/privacy-policy.html`
- `/terms.html`

## Quick publish (new repo)
1. Create a new GitHub repository (recommended name: `app-legal-docs`).
2. Copy the contents of this folder into the root of that repo.
3. Push to `main`.
4. In GitHub repo settings:
   - `Settings` -> `Pages`
   - `Source`: `GitHub Actions`
5. The workflow at `.github/workflows/deploy-pages.yml` will deploy automatically.

## Custom domain (optional)
1. Rename `CNAME.example` to `CNAME`.
2. Replace the sample value with your real domain, for example:
   - `legal.daily-challenges.com`
3. Add DNS records for GitHub Pages (CNAME to `<your-github-username>.github.io`).
4. Re-deploy.

## Update legal text
- Edit `privacy-policy.html` and `terms.html` directly.
- Keep `privacy-policy/index.html` and `terms/index.html` as route entry points.
