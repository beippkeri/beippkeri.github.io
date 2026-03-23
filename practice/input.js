const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let isDrawing = false;
let x = 50;
let y = 50;

function animate() {
    ctx.fillStyle = 'lightblue'; // Set background color
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Add any animation logic here
    ctx.fillRect(x, y, 100, 100); // Example: Draw a rectangle
    requestAnimationFrame(animate);
}
animate();
function handleKeyDown(e) {
    e.preventDefault(); // Prevent default behavior of arrow keys
    if (e.key === 'ArrowDown') {
      y-= 10; // Move down
    }
    else if (e.key === 'ArrowUp') {
        y+= 10; // Move up
    }
    else if (e.key === 'ArrowLeft') {
        x-= 10; // Move left
    }
    else if (e.key === 'ArrowRight') {
        x+= 10; // Move right
    }
}
document.addEventListener('keydown', handleKeyDown);