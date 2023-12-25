const Jimp = require("jimp");

export default async function getDominantColor(imagePath: string) {
  try {
    const image = await Jimp.read(imagePath);

    const width = image.bitmap.width;
    const height = image.bitmap.height;

    const colorMap = new Map();

    // Loop through each pixel to count color occurrences
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const { r, g, b } = Jimp.intToRGBA(image.getPixelColor(x, y));

        const colorKey = `${r},${g},${b}`;

        if (colorMap.has(colorKey)) {
          colorMap.set(colorKey, colorMap.get(colorKey) + 1);
        } else {
          colorMap.set(colorKey, 1);
        }
      }
    }

    // Find the most dominant color
    let maxCount = 0;
    let dominantColor = "";
    colorMap.forEach((count, color) => {
      if (count > maxCount) {
        maxCount = count;
        dominantColor = color;
      }
    });
    return {
      rgp: dominantColor,
      hexa: rgbToHex(
        dominantColor.split(",")[0],
        dominantColor.split(",")[1],
        dominantColor.split(",")[2]
      ),
    };
  } catch (error) {
    console.error("Error:", error);
  }
}

// Function to convert RGB to HEX
function rgbToHex(r: any, g: any, b: any) {
  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));

  const hexR = r.toString(16).padStart(2, "0");
  const hexG = g.toString(16).padStart(2, "0");
  const hexB = b.toString(16).padStart(2, "0");

  return `#${hexR}${hexG}${hexB}`;
}
