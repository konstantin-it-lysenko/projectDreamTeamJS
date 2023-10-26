import svgSprite from '../../img/sport-sprite.svg';

function createMarkupExercises(arr) {
  return arr
    .map(
      ({ _id, name, burnedCalories, bodyPart, target }) =>
        `<li><div class="favor-exercises-card" data-id="${_id}">
      <div class="favor-exercises-head">
        <div class="favor-exercises-wrap">
          <div class="favor-workout"><p>Workout</p></div>
          <button class="favor-exercises-delbtn" type="button">
            <svg width="16" height="16">
              <use href="${svgSprite}#icon-trash"></use>
            </svg>
          </button>
        </div>
        <button class="favor-exercises-startbtn" data-modal-exercise="open" type="button">Start<svg width="16" height="16">
            <use href="${svgSprite}#icon-arrow-up"></use>
          </svg></button>
      </div>
      <div class="favor-exercises-name">
        <div class="favor-exercises-icon">
          <svg width="18" height="20">
            <use href="${svgSprite}#icon-running-stick"></use>
          </svg>
        </div>
        <h3>${name}</h3>
      </div>
      <ul class="favor-exercises-info">
        <li class="favor-exercises-item favor-exercises-calories">
          Burned calories:<span>${burnedCalories} / 3 min</span>
        </li>
        <li class="favor-exercises-item favor-exercises-body">Body part:<span class="favor-exercises-span">${bodyPart}</span></li>
        <li class="favor-exercises-item favor-exercises-target">Target:<span class="favor-exercises-span">${target}</span></li>
      </ul>
    </div></li>`
    )
    .join('');
}

function createMurkupNoitems() {
  const murkup = `<p class="favor-exercises-text">
    It appears that you haven't added any exercises to your favorites yet. To
    get started, you can add exercises that you like to your favorites for
    easier access in the future.
  </p>`;
  return murkup;
}

function createMarkupPagination(num, id) {
  let markup = '';
  if (num > 2) {
    let start = id - 1;
    start < 0 ? (start = 0) : start;
    start === num - 2 ? (start = num - 3) : start;
    for (let i = start + 1; i < start + 4; i += 1) {
      markup =
        markup +
        `<li class="pag-page">
          <button class="pag-btn" type="button" data-id="${
            i - 1
          }" id="p-${i}">${i}</button>
        </li>`;
    }
  } else if (num > 1) {
    for (let i = 1; i < 3; i += 1) {
      markup =
        markup +
        `<li class="pag-page">
          <button class="pag-btn" type="button" data-id="${
            i - 1
          }" id="p-${i}">${i}</button>
        </li>`;
    }
  }
  return markup;
}

export { createMarkupExercises, createMarkupPagination, createMurkupNoitems };
