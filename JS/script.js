

document.querySelector(".hamburger").addEventListener("click", function() {
    document.querySelector(".nav-items").classList.toggle("active");
});
let btn=document.querySelector("#toggleBtn")
let sentance=document.querySelector(".togglesentance")
btn.addEventListener("click",()=>{
    if(sentance.style.display=="none"){
        sentance.style.display="block"
    }
    else{
        sentance.style.display="none"
    }
})