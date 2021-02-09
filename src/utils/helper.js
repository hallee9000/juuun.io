export const loadImage = (src) => (new Promise((resolve) => {
  const img = new Image();
  img.onload = function() {
    resolve(img)
  }
  img.src = src
}))
