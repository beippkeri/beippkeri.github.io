
const galleryList = [
    'media/before1.png',
    'media/after1.png',
    'media/before2.png',
    'media/after2.png'
] // add more images if thy please
let currentGalleryIndex = 0;
function carosel() {
    const img = document.getElementById('carosel1');
const img2 = document.getElementById('carosel2'); // both images at a time
    console.log('Changing Carousel Images');
if (img != null && img2 != null) {
    img.src = galleryList[currentGalleryIndex];
    img2.src = galleryList[(currentGalleryIndex + 1) % galleryList.length];
    currentGalleryIndex = (currentGalleryIndex + 2) % galleryList.length; // move forward by 2 images
    console.log('Carousel images updated');
    return true;
} else {
    console.log('Carousel image elements not found'); // hopefully will never happen
    return false;
}
}