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

// popup

const projects = [
  {
    title: 'Tonic',
    roles: { company: 'Canopy', position: ['Back End Dev', '2015'] },
    image: '/image/Snapshoot-Portfolio.png',
    alt: 'Canopy project screenshot',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: ['html', 'css', 'javascript'],
    skillsModal: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
    livelink: { link: 'http://felix45.github.io/portfolio', text: 'See live' },
    seesource: { link: 'http://github.com/felix45/portfolio', text: 'See Source' },
    seeproject: 'See Project',
    htmlClass: { article: ['grid-item', 'card'], cardImage: ['card-image'], cardDescription: ['card-description']},
    cssStyle: '',
  },
  {
    title: 'Multi-Post Stories',
    roles: { company: 'Facebook', position: ['Full Stack Dev', '2015'] },
    image: '/image/Snapshoot-Portfolio(3).png',
    alt: 'Multi-Post stories project screenshot',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    skills: ['html', 'Ruby on rails', 'css', 'javascript'],
    skillsModal: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
    livelink: { link: 'https://felix45.github.io/portfolio', text: 'See live' },
    seesource: { link: 'https://github.com/felix45/portfolio', text: 'See Source' },
    seeproject: 'See Project',
    htmlClass: { article: ['grid-item', 'card', 'hide-ruby'], cardImage: ['card-image', 'flex-item-2'], cardDescription: ['card-description', 'flex-item-1']},
    cssStyle: 'card-l',
  },
  {
    title: 'Facebook 360',
    roles: { company: 'Facebook', position: ['Full Stack Dev', '2015'] },
    image: '/image/Snapshoot-Portfolio(4).png',
    alt: 'Facebook 360 project screenshot',
    description: 'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    skills: ['html', 'Ruby on rails', 'css', 'javascript'],
    skillsModal: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
    livelink: { link: 'https://felix45.github.io/portfolio', text: 'See live' },
    seesource: { link: 'https://github.com/felix45/portfolio', text: 'See Source' },
    seeproject: 'See Project',
    htmlClass: { article: ['grid-item', 'card', 'flex-item-2', 'hide-ruby'], cardImage: ['card-image'], cardDescription: ['card-description']},
    cssStyle: '',
  },
  {
    title: 'Uber Navigation',
    roles: { company: 'Uber', position: ['Lead Developer', '2018'] },
    image: '/image/Snapshoot-Portfolio(5).png',
    alt: 'Uber Navigation project screenshot',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car..',
    skills: ['html', 'Ruby on rails', 'css', 'javascript'],
    skillsModal: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
    livelink: { link: 'https://felix45.github.io/portfolio', text: 'See live' },
    seesource: { link: 'http://github.com/felix45/portfolio', text: 'See Source' },
    seeproject: 'See Project',
    htmlClass: { article: ['grid-item', 'card', 'flex-item-3', 'flex-item-last', 'hide-ruby'], cardImage: ['card-image', 'flex-item-2'], cardDescription: ['card-description', 'flex-item-1']},
    cssStyle: 'card-l',
  },
];
