# week 3 lab report:


## Slideshow
This week i created a slideshow for the gallery on the website. the method i used to approach the slideshow was a simple yet effective way 
to allow the user to go to the next and previous slides by clicking either the next or prev buttons. For starters i gave all the slides the mySlides class, i then changed the display property of all the slides to "none", then i created a variable called currentSlide to keep count of the current slide and i inititialized it with the value 1. I then used the function showSlide(currentSlide) to display the first slide.##

### showSlide function:

This function takes the value n as an argument and displays the corresponding slide , i start by selecting all the HTML elements with the class mySlides, the showSlide function then follows these steps:

1. condition 1: if the value of n is larger exceeds the number of slides, it resets currentSlide value to 1, this allows user to loop through the slides

2. condition 2: if the value of n is less than 1, currentSlide is set to the last slide, this allows user to loop through the slides

3. displaying slide: after determining what the currentSlide is, the function sets all the slides display property to "none", then right after the currentSlide display property is set to "block" which allows image to be displayed


### changeSlide Function:

This function is called when the user clicks on the next or previous button to go through slide, the function takes an argument n (next 1, prev -1) and updates the currentSlide variable by adding n to it, if n is 1 currentSlide is set to the next slide, if n is -1 currentSlide is set to the previous slide. after currentSlide is updated, showSlide function is called with the updated currentSlide value to display the appropriate slide.

### Event Listeners:

I added event listeners to the next and previous buttons, if next button is clicked the function changeSlide(1) is called, if the previous button is clicked changeSlide(-1) is called.

## Registration Form

### Setting Up the Form and Error Elements:

I began by identifying the various elements in the HTML form that I needed to work with. These included the form itself and the input fields for the username, email, password, and password confirmation. To make it easier to interact with these elements, I used the getElementById method to get references to them. I also grabbed references to associated error elements, such as usernameError and emailError.

### Adding Real-time Validation with Event Listeners:

Next, I wanted to provide users with real-time feedback as they filled out the form. To do this, I set up event listeners on the input fields, specifically listening for the "blur" event. When a user clicks away from an input field, this event triggers. I made sure these event listeners called specific validation functions, one for each input field. This approach allowed me to validate the data as the user interacted with the form.

### Handling Form Submission:

Of course, I also needed to handle form submission. For that, I set up an event listener for the form's "submit" event. This listener plays a critical role in ensuring that the form is not submitted if any of the validation functions return false. Additionally, it checks whether the password and password confirmation fields match, displaying an error message if they don't.

### Validation Functions for Each Field:

I created separate validation functions for each input field. For instance, there's validateUsername, validateEmail, validatePassword, and validateConfirmPassword. Each of these functions follows a similar pattern:

They trim any extra spaces from the user's input.
If the input is empty, they display an error message using the associated error element and add the "error" class to the input field's parent container. The function returns false to indicate an error.
If the input isn't empty and passes further checks (like valid email format, minimum password length, or password confirmation match), the function displays a success message using the associated error element and adds the "success" class. It returns true to indicate success.
Error and Success Functions:

To manage the display of error messages, I included two utility functions: showError and showSuccess. showError sets an error message and adds the "error" class to an element, while showSuccess clears the error message and removes the "error" class.

this approach basically allowed me to create a form validation system using JavaScript. It ensures that users receive immediate feedback as they complete the form, checking for empty fields, valid email format, sufficient password length, and matching passwords. If any issues arise, it displays an error message and prevents form submission. When everything checks out, it shows a success message.
