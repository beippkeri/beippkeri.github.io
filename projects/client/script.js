
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
const assetList = [
    'media/red.png',
    'media/purple.png',
    'media/green.png'
]
let currentAssetIndex = 0;

console.log('Page loaded');

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