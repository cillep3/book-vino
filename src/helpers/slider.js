let slideIndex = 0;
//add the global timer variable
let timer;
let slides, dots;
let i; 

// stopTimer() stopper funktionen
export const stopTimer = () => {
    clearTimeout(timer)
}

// Starter showSlides() funktionen
export const slideShowStart = () => {
    showSlides();
}

// Funktion der kalder på slideIndex og regulerer, om slideIndex skal plus eller minus med én, når brugeren klikker på vores prikker eller pile
export const plusSlides = (position) => {
    clearTimeout(timer);
    slideIndex += position;
    if (slideIndex > slides.length) { slideIndex = 1 }
    else if (slideIndex < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    //create a new timer
    timer = setTimeout(showSlides, 4000);
}

// Funktion der kalder på slideIndex og finder den korrekte slide, som brugeren skal befinde sig på
export const currentSlide = (index) => {
    clearTimeout(timer);
    if (index > slides.length) { index = 1 }
    else if (index < 1) { index = slides.length }
    //set the slideIndex with the index of the function
    slideIndex = index;
    for ( i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for ( i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[index - 1].style.display = "block";
    dots[index - 1].className += " active";
    //create a new timer
    timer = setTimeout(showSlides, 4000);
}

// Motoren til slider-funktionen
function showSlides(n) {

    clearTimeout(timer);
    slides = document.getElementsByClassName("slideshow_mySlides");
    dots = document.getElementsByClassName("slideshow_dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    //put the timeout in the timer variable
    timer = setTimeout(showSlides, 4000); // Change image every 8 seconds
}



