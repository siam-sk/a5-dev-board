
const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "teal"];

document.getElementById("themeChanger-btn").addEventListener("click", function() {
    const randonColorIndex = Math.floor(Math.random() * colors.length);
    document.getElementById('bg-color').style.backgroundColor = colors[randonColorIndex];
});