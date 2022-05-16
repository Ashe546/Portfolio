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
