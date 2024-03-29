# Contributing

> We use our wonderful [Contributor Covenant](http://contributor-covenant.org/) for our [Contributor Code of Conduct](CODE_OF_CONDUCT.md). This same template is used by [over 350,000 open source projects](https://github.com/search?l=Markdown&q=%22Contributor+Covenant%22+fork%3Afalse&type=Code). Please read that before you join our project.

Welcome! And thank you for your interest in contributing to the template. There are many ways in which you can contribute, beyond writing code. Here's a high-level overview of how you can get involved:

- Ask questions and problems on [Stack Overflow]()
- [Submit bugs and feature requests](https://github.com/alertbox/docsify-footer/issues), and help us verify as they are checked in
- Upvote [popular feature requests]()
- Review [source code changes](https://github.com/alertbox/docsify-footer/pulls)
- Review the [documentation](docs) and make pull requests for anything from typos to new content

## Contributing to Source Code

> The official repo  to contribute would be [@docsifyjs/docsify](https://github.com/docsifyjs/docsify/#readme).

If you are interested in writing code to fix issues, here's a high-level overview of how you can clone the repos and get started.

### Prerequisites

In order to download necessary tools, clone the repo, and install dependencies via `bun`, you need internet access.

You'll need following tools:

- Git
- VS Code and Recommended Extensions
- Docker Desktop

### Build and Run

[![Open in Dev Container](https://img.shields.io/static/v1?style=for-the-badge&label=Dev+Container&message=Open&color=blue&logo=visualstudiocode)](https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/alertbox/docsify-footer)

You can also run this repo locally by following these repetitive steps. First, you want to ensure Docker Desktop (or Rancher Desktop) is running and the repo is cloned to your local machine.

With VS Code:
- Run task: `Reopen in Container`
- Press `F5` to preview locally

To refer these two fake files pointing to the originals, you comment out the `<script>` pointing to the CDN in the [docs/index.html](./docs/index.html).

With Terminal:
- Run `bun build:clean` to build from source
- Create a couple of symlinks
  ```sh
  cd docs && \
     ln -s ../src/docsify-footer.js docsify-footer.js && \
     ln -s ../dist/docsify-footer.min.js docsify-footer.min.js
  ```

To test the changes, you launch your favorite browser and visit [https://localhost:4321](https://localhost:4321).

### Pull Requests

To enable us to quickly review and accept your pull request, always create one pull request per issue, link the issue in the pull request. Never merge multiple into one unless they all share the same root cause.

Be sure to follow community guidelines and keep the source code changes as small as possible. Avoid any pure document formatting changes to code that has not been modified otherwise.

To avoid multiple pull requests resolving the same issue, let others know you are working on it by saying so in a comment.

### Publishing

At present, the plugin published via [np](https://github.com/sindresorhus/np) to: `npm` registry, `unpkg` and `jsDelivr` CDN. To get familiar, check out [npm publishing guide](https://zellwk.com/blog/publish-to-npm/).

### Discussion Etiquette

In order to keep the conversations clear and transparent, please limit discussion to English and keep things on topic with the issue. Be considerate to others and try to be courteous and professional at all times.

### Thank You

Your contributions to OSS projects, large or small, make great projects like possible. Thank you for taking time to contribute.
