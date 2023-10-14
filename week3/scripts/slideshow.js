// Initialize the current slide index to 1
let currentSlide = 1;
// Display the initial slide
showSlide(currentSlide);

// Function to change to the next or previous slide
function changeSlide(n) {
    // Update the current slide index by adding 'n' (positive or negative)
    showSlide(currentSlide += n);

}

// Function to display a specific slide
function showSlide(n) {
    // Get all elements with the class "mySlides" (presumed to be your slideshow slides)
    const slides = document.querySelectorAll(".mySlides");

    // If 'n' exceeds the number of slides, reset to the first slide
    if (n > slides.length) {
        currentSlide = 1;
    }
    
    // If 'n' is less than 1, go to the last slide
    if (n < 1) {
        currentSlide = slides.length;
    }

    // Hide all slides by setting their display property to "none"
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Display the current slide by setting its display property to "block"
    slides[currentSlide - 1].style.display = "block";

    console.log(currentSlide);
}

// Get the previous button element and add a click event listener to go to the previous slide
const prevButton = document.querySelector(".prev");
prevButton.addEventListener("click", () => {
    changeSlide(-1); // Call changeSlide with -1 to go to the previous slide
});

// Get the next button element and add a click event listener to go to the next slide
const nextButton = document.querySelector(".next");
nextButton.addEventListener("click", () => {
    changeSlide(1); // Call changeSlide with 1 to go to the next slide
});
