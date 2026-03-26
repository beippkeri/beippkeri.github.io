let canvas = document.getElementById("canvas1");
let ctx = canvas.getContext("2d");
ctx.fillStyle = 'black' //idk
for (let blockY = 0; blockY <= 200; blockY += 100) {
    for (let blockX = 0; blockX < 800; blockX += 100) {
        ctx.fillRect(blockX, blockY, 50, 20);
    }
}

canvas = document.getElementById("canvas2");
ctx = canvas.getContext("2d");
ctx.fillStyle = 'black'

for (let blockY = 0; blockY < 800; blockY += 100) {
    for (let blockX = 0; blockX < blockY; blockX += 100) {
        ctx.fillRect(blockX, blockY, 50, 20);
    }
}

canvas = document.getElementById("canvas3");
ctx = canvas.getContext("2d");
ctx.fillStyle = 'black'

for (let blockY = 0; blockY < 800; blockY += 100) {
    for (let blockX = 0; blockX < 800; blockX += 100) {
        if (!(blockX == blockY)){
        ctx.fillRect(blockX, blockY, 50, 20);
        }
    }
}

canvas = document.getElementById("canvas4");
ctx = canvas.getContext("2d");
ctx.fillStyle = 'black'

for (let blockY = 0; blockY <= 800; blockY += 200) {
    for (let blockX = 0; blockX <= 800; blockX += 200) {
        ctx.fillRect(blockX, blockY, 100, 100);
        ctx.fillRect(blockX+100, blockY+100, 100, 100);
    }
}