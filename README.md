# Front End Carbon Recovery Docusaurus Site

This is the first Docusaurus version of the Front End Carbon Recovery website.

## Local preview

```bash
npm install
npm start
```

## Build

```bash
npm run build
```

## GitHub Pages

This repository includes a GitHub Actions workflow that builds and publishes the site to GitHub Pages.

After uploading the files to GitHub:

1. Go to **Settings → Pages**.
2. Under **Build and deployment**, select **GitHub Actions**.
3. The workflow will publish the site after the next push to `main`.

If the repository or account name changes, update `url`, `baseUrl`, `organizationName`, and `projectName` in `docusaurus.config.js`.
