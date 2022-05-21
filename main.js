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

const section = document.getElementById('portfolio');
projects.forEach((project)=>{

const div = document.createElement('div');
  div.className = 'main-container';
  div.innerHTML = ` <div class="${project.cssStyle} card"> 
<div class="res-snapshoot">
 <img class="Snapshoot" src= ${project.image}> 
 </div>
  <div class="res-frame">
      <h1 class="title">${project.title}</h1> 
      <ul class="frame">
      <li class="detail-1">CANOPY</li>
      <li class="detail">BACK END DEV</li>
      <li class="detail">2015</li>
      </ul>
      <p class="detailp">${project.description}</p>
      <div class="tags"> 
      <button class="tag">html</button> 
      <button class="tag">css</button>
      <button class="tag">javascript</button>
      </div>
       <button type="button" value = ${projects.indexOf(project)} class="normal-button">${project.seeproject}</button> 
     </div>
</div>`;
  section.appendChild(div);
});

let modal = document.getElementById('myModal');
const btn = document.querySelectorAll('.normal-button');
let i = 0
for (i of btn) {
  i.addEventListener('click', function () {
    modal.style.display = 'block';
    let x = this.value
    modal.innerHTML =` <div class="popup-card">

<div class = "popup-close">
        <h1 class = "popup-h1">${projects[x].title}</h1>
        
</div>
        <div class = "popup-frame">
        <ul class="popup-frame">
          <li class="detail-1">CANOPY</li>
          <li class="detail">BACK END DEV</li>
          <li class="detail">2015</li>
        </ul>
        </div>
        <div class = "popup-img-card" style = "background-image: url('.${projects[x].image}'); max-height: 300px; "></div>
<div class = "popup-description">
<div class = "desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
when an unknown printer took a galley of type and scrambled it to make a type specimen book.
It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, </div>
<div class = "pop-frame">  
 <div class="tags">
<button class="tag">html</button>
<button class="tag">css</button>
<button class="tag">javascript</button>
</div>
<div class="tags popup-tag">
<button class="tag">github</button>
<button class="tag">ruby</button>
<button class="tag">Bootstraps</button>
</div>
<hr class = "popup-hr">
<div class = "popup-link-button">
<button class = "popup-button">See More <img src = "./image/pop.svg"></button>
<button class = "popup-button">See More <img src = "./image/Icon-GitHub.svg"></button>
</div>
</div>
      </div> `;
    });
}

window.onclick = function (event) {


    if (event.target === modal) {
    modal.style.display = 'none';
}
}