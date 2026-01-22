
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
const img = document.getElementById('carosel1');
const img2 = document.getElementById('carosel2');
const galleryList = [
    'media/before1.png',
    'media/after1.png',
    'media/before2.png',
    'media/after2.png'
]
let currentGalleryIndex = 0;
function carosel() {
if (img != null && img2 != null) {
    img.src = galleryList[currentGalleryIndex];
    img2.src = galleryList[(currentGalleryIndex + 1) % galleryList.length];
    currentGalleryIndex = (currentGalleryIndex + 2) % galleryList.length;
} else {
    console.log('Carousel image elements not found');
    return false;
}
}
const assetList = [
    'media/red.png',
    'media/purple.png',
    'media/green.png'
]
let currentAssetIndex = 0;

async function unfade(element, duration) {
    let opacity = 0;
    const interval = 50;
    const increment = interval / duration;
    while (opacity < 1) {
        opacity += increment;
        if (opacity > 1) opacity = 1;
        element.style.opacity = opacity;
        await delay(interval);
    }
}
async function main() {
    console.log('Changing Image');
    const img = document.getElementById('switch');
    if (img != null) {
        currentAssetIndex = (currentAssetIndex + 1) % assetList.length;
        img.src = assetList[currentAssetIndex];
        unfade(img, 2000);
    }else{
        console.log('Image element not found');
        return false;
    }
}
setInterval(main, 4000);