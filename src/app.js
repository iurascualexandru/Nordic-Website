const x = document.getElementById("mobile-nav__links");
function menuFunction() {
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}




function openNav() {
    if (window.innerWidth < 642) {
        document.getElementById("side-cart").style.width = "100%";
    }

    else { document.getElementById("side-cart").style.width = "400px"; }
    document.getElementById("myOverlay").style.display = "block";

}

function closeNav() {
    document.getElementById("side-cart").style.width = "0";
    document.getElementById("myOverlay").style.display = "none";
}



// Carousel 

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("slideshow-container__slides");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "flex";
}

// Second Carousel

// let slideIndex2 = 1;
// showSlides2(slideIndex);

// function plusSlides2(m) {
//     showSlides2(slideIndex2 += m);
// }

// function currentSlide2(m) {
//     showSlides2(slideIndex2 = m);
// }

// function showSlides2(m) {
//     const slides2 = document.getElementsByClassName("mySlides2");

//     if (m > slides2.length) { slideIndex2 = 1 }
//     if (m < 1) { slideIndex2 = slides2.length }
//     for (let i = 0; i < slides2.length; i++) {
//         slides2[i].style.display = "none";
//     }
//     slides2[slideIndex2 - 1].style.display = "flex";
// }