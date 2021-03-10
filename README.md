# Svelte Routify WindiCSS Vite

A starter template for Svelte Application with Typescript, uses Routify file-based router, WindiCSS to compile TailwindCSS and Vite.

[Svelte](https://svelte.dev)  
[Routify](https://routify.dev)  
[Vite](https://vitejs.dev)  
[WindiCSS](https://windicss.netlify.app)  
[TypeScript](https://www.typescriptlang.org)

Kudos to all the respective authors, special thanks to [@jakobrosenberg](https://github.com/jakobrosenberg) and [@dominikg](https://github.com/dominikg).

## Install

```
git clone git@github.com:reepolee/svelte-routify-windi-vite.git best-dx
cd best-dx
npm i
npm run dev
```

## SSG

For SSG you can use [Spank](https://github.com/roxiness/spank):
```
npm run build
npx spank
```

Ignore error messages about deleting temp files on Windows.

`dist` folder now contains predrendered pages. It renders pages automatically from Routify config. To serve, just run
```
npx spassr
```

Your web app is now served at port 5000 on localhost.

Upload `dist` to any web server or JAMstack service like Netlify, Vercel or Cloudflare and you're good to go.

## VS Code IntelliSense.

Install the official WindiCSS VS Code plugin for better experience.

[WindiCSS Extension](https://marketplace.visualstudio.com/items?itemName=voorjaar.windicss-intellisense)

## WORK IN PROGRESS

Please mind this is an **experimental** template, based on pre-production versions of ViteJS and WindiCSS. It was born out of frustration with slow development experience of other bundlers and compilers, but as technology changes, I might change my focus away from any of used packages.
