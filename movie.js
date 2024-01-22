/*function swapImages() {
    // Define an array with the IDs of the image elements
    const imageIds = ['img1', 'img2', 'img3', 'img4', 'img5'];

    // Iterate through the array, moving each image to the next div
    for (let i = 0; i < imageIds.length - 1; i++) {
        const currentImg = document.getElementById(imageIds[i]);
        const nextImg = document.getElementById(imageIds[i + 1]);
        const tempSrc = currentImg.src;

        currentImg.src = nextImg.src;
        nextImg.src = tempSrc;
    }

    // Move the last image to the first div
    const lastImg = document.getElementById(imageIds[imageIds.length - 1]);
    const firstImg = document.getElementById(imageIds[0]);
    const tempSrc = lastImg.src;

    lastImg.src = firstImg.src;
    firstImg.src = tempSrc;
}

// Call the swapImages function after a delay (e.g., 2000 milliseconds or 2 seconds)
setTimeout(swapImages, 2000);*/
function swapImages() {
    // Define an array with the IDs of the image elements
    const imageIds = ['img1', 'img2', 'img3', 'img4', 'img5'];

    // Get the source of the last image
    const lastImgSrc = document.getElementById(imageIds[imageIds.length - 1]).src;

    // Iterate through the array, moving each image to the next div
    for (let i = imageIds.length - 1; i > 0; i--) {
        const currentImg = document.getElementById(imageIds[i]);
        const prevImg = document.getElementById(imageIds[i - 1]);

        currentImg.src = prevImg.src;
    }

    // Move the last image to the first div
    const firstImg = document.getElementById(imageIds[0]);
    firstImg.src = lastImgSrc;
}

  // Call the swapImages function after a delay (e.g., 2000 milliseconds or 2 seconds)
  setInterval(swapImages, 2000);

