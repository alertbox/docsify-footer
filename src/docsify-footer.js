// deno-lint-ignore no-shadow-restricted-names no-unused-vars
;(function (Docsify, $docsify, undefined) {
  const DEFAULT_FOOTER = '_footer'

  const install = function (hook, vm) {
    const { loadFooter, ext, requestHeaders } = vm.config
    // let's fail faster!
    if (!loadFooter) {
      return
    }

    const file = loadFooter === true ? DEFAULT_FOOTER + ext : loadFooter

    hook.mounted(() => {
      const path = vm.router.getFile(file)
      const articleNode = Docsify.dom.getNode('article')

      Docsify.get(path, false, requestHeaders).then((content) => {
        const html = vm.compiler.compile(content)
        const el = Docsify.dom.create('footer', html)

        Docsify.dom.appendTo(articleNode, el)

        vm._lifecycle.afterEach((article) => article + html)
      })
    })
  }

  $docsify.plugins = [].concat(install, $docsify.plugins || [])
})(Docsify, $docsify || {})
