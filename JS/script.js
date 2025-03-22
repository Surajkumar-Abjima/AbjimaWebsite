window.addEventListener("load", function () {
    document.body.classList.add("loaded"); // Triggers the animation
});

document.querySelector(".hamburger").addEventListener("click", function() {
    document.querySelector(".nav-items").classList.toggle("active");
});