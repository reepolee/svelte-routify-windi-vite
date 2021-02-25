# Svelte Routify WindiCSS Vite

A starter template for Svelte Application, uses Routify file-based router, WindiCSS to compile TailwindCSS and Vite.

[Svelte](https://svelte.dev)  
[Routify](https://routify.dev)  
[Vite](https://vitejs.dev)  
[WindiCSS](https://windicss.netlify.app)

Kudos to all the respective authors, special thanks to [@jakobrosenberg](https://github.com/jakobrosenberg) and [@dominikg](https://github.com/dominikg).

## Install

```
git clone git@github.com:reepolee/svelte-routify-windi-vite.git best-dx
cd best-dx
npm i
npm run dev
```

## VS Code Intellisense

This template does not include TailwindCSS package as it would clutter the repo with over 50 additional packages. We're trying to stay slim here and that's why I suggest installing Tailwind up the directory tree, not in your application repository. VS Code TailwindCSS Intellisense plugin scans up the folders and will find TailwindCSS automatically. I believe it is a good compromise as you only install TailwindCSS once for all your projects.

Mine looks like this:

![Intellisense](/vscode-tailwindcss-intellisense-for-windicss.png)
