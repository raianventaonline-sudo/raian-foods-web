const sharp = require("sharp");
const pngToIcoModule = require("png-to-ico");
const pngToIco = pngToIcoModule.default || pngToIcoModule;
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const src = path.join(root, "public", "favicon.png");
const appDir = path.join(root, "app");

async function main() {
  // PWA / browser icon (transparent), square multiple of 48px
  await sharp(src)
    .resize(192, 192, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(appDir, "icon.png"));

  // Apple touch icon: no transparency (iOS adds black behind) -> flatten on cream
  await sharp(src)
    .resize(180, 180, { fit: "contain", background: { r: 250, g: 247, b: 240, alpha: 1 } })
    .flatten({ background: { r: 250, g: 247, b: 240 } })
    .png()
    .toFile(path.join(appDir, "apple-icon.png"));

  // favicon.ico with 16/32/48 sizes
  const sizes = [16, 32, 48];
  const buffers = await Promise.all(
    sizes.map((s) =>
      sharp(src)
        .resize(s, s, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .png()
        .toBuffer()
    )
  );
  const ico = await pngToIco(buffers);
  fs.writeFileSync(path.join(appDir, "favicon.ico"), ico);

  for (const f of ["icon.png", "apple-icon.png", "favicon.ico"]) {
    const { size } = fs.statSync(path.join(appDir, f));
    console.log(f, size, "bytes");
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
