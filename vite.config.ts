// vite.config.js
import path from "path";
import svelte from "@svitejs/vite-plugin-svelte";
import windiCSS from "vite-plugin-windicss";
import { minify } from "html-minifier";
import preprocess from "svelte-preprocess"

// const { defineConfig } = require("vite");
import { defineConfig } from "vite"
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

export default defineConfig(({ command, mode }) => {

  const isProduction = mode === "production";
  return {
    extensions: ['ts', 'tsx', 'html', 'js', 'css', 'svg', 'json'],
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
        //@ts-ignore
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
        //@ts-ignore
        hot: !isProduction,
        emitCss: true,
        preprocess: preprocess()
      }),
      indexReplace(),
    ],
    build: {
      minify: isProduction,
    },
  };
});
