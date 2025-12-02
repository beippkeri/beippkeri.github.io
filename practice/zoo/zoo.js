console.log("Zoo script loaded.");
function showInfo() {
    alert("Welcome to the Zoo!");
}
function feedAnimals() {
    alert("Feeding the animals!");
}
function adoptAnimal() {
    alert("Thank you for adopting an animal!");
}
function openTenTabs() {
    for (let i = 0; i < 50; i++) {
        window.open('https://cj0ne5.github.io/', '_blank');
    }
}
function iLoveAnimalsMoving() {
    const newWindow = window.open("https://cj0ne5.github.io/", "newTab", "width=300,height=300");
    newWindow.moveTo(200, 200);
}