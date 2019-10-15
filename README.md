# Wandering Leaf Studios

Website for [Wandering Leaf Studios](https://wanderingleafstudios.com).
Built with [Gatsby](https://www.gatsbyjs.org/) and [Netlify CMS](https://www.netlifycms.org).

It follows the [JAMstack architecture](https://jamstack.org) by using Git as a single source of truth, and [Netlify](https://www.netlify.com) for continuous deployment, and CDN distribution.

## Dependencies

- Node v8.16+
- yarn v1.19
- [Gatsby CLI](https://www.gatsbyjs.org/docs/)
- [Netlify CLI](https://github.com/netlify/cli)

## Getting Started with Netlify CLI

```bash
yarn
netlify dev
```

## Getting Started with Yarn

```bash
yarn run build
yarn run serve
```

## Setting up the CMS

Follow the [Netlify CMS Quick Start Guide](https://www.netlifycms.org/docs/quick-start/#authentication) to set up authentication, and hosting.

## `node-gyp` Debugging

### Windows

Windows users might encounter `node-gyp` errors when trying to npm install.
To resolve, make sure that you have both Python 2.7 and the Visual C++ build environment installed.

```bash
npm config set python python2.7
npm install --global --production windows-build-tools
```

[Full details here](https://www.npmjs.com/package/node-gyp 'NPM node-gyp page')

### Mac OS X

MacOS users might also encounter some errors, for more info check [node-gyp](https://github.com/nodejs/node-gyp). We recommend using the latest stable node version.

## CONTRIBUTING

Contributions are always welcome, no matter how large or small. Before contributing, please read the [code of conduct](CODE_OF_CONDUCT.md).
