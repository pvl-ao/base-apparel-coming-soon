'use strict';

const emailInput = document.querySelector('.email-input');
const errorIcon = document.querySelector('.error-icon');
const errorMessage = document.querySelector('.error-message');

emailInput.addEventListener('invalid', (e) => {
  e.preventDefault();
  errorIcon.style.display = 'block';
  errorMessage.style.display = 'block';
});
