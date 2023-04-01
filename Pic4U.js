// Get all the gallery-item elements
const galleryItems = document.querySelectorAll('.gallery-item');

// Loop through the gallery-item elements and add an event listener for when the image loads
galleryItems.forEach(item => {
  const img = item.querySelector('img');
  img.addEventListener('load', () => {
    // Get the image's natural width and height
    const naturalWidth = img.naturalWidth;
    const naturalHeight = img.naturalHeight;

    // Calculate the aspect ratio
    const aspectRatio = naturalWidth / naturalHeight;

    // Get the width and height of the gallery-item element
    const itemWidth = item.offsetWidth;
    const itemHeight = item.offsetHeight;

    // Calculate the new width and height of the image
    let newWidth, newHeight;
    if (aspectRatio > 1) {
      // Landscape orientation
      newWidth = itemWidth;
      newHeight = itemWidth / aspectRatio;
    } else {
      // Portrait or square orientation
      newHeight = itemWidth / aspectRatio;
      newWidth = itemWidth;
    }
  });
});
