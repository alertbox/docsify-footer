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

```html
<!-- using the footer plugin from source -->
<script src="../src/docsify-footer.js"></script>
```

## Step 2

Next, configure `docsify` to load the plugin.

```javascript
window.$docsify = {
  // load from _footer.md
  loadFooter: true,
};
```

<p align="center">
  <img alt="The docsify served in action" src="https://user-images.githubusercontent.com/958227/83914273-911ccd80-a78e-11ea-8958-90f5164782fd.png" width="786">
</p>

Spin up your favorite browser, visit [localhost:3030](https://localhost:3030).

## Configure

You can also configure the plugin:

### `loadFooter`

- Type: `Boolean|String`
- Default: `false`

Loads footer from the Markfown file `_footer.md` if set to `true`, otherwise from the path specified.

```javascript
window.$docsify = {
  // load from _footer.md
  loadFooter: true,

  // load from footnotes.md
  loadFooter: 'footnotes.md',
};
```
