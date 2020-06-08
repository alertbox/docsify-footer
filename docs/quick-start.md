# Quick Start

> For minimum container requirements, you can use [alertbox/gh-minimalist/](https://github.com/alertbox/gh-minimalist/) GitHub template.

## Prerequisites

- GitHub Account
  - GitHub repository
- VS Code
- Docsify

Here is how to get the plugin works for your documentation site:

## Step 1

First, open up the `index.html` and add the `docsify-footer` plugin. This must be below the `docsify` script tag.

[filename](_gist/add-latest.md ':include')

## Step 2

Next, configure `docsify` to load the plugin.

```javascript
window.$docsify = {
  // load from _footer.md
  loadFooter: true,
};
```

<p align="center">
  <img alt="The docsify footer markdown in action" src="https://user-images.githubusercontent.com/958227/84028138-d4a15280-a9ad-11ea-93d1-43ebace761b3.png" width="786">
</p>

Spin up your favorite browser, visit [localhost:3030](https://localhost:3030).
