
export const calculateDimensions = (aspectRatio: string) => {
  const [width, height] = aspectRatio.split(':').map(Number);

  const newWidth = 500; // Set your desired width here
  const newHeight = (newWidth * height) / width;

  return { width: newWidth, height: newHeight };
}