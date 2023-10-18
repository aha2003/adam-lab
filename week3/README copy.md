# week 3 lab report (Slideshow):

This week i created a slideshow for the gallery on the website. the method i used to approach the slideshow was a simple yet effective way 
to allow the user to go to the next and previous slides by clicking either the next or prev buttons. For starters i gave all the slides the mySlides class, i then changed the display property of all the slides to "none", then i created a variable called currentSlide to keep count of the current slide and i inititialized it with the value 1. I then used the function showSlide(currentSlide) to display the first slide.##

## showSlide function:

This function takes the value n as an argument and displays the corresponding slide , i start by selecting all the HTML elements with the class mySlides, the showSlide function then follows these steps:

1. condition 1: if the value of n is larger exceeds the number of slides, it resets currentSlide value to 1, this allows user to loop through the slides

2. condition 2: if the value of n is less than 1, currentSlide is set to the last slide, this allows user to loop through the slides

3. displaying slide: after determining what the currentSlide is, the function sets all the slides display property to "none", then right after the currentSlide display property is set to "block" which allows image to be displayed


## changeSlide Function:

This function is called when the user clicks on the next or previous button to go through slide, the function takes an argument n (next 1, prev -1) and updates the currentSlide variable by adding n to it, if n is 1 currentSlide is set to the next slide, if n is -1 currentSlide is set to the previous slide. after currentSlide is updated, showSlide function is called with the updated currentSlide value to display the appropriate slide.

## Event Listeners:

I added event listeners to the next and previous buttons, if next button is clicked the function changeSlide(1) is called, if the previous button is clicked changeSlide(-1) is called.

