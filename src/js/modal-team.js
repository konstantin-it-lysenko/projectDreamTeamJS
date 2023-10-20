const developers = [
  {
    name: 'Constantine Lysenko',
    linkedin: 'https://www.linkedin.com/in/constantine-it-lysenko/',
    github: 'https://github.com/konstantin-it-lysenko',
  },
  {
    name: 'Anastasiia Motsukh',
    linkedin: 'https://www.linkedin.com/in/anastasiia-motsukh-a5859b283/',
    github: 'https://github.com/Elostay',
  },
  {
    name: 'Denys Nalyvaiko',
    linkedin: 'https://www.linkedin.com/in/denys-nalyvaiko-1ba8ab283',
    github: 'https://github.com/Denys-Nalyvaiko',
  },
  {
    name: 'Dmytro Podorvan',
    linkedin:
      'https://www.linkedin.com/in/%D0%B4%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9-%D0%BF%D0%BE%D0%B4%D0%BE%D1%80%D0%B2%D0%B0%D0%BD-7898b0283/',
    github: 'https://github.com/DmytroPod',
  },
  {
    name: 'Iryna Slavinska',
    linkedin: 'https://www.linkedin.com/in/iryna-slavinska-7038b9283/',
    github: 'https://github.com/IrynaSlavinska',
  },
  {
    name: 'Ihor Pozhematkin',
    linkedin: '',
    github: 'https://github.com/IhorPozhematkin',
  },
  {
    name: 'Nadiia Paliichuk',
    linkedin: 'http://www.linkedin.com/in/nadiia-paliichuk-94497a285',
    github: 'https://github.com/Nadin2611',
  },
  {
    name: 'Serhii Havryliuk',
    linkedin: 'https://www.linkedin.com/in/serhii-havryliuk-b46650294/',
    github: 'https://github.com/Serhii-Ruhtik',
  },
  {
    name: 'Dmytro Chubenko',
    linkedin: 'https://www.linkedin.com/in/demon-demon-03b119297/',
    github: 'https://github.com/Dimch93',
  },
  {
    name: 'Anatolii Artiukhov',
    linkedin: 'https://github.com/ArtanFS',
    github: 'https://github.com/ArtanFS',
  },
  // {
  //   name: '',
  //   linkedin: '',
  //   github: '',
  // },
];

const teamModalOpenBtn = document.querySelector('.team-btn-open');
const teamModalCloseBtn = document.querySelector('.team-btn-close');
const teamModal = document.querySelector('.team-backdrop');
const teamList = document.querySelector('.team-list');

teamModalOpenBtn.addEventListener('click', onOpenClick);
teamModalCloseBtn.addEventListener('click', onCloseClick);

function onOpenClick() {
  teamModal.classList.remove('is-hidden');
}
//
function onCloseClick() {
  teamModal.classList.add('is-hidden');
}

teamList.insertAdjacentHTML('beforeend', createDevMarkup(developers));

function createDevMarkup(developers) {
  return developers
    .map(developer => {
      const { name, linkedin, github } = developer;
      return `<li class="team-item">
        <h3 class="team-name">${name}</h3>
        <ul class="team-soc-list">
          <li class="team-soc-item">
            <a href="${linkedin}"
              class="team-link" target="_blank" rel="noopener noreferrer" >
              <svg class="team-icon" width="28" height="28">
                <use href="./img/sport-sprite.svg#icon-linkedin"></use>
              </svg>
            </a>
          </li>
          <li class="team-soc-item">
            <a href="${github}" class="team-link" target="_blank" rel="noopener noreferrer" >
              <svg class="team-icon" width="28" height="28">
                <use href="./img/sport-sprite.svg#icon-github"></use>
              </svg>
            </a>
          </li>
        </ul>
      </li>`;
    })
    .join('');
}
