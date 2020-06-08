# Best Practices

> GitHub Pages and Docsify provides a quite simple way of converting our `.md` files into static documentation sites.

- Avoid using development version; consider using the minified binaries instead
- Avoid using the latest version for production sites; always specify which version you are referring to
- Avoid adding the binaries via `npm install` or `yarn add`; always use the [CDN](cdn.md) hosted
- Avoid creating GitHub Pages manually for your repository; there are many content generating tools out there to get it done rapidly and we happened to use Docsify for that matter
- Avoid cloning or forking GitHub template repositories; click on the `Use This Template` button when you see it, except if you are contributing to the repository
- Avoid creating documentation on the repository root; use `./docs` folder, except when the repo itself is the documentation.
- Avoid installing `docsify-cli` globally via NPM or YARN; we use `gh-minimalist` template, except for already created repos, `npx docsify-cli init docs/` otherwise, but the command requires a recent version of `npm` installed locally
- Avoid adding too much content to the `index.html`; keep documentation sites simple and consistent, and use GitHub Pages for content
- Avoid adopting your own coding style; use community standards such as `standard`, or `airbnb`