// vite.config.js
import path from "path";
import svelte from "@svitejs/vite-plugin-svelte";
import windiCSS from "vite-plugin-windicss";
import { minify } from "html-minifier";

const { defineConfig } = require("vite");

const indexReplace = () => {
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
      windiCSS({
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
      indexReplace(),
    ],
    build: {
      minify: isProduction,
    },
  };
});
