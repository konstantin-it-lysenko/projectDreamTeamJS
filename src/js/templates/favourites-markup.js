function createMarkupExercises(arr) {
  return arr
    .map(
      ({ _id, name, burnedCalories, bodyPart, target }) =>
        `<li><div class="favor-exercises-card" id="${_id}">
      <div class="favor-exercises-head">
        <div class="favor-exercises-wrap">
          <div class="favor-workout"><p>Workout</p></div>
          <button class="favor-exercises-delbtn" type="button">
            <svg width="16" height="16">
              <use href="./img/sport-sprite.svg#icon-trash"></use>
            </svg>
          </button>
        </div>
        <button class="favor-exercises-startbtn" type="button">Start<svg width="16" height="16">
            <use href="./img/sport-sprite.svg#icon-arrow-up"></use>
          </svg></button>
      </div>
      <div class="favor-exercises-name">
        <div class="favor-exercises-icon">
          <svg width="18" height="20">
            <use href="./img/sport-sprite.svg#icon-running-stick"></use>
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

function createMarkupPagination(num) {
  let markup = '';
  if (num === 1) {
    markup = '';
  } else {
    for (let i = 1; i <= num; i += 1) {
      markup =
        markup +
        `<li class="pag-page">
          <button class="pag-btn" type="button" id="p-${i}">${i}</button>
        </li>`;
    }
  }
  return markup;
}

export { createMarkupExercises, createMarkupPagination };
