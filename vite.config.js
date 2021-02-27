// vite.config.js
import path from "path";
import WindiCSS from "vite-plugin-windicss";
import { minify } from "html-minifier";

const svelte = require("@svitejs/vite-plugin-svelte");
const { defineConfig } = require("vite");

const indexReplacePlugin = () => {
  return {
    name: "html-transform",
    transformIndexHtml(html) {
      return minify(html, {
        collapseWhitespace: true,
      });
    },
  };
};

module.exports = defineConfig(({ command, mode }) => {
  const isProduction = mode === "production";
  return {
    optimizeDeps: {
      exclude: ["@roxi/routify"],
    },
    resolve: {
      alias: {
        svelte: path.resolve(__dirname, "node_modules/svelte"),
      },
    },
    plugins: [
      WindiCSS({
        verbose: true,
        silent: false,
        debug: true,
        config: "tailwind.config.js", // tailwind config file path (optional)
        compile: false, // false: interpretation mode; true: compilation mode
        prefix: "windi-", // set compilation mode style prefix
        globalPreflight: true, // set preflight style is global or scoped
        globalUtility: true, // set utility style is global or scoped
      }),
      svelte({
        hot: !isProduction,
        emitCss: true,
      }),
      indexReplacePlugin(),
    ],
    build: {
      minify: isProduction,
    },
    // indexHtmlTransforms: [
    //   ({ code }) => {
    //     console.log(code);
    //     return code.replace(/Routify/, "Vite Playground");
    //   },
    // ],
  };
});
