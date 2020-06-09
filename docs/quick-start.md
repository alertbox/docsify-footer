# Quick Start

> In order to download the plugin via [CDN](cdn.md), you need internet access.

## Requirements

First, you will need followings to get started at the most basic level:

- A repository with Docsify enabled
- An editor, like VS Code

For new projects, luckily, we have a starter template ([gh-minimalist](https://github.com/alertbox/gh-minimalist)) you can simply Docsify yourself and forget the rest. But, for the old projects that are already running Docsify or you initialized using `docsify-cli`, you will follow this generic pattern:

- [Adding the plugin](#adding-plugin) to your Docsify-enabled site
- [Adding content](#adding-content) to the footer

## Adding Plugin

First, open up the `index.html` and add the `docsify-footer.min.js` plugin, below the `docsify.min.js` script tag.

[filename](_gist/add-latest.md ':include')

Next, you will want to modify `$docsify` configuration to load the plugin.

[filename](_gist/enable-plugin.md ':include')

That's it. Your site is now Footer-enabled, and is ready to serve content.

## Adding Content

Once you have Footer-enabled the site, you need to create a `_footer.md` file at the root of your Docsify project. Typically that is inside the `docs/` folder.

!> Sadly, Markdown in `html` is not yet supported. We'd be glad if you could send us a pull request for that.

Luckily, if you are familiar with Markdown, this step should be pretty familiar. Just write some content in Markdown as you do everywhere else. For example, here's our content in the `_footer.md` markdown file:

```markdown
Maintained by [the Alertbox Team](https://github.com/alertbox/docsify-served/). Proudly published with [docsify](https://docsify.js.io)
```

Then, spin up your favorite browser, visit [localhost:3000](https://localhost:3000).

For the Markdown above, running the plugin will yield:

<p align="center">
  <img alt="The docsify footer markdown in action" src="https://user-images.githubusercontent.com/958227/84028138-d4a15280-a9ad-11ea-93d1-43ebace761b3.png" width="786">
</p>

This plugin supports docsify's extended markdown syntax that makes the document more readable. Check out [references](references.md) for all you need to know about Docsify and the plugin related guides.
