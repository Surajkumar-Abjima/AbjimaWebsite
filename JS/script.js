document.querySelector(".hamburger").addEventListener("click", function() {
    document.querySelector(".navs-items").classList.toggle("active");
});

let sentance = document.querySelector(".togglesentance");
let arrow = document.querySelector(".arrow");
let sentance1 = document.querySelector(".togglesentance1");
let arrow1 = document.querySelector(".arrow1");
let sentance2 = document.querySelector(".togglesentance2");
let arrow2 = document.querySelector(".arrow2");

function closeAll() {
    arrow.classList.remove("arrowShow");
    sentance.classList.remove("sentanceShow");
    arrow1.classList.remove("arrowShow1");
    sentance1.classList.remove("sentanceShow1");
    arrow2.classList.remove("arrowShow2");
    sentance2.classList.remove("sentanceShow2");
}

function handleToggle() {
    arrow.classList.toggle("arrowShow");
    sentance.classList.toggle("sentanceShow");
}

function handleToggle1() {
    arrow1.classList.toggle("arrowShow1");
    sentance1.classList.toggle("sentanceShow1");
}

function handleToggle2() {
    arrow2.classList.toggle("arrowShow2");
    sentance2.classList.toggle("sentanceShow2");
}
