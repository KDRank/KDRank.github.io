//Open and close the contact form
function openForm () {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

//SLIDESHOW FUNCTIONS
//First image in slideshow when page loads
var slideIndex = 1;
showSlides(slideIndex);

//Changes slide by arrow clicked
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//Changes slide when dots are clicked
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    //Takes elements with class "mySlides" and stores them in variable array "slides"
    var slides = document.getElementsByClassName("mySlides");
    //Tapes all elements with class "dot" and stores them in variable array "dots"
    var dots = document.getElementsByClassName("dot");
    //If n is greater than length of array 'slides', slideIndex set to 1
    if (n > slides.length) {slideIndex = 1};
    //If n is less than 1, slideIndex is set to length of array 'slides'
    if (n < 1) {slideIndex = slides.length};
    //'for' loop takes each array item in 'slides' and sets display to 'none'
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    //'for' loop takes each array item in 'dots' and removes 'active' to remove active styling
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    //displays image in slideshow
    slides[slideIndex -1].style.display = "block";
    //adds active styling to dot associated with image
    dots[slideIndex -1].className += " active";
}

//Creates listener to close contact form when clicked away from
document.addEventListener("click", function(event) {
    //States that if click happens on cancel button OR anywhere outside of contact form, AND not within any element with contact class than call closeForm()
    if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".Pop_Up_Button") && !event.target.closest(".contact")){
        closeForm()
    }
}, false )