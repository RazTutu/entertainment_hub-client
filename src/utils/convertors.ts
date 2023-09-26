export function hexToRgb(hex: string) {
  // Remove the '#' character, if it's present
  hex = hex.replace(/^#/, '');

  // Parse the hex color components (R, G, and B)
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);

  // Return the RGB format
  return `rgb(${r}, ${g}, ${b})`;
}
