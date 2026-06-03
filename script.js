let images = [];
let currentIndex = 0;

function initGallery(){
    const imgElements = document.querySelectorAll(".gallery-img");

    imgElements.forEach((img, index) => {
        images.push(img.src);

        img.addEventListener("click", () => {
            openLightbox(index);
        });
    });
}

function openLightbox(index){
    currentIndex = index;
    document.getElementById("lightbox-img").src = images[index];
    document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox(){
    document.getElementById("lightbox").style.display = "none";
}

// 🔥 חשוב: חייב להיות גלובלי
window.changeImage = function(direction){
    currentIndex += direction;

    if(currentIndex < 0){
        currentIndex = images.length - 1;
    }

    if(currentIndex >= images.length){
        currentIndex = 0;
    }

    document.getElementById("lightbox-img").src = images[currentIndex];
}

document.addEventListener("DOMContentLoaded", initGallery);
