import { readdirSync, writeFileSync, existsSync } from "node:fs";
import path from "node:path";

const stepsDir = path.join(process.cwd(), "public", "images", "recipes", "steps");
const outFile = path.join(process.cwd(), "lib", "stepImagesManifest.json");

const files = existsSync(stepsDir) ? readdirSync(stepsDir).filter((f) => f.endsWith(".webp")) : [];

writeFileSync(outFile, JSON.stringify(files.sort()), "utf-8");

console.log(`Manifiesto de imágenes de pasos generado: ${files.length} archivos -> ${outFile}`);
