function createMarkupExercises(arr) {
  return arr
    .map(
      ({ name, burnedCalories, bodyPart, target }) =>
        `<li><div class="favor-exercises-card">
      <div class="favor-exercises-head">
        <div class="favor-workout"><p>Workout</p></div>
        <button type="button">
          <svg width="16" height="16">
            <use href="./img/sport-sprite.svg#icon-trash"></use>
          </svg>
        </button>
        <button type="button">Start</button>
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
          <span>Burned calories:</span>${burnedCalories} / 3 min
        </li>
        <li class="favor-exercises-item favor-exercises-body"><span>Body part:</span>${bodyPart}</li>
        <li class="favor-exercises-item favor-exercises-target"><span>Target:</span>${target}</li>
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
