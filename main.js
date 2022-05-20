const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.internal-link');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-item').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

// Form Validation

const form = document.querySelector('.form');
form.addEventListener('submit', (event) => {
  const emailInput = form.email.value;
  if (emailInput.toLowerCase() !== emailInput) {
    event.preventDefault();
    const errorTag = document.querySelector('.error-message');
    errorTag.innerHTML = 'Error: Please insert email in lowercase!';
  } else {
    form.action = 'https://formspree.io/f/moqrpbja';
  }
});
