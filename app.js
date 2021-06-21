const bigImg = document.querySelector(".full-img");
const smallImg = document.querySelectorAll(".gallery img");
const modal = document.querySelector(".modal");

smallImg.forEach(function(img) {
    img.addEventListener("click", function() {
        modal.classList.add("open");
        bigImg.classList.add("open");
    //Changing the images dynamically
        const originalQuality = img.getAttribute("alt");
        bigImg.src = `img/big/${originalQuality}.jpg`;
    });
});


modal.addEventListener("click", function(e) {
    if(e.target.classList.contains("modal")) {
        modal.classList.remove("open");
        fullImg.classList.remove("open");
    }
});