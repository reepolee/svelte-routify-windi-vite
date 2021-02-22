// vite.config.js
import path from "path";
import WindiCSS from "vite-plugin-windicss";
const svelte = require("@svitejs/vite-plugin-svelte");
const { defineConfig } = require("vite");

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
      WindiCSS(),
      svelte({
        hot: !isProduction,
        emitCss: true,
      }),
    ],
    build: {
      minify: isProduction,
    },
  };
});
