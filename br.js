const glob = require("glob");
const fs = require("fs");
const compress = require("brotli/compress");
const skipSizeUnderBytes = 10000;
const dir = "./dist/**";

const brotliSettings = {
  extension: "br",
  skipLarger: true,
  mode: 1, // 0 = generic, 1 = text, 2 = font (WOFF2)
  quality: 10, // 0 - 11,
  lgwin: 12, // default
};

glob(dir, function (er, files) {
  files.forEach((file) => {
    if (file.endsWith(".js") || file.endsWith(".css") || file.endsWith(".html")) {
      const stat = fs.statSync(file).size;
      if (stat > skipSizeUnderBytes) {
        const result = compress(fs.readFileSync(file), brotliSettings);
        fs.writeFileSync(file + ".br", result);
      }
    }
  });
});
