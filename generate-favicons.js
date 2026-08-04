import sharp from "sharp";
import fs from "fs";
import path from "path";

// ── SVG Brand Mark Definitions ──

// 1. Transparent Background Version
const svgTransparent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <!-- House Roof (Brand Red & Dark Chocolate Outline) -->
  <path d="M 256 32 L 32 216 L 80 256 L 256 112 L 432 256 L 480 216 Z" fill="#FF5A5F" stroke="#6B3F1F" stroke-width="16" stroke-linejoin="round"/>
  
  <!-- Chimney with Smoke Puff -->
  <rect x="360" y="80" width="44" height="70" rx="8" fill="#FF5A5F" stroke="#6B3F1F" stroke-width="12"/>
  <circle cx="382" cy="50" r="16" fill="#FFFFFF" stroke="#6B3F1F" stroke-width="10"/>

  <!-- Main House Badge Body (Brand Yellow) -->
  <path d="M 80 220 L 432 220 L 432 440 C 432 460 416 476 396 476 L 116 476 C 96 476 80 460 80 440 Z" fill="#FFD54A" stroke="#6B3F1F" stroke-width="20" stroke-linejoin="round"/>

  <!-- Red Center Ribbon -->
  <path d="M 64 300 L 448 300 L 424 420 L 256 448 L 88 420 Z" fill="#FF5A5F" stroke="#6B3F1F" stroke-width="18" stroke-linejoin="round"/>

  <!-- Bold White Text "HSH" with Dark Outline for Maximum 16px Legibility -->
  <!-- H -->
  <path d="M 112 330 H 144 V 356 H 180 V 330 H 212 V 410 H 180 V 382 H 144 V 410 H 112 Z" fill="#FFFFFF" stroke="#6B3F1F" stroke-width="12" stroke-linejoin="round"/>
  
  <!-- S -->
  <path d="M 244 344 C 244 332 256 324 274 324 C 294 324 306 334 306 346 C 306 364 282 368 266 372 C 250 376 240 384 240 396 C 240 412 256 422 276 422 C 298 422 312 410 312 396 H 288 C 288 402 282 406 274 406 C 266 406 260 400 260 394 C 260 386 274 382 290 378 C 308 374 324 366 324 346 C 324 326 304 312 274 312 C 244 312 226 328 226 344 Z" fill="#FFFFFF" stroke="#6B3F1F" stroke-width="10" stroke-linejoin="round"/>
  
  <!-- H -->
  <path d="M 336 330 H 368 V 356 H 404 V 330 H 436 V 410 H 404 V 382 H 368 V 410 H 336 Z" fill="#FFFFFF" stroke="#6B3F1F" stroke-width="12" stroke-linejoin="round"/>

  <!-- Cute Smile Arc in Yellow Upper Space -->
  <path d="M 200 264 Q 256 296 312 264" fill="none" stroke="#6B3F1F" stroke-width="16" stroke-linecap="round"/>
</svg>`;

// 2. White Container / App Icon Version (with soft rounded background)
const svgWhite = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <rect width="512" height="512" rx="100" fill="#FFFFFF"/>
  <g transform="translate(16, 16) scale(0.9375)">
    ${svgTransparent.replace(/<svg[^>]*>/, "").replace("</svg>", "")}
  </g>
</svg>`;

const publicDir = path.resolve("./public");
const appDir = path.resolve("./app");

async function generateFavicons() {
  console.log("Generating Happy Snack House Brand Mark & Favicons...");

  // Write SVGs
  fs.writeFileSync(path.join(publicDir, "brandmark-transparent.svg"), svgTransparent);
  fs.writeFileSync(path.join(publicDir, "brandmark-white.svg"), svgWhite);
  fs.writeFileSync(path.join(publicDir, "icon.svg"), svgTransparent);
  fs.writeFileSync(path.join(publicDir, "favicon.svg"), svgTransparent);
  fs.writeFileSync(path.join(appDir, "icon.svg"), svgTransparent);

  const targets = [
    { name: "favicon-16x16.png", size: 16, svg: svgTransparent },
    { name: "favicon-32x32.png", size: 32, svg: svgTransparent },
    { name: "favicon-48x48.png", size: 48, svg: svgTransparent },
    { name: "favicon-64x64.png", size: 64, svg: svgTransparent },
    { name: "favicon-128x128.png", size: 128, svg: svgTransparent },
    { name: "mstile-150x150.png", size: 150, svg: svgWhite },
    { name: "apple-touch-icon.png", size: 180, svg: svgWhite },
    { name: "android-chrome-192x192.png", size: 192, svg: svgWhite },
    { name: "android-chrome-512x512.png", size: 512, svg: svgWhite },
    { name: "brandmark-transparent.png", size: 512, svg: svgTransparent },
    { name: "brandmark-white.png", size: 512, svg: svgWhite },
  ];

  for (const t of targets) {
    const buffer = await sharp(Buffer.from(t.svg))
      .resize(t.size, t.size)
      .png()
      .toBuffer();

    fs.writeFileSync(path.join(publicDir, t.name), buffer);
    if (t.name === "apple-touch-icon.png" || t.name === "favicon-32x32.png") {
      fs.writeFileSync(path.join(appDir, t.name), buffer);
    }
    console.log(`✓ Generated ${t.name} (${t.size}x${t.size})`);
  }

  // Create favicon.ico (using 32x32 PNG buffer)
  const ico32Buffer = await sharp(Buffer.from(svgTransparent))
    .resize(32, 32)
    .png()
    .toBuffer();

  fs.writeFileSync(path.join(publicDir, "favicon.ico"), ico32Buffer);
  fs.writeFileSync(path.join(appDir, "favicon.ico"), ico32Buffer);
  console.log("✓ Generated favicon.ico");

  console.log("🎉 All Brand Mark favicons generated successfully!");
}

generateFavicons().catch(console.error);
