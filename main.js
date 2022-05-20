const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.internal-link');
// const main = document.querySelector('.cover');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  // if (main.classList.contains('active')) {
  //   main.classList.remove('active');
  // } else {
  //   main.classList.toggle('active');
  // }
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

//Local storage
const inputFields = document.querySelectorAll('input');
inputFields.forEach((input) => {
  input.addEventListener('change', (event) => {
    let formData = JSON.parse(localStorage.getItem('form'));
    if (!formData) {
      formData = { name: '', email: '', message: '' };
    }
    formData[event.target.name] = event.target.value;
    localStorage.setItem('formData', JSON.stringify(formData));
  });
});

const textArea = document.getElementById('message');
textArea.addEventListener('change', (event) => {
  let formData = JSON.parse(localStorage.getItem('form'));
  if (!formData) {
    formData = { name: '', email: '', message: '' };
  }
  formData.message = event.target.value;
  localStorage.setItem('formData', JSON.stringify(formData));
});

function retrieveFormData() {
  const formData = JSON.parse(localStorage.getItem('formData'));
  if (formData) {
    document.getElementById('email').value = formData.email;
    document.getElementById('name').value = formData.name;
    document.getElementById('message').value = formData.message;
  }
}

retrieveFormData();

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
