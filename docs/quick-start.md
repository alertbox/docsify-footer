# Quick Start

> In order to use the plugin via [CDN](cdn.md), you need internet access.

## Requirements

First, you will need followings to get started at the most basic level:

- A repository with Docsify-enabled
- An editor, like VS Code

For new projects, luckily, we have a starter template ([gh-quickstart](https://alertbox.github.io/gh-quickstart)) you can simply Docsify yourself and forget the rest. But, for the old projects that are already running Docsify or you initialized using `docsify-cli`, you will follow this generic pattern:

- [Add the plugin](#add-the-plugin) to your Docsify-enabled site
- [Write content](#write-content) on the footer

## Add the Plugin

First, open up the `index.html` file and add the `docsify-footer.min.js` script tag, below the `docsify.min.js` script.

```html
<!-- use the footer plugin latest version -->
<script src="//cdn.jsdelivr.net/npm/@alertbox/docsify-footer/dist/docsify-footer.min.js"></script>

<!-- Or use the footer plugin specific version -->
<script src="//cdn.jsdelivr.net/npm/@alertbox/docsify-footer@1.0.0-0/dist/docsify-footer.min.js"></script>

```

Next, you will want to modify `$docsify` configuration to load the footer Markdown.

```javascript
window.$docsify = {
  // load from _footer.md
  loadFooter: true,

  // Or load from _footer.md
  loadFooter: '_footer.md',
};
```

That's it. Your site is now Footer-enabled, and is ready to write some footer content.

## Write Content

Once you have Footer-enabled the site, you need to create a `_footer.md` file at the root of your Docsify project. Typically that is inside the `docs/` folder.

!> Sadly, Markdown in `html` is not yet supported. We'd be glad if you could send us a pull request for that.

Luckily, if you are familiar with Markdown, this step should be pretty familiar. Just write some content in Markdown as you do everywhere else. [Docsify's Getting Started]() guide is a good source of information to further tweak your site. For example, here's our content in the `_footer.md` markdown file:

```markdown
Maintained by [the Alertbox Team](https://github.com/alertbox/docsify-footer/). Proudly published with [docsify](https://docsify.js.io)
```

Then, spin up your favorite browser to see your content in each Article.
