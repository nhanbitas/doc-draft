
document.addEventListener("HTMLParsed", () => {
  const colorChips = document.querySelectorAll('[data-color-chip]');
  // Convert the RGB color to hex code
  const rgbToHex = (rgb) => {
    const hex = Number(rgb).toString(16);
    if (hex.length < 2) {
      return '0' + hex;
    }
    return hex;
  };
  
  // Calculate the luminance of a color
  const calculateLuminance = (r, g, b) => {
    const red = r / 255;
    const green = g / 255;
    const blue = b / 255;
    const luminance = 0.2126 * red + 0.7152 * green + 0.0722 * blue;
    return luminance;
  };
  
  // Add hover event listeners to each color element
  colorChips.forEach((element) => {
    element.classList.add('cursor-pointer');
    // Get the computed background color
    const computedStyle = getComputedStyle(element);
    const backgroundColor = computedStyle.backgroundColor;
    // Extract the RGB values
    const rgbValues = backgroundColor.match(/\d+/g);
    const [r, g, b] = rgbValues;
    // Extract the RGB values
    const hexCode = rgbValues.map(rgbToHex).join('');
  
    element.addEventListener('mouseenter', () => {
      // Calculate the luminance of the color
      const luminance = calculateLuminance(r, g, b);
  
      // Check if the color is too dark
      if (luminance < 0.75) {
        element.classList.add('text-white');
      }
      // Set the innerHTML of the element to the hex code
      element.innerHTML = hexCode;
    });
  
    element.addEventListener('mouseleave', () => {
      // Reset the innerHTML of the element
      element.innerHTML = '';
      // Remove the 'text-white' class
      element.classList.remove('text-white');
    });
  
    element.addEventListener('click', () => {
      // Copy to clipboard with the hexCode values
      navigator.clipboard
        .writeText(`#${hexCode}`)
        .then(() => {
          element.innerHTML = 'Copied!';
        })
        .catch((err) => {
          console.error('error:', err);
        });
    });
  });
})