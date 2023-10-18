// Form elements
const form = document.getElementById('registrationForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

// Error elements
const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

// Event listeners for real-time validation
username.addEventListener('blur', validateUsername);
email.addEventListener('blur', validateEmail);
password.addEventListener('blur', validatePassword);
confirmPassword.addEventListener('blur', validateConfirmPassword);

form.addEventListener('submit', function (e) {
  if (
    !validateUsername() ||
    !validateEmail() ||
    !validatePassword() ||
    !validateConfirmPassword()
  ) {
    e.preventDefault(); 
  }
  if (password.value.trim() !== confirmPassword.value.trim()) {
    showError(confirmPasswordError, "Passwords don't match");
    e.preventDefault(); 
  }
});

function validateUsername() {
  const usernameValue = username.value.trim();
  if (usernameValue === '') {
    showError(usernameError, 'Username is required');
    username.parentElement.classList.remove('success'); 
    username.parentElement.classList.add('error'); 
    return false;
  } else {
    showSuccess(usernameError);
    username.parentElement.classList.remove('error');
    username.parentElement.classList.add('success');
    return true;
  }
}

function validateEmail() {
  const emailValue = email.value.trim();
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (emailValue === '') {
    showError(emailError, 'Email is required');
    email.parentElement.classList.remove('success'); 
    email.parentElement.classList.add('error'); 
    return false;
  } else if (!emailPattern.test(emailValue)) {
    showError(emailError, 'Enter a valid email address');
    email.parentElement.classList.remove('success'); 
    email.parentElement.classList.add('error'); 
    return false;
  } else {
    showSuccess(emailError);
    email.parentElement.classList.remove('error'); 
    email.parentElement.classList.add('success'); 
    return true;
  }
}

function validatePassword() {
  const passwordValue = password.value.trim();
  if (passwordValue === '') {
    showError(passwordError, 'Password is required');
    password.parentElement.classList.remove('success'); 
    password.parentElement.classList.add('error'); 
    return false;
  } else if (passwordValue.length < 8) {
    showError(passwordError, 'Password must be at least 8 characters');
    password.parentElement.classList.remove('success'); 
    password.parentElement.classList.add('error'); 
    return false;
  } else {
    showSuccess(passwordError);
    password.parentElement.classList.remove('error'); 
    password.parentElement.classList.add('success'); 
    return true;
  }
}

function validateConfirmPassword() {
  const confirmPasswordValue = confirmPassword.value.trim();
  if (confirmPasswordValue === '') {
    showError(confirmPasswordError, 'Confirm Password is required');
    confirmPassword.parentElement.classList.remove('success'); 
    confirmPassword.parentElement.classList.add('error'); 
    return false;
  } else if (confirmPasswordValue !== password.value.trim()) {
    showError(confirmPasswordError, "Passwords don't match");
    confirmPassword.parentElement.classList.remove('success'); 
    confirmPassword.parentElement.classList.add('error'); 
    return false;
  } else {
    showSuccess(confirmPasswordError);
    confirmPassword.parentElement.classList.remove('error'); 
    confirmPassword.parentElement.classList.add('success'); 
    return true;
  }
}


function showError(element, message) {
  element.textContent = message;
  element.classList.add('error');
}

function showSuccess(element) {
  element.textContent = '';
  element.classList.remove('error');
}
