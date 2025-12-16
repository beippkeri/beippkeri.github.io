function addOrnament() {
        alert("Adding an ornament!");
        ornamentCount = countOrnaments();
        maxOrnaments = 10;
        if (ornamentCount >= maxOrnaments) {
            console.warn("Cannot add more ornaments: Maxiumum ornaments reached.");
            return;
        }
        const visibleOrnaments = ornaments[ornamentCount];
        addingOrnament = ornaments[ornamentCount];
        addingOrnament.style.visibility = 'visible';
    }
function removeOrnaments() {
        alert("Removing an ornament!");
        ornamentCount = countOrnaments();
        minOrnaments = 0;
        if (ornamentCount <= minOrnaments) {
            console.warn("Cannot remove more ornaments: Minimum ornaments reached.");
            return;
        }
        const visibleOrnaments = ornaments[ornamentCount];
        removingOrnament = ornaments[ornamentCount - 1];
        removingOrnament.style.visibility = 'hidden';
    }
function countOrnaments() {
    let ornamentCount = 0;
    alert("Counting ornaments!");
    const ornaments = [document.getElementById('ornament1'),
                       document.getElementById('ornament2'),
                       document.getElementById('ornament3'),
                       document.getElementById('ornament4'),
                       document.getElementById('ornament5'),
                       document.getElementById('ornament6'),
                       document.getElementById('ornament7'),
                       document.getElementById('ornament8'),
                       document.getElementById('ornament9'),
                       document.getElementById('ornament10')];
    for (const ornament of ornaments) {
        if (ornament.checkVisibility === true) {
            ornamentCount++;
        }
    }
    alert("Ornament count: " + ornamentCount);
    return ornamentCount;
}