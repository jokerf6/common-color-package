import { getDominantColor } from "./getDominantColor";

export function getColor(path: string, callback: (color: any) => void) {
  getDominantColor(path)
    .then((color) => {
      callback(color);
    })
    .catch((error) => {
      console.error("Error:", error);
      // Handle the error here if needed
    });
}
