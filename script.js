let images = [];
let currentIndex = 0;

document.addEventListener("DOMContentLoaded", () => {

    const imgElements = document.querySelectorAll(".gallery-img");

    imgElements.forEach((img, index) => {
        images.push(img.src);

        img.addEventListener("click", () => {
            openLightbox(index);
        });
    });

});

// פתיחת תמונה
function openLightbox(index){
    currentIndex = index;
    document.getElementById("lightbox-img").src = images[index];
    document.getElementById("lightbox").style.display = "flex";
}

// סגירה
function closeLightbox(){
    document.getElementById("lightbox").style.display = "none";
}

// מעבר בין תמונות
function changeImage(direction){
    currentIndex += direction;

    if(currentIndex < 0){
        currentIndex = images.length - 1;
    }

    if(currentIndex >= images.length){
        currentIndex = 0;
    }

    document.getElementById("lightbox-img").src = images[currentIndex];
}
