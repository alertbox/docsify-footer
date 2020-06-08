# Contributing

Welcome! And thank you for your interest in contributing to the plugin. We use our wonderful [Contributor Covenant](http://contributor-covenant.org/) for our [Code of Conduct](CODE_OF_CONDUCT.md). Please read that before you join our project.

There are many ways in which you can contribute, beyond writing code. Here's a high-level overview of how you can get involved.

- Ask a question on [Stack Overflow]()
- [Submit bugs and feature requests](https://github.com/alertbox/docsify-footer/issues), and help us verify as they are checked in
- Upvote [popular feature requests]()
- Review [source code changes](https://github.com/alertbox/docsify-footer/pulls)
- Review the [documentation](docs) and make pull requests for anything from typos to new content

## Contributing to Source Code

If you are interested in writing code to fix issues, here's a high-level overview of how you can clone the repos and get started.

### Prerequisites

In order to download necessary tools, clone the repo, and install dependencies via `npm` or `yarn`, you need internet access.

You'll need following tools:

- Git
- VS Code
- Docker Desktop
- Docker Extension for VS Code

### Build and Run

If you want to understand how the plugin works, or debug an issue, you'll want to get the source, build it, and run it locally.

#### Step 1 Getting the source code

First fork the repository so that you can make a Pull Request. Then clone your fork locally:

```bash
#!/bin/bash
git clone https://github.com/<your-github-account>/docsify-footer
```

Occasionally you would want to merge changes the upstream repository (the official code repo) with your fork.

```bash
#!/bin/bash
cd docsify-footer
git checkout master
git pull https://github.com/alertbox/docsify-footer master
```

#### Step 2 Build and run from the source

First, you want to ensure Docker Desktop is running on your machine. Then pull the `docsify-served` locally.

```bash
#!/bin/bash
cd docsify-footer
docker-compose up -d
```

To test the changes, you launch your favorite browser and visit [https://localhost:3030](https://localhost:3030).

<p align="center">
  <img alt="The docsify footer in action" src="https://user-images.githubusercontent.com/958227/83914273-911ccd80-a78e-11ea-8958-90f5164782fd.png" width="768">
</p>

> Default template comes with `npx docsify init docs/` in action.

### Pull Requests

To enable us to quickly review and accept your pull request, always create one pull request per issue, link the issue in the pull request. Never merge multiple into one unless they all share the same root cause.

Be sure to follow community guidelines and keep the source code changes as small as possible. Avoid any pure document formatting changes to code that has not been modified otherwise.

To avoid multiple pull requests resolving the same issue, let others know you are working on it by saying so in a comment.

### Publishing

At present, the plugin only published to following platforms: `npm` registry, `unpkg` CDN. To get familiar, check out [npm publishing guide]().

### Discussion Etiquette

In order to keep the conversations clear and transparent, please limit discussion to English and keep things on topic with the issue. Be considerate to others and try to be courteous and professional at all times.

### Thank You

Your contributions to OSS projects, large or small, make great projects like possible. Thank you for taking time to contribute.
