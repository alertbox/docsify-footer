# Configure

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
