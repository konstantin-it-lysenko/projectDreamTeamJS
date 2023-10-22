export function createDevMarkup(developers) {
  return developers
    .map(developer => {
      const { name, linkedin, github } = developer;
      return `<li class="team-item">
              <svg class="more-icon" width="20" height="20">
                  <use href="./img/sport-sprite.svg#icon-more"></use>
              </svg>
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
