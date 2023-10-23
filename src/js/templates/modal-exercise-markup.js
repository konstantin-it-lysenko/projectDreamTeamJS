import svgSpritePath from '../../img/sport-sprite.svg';

export function createModalExerciseMarkup({
  gifUrl,
  name,
  rating,
  target,
  bodyPart,
  equipment,
  popularity,
  burnedCalories,
  description,
}) {
  return `<section class="modal modal-exercise">
  <div class="modal-exercise-container">
    <img
      src="${gifUrl}"
      alt="${name}"
      class="modal-exercise-img"
      width="360"
      height="360"
    />
    <div class="modal-exercise-info-container">
      <button
        type="button"
        class="modal-exercise-close-btn"
        data-modal-exercise="close"
      >
        <svg class="modal-exercise-close-icon">
          <use href="${svgSpritePath}#icon-cross"></use>
        </svg>
      </button>
      <h3 class="modal-exercise-title">${makeUpperCaseFirstLetter(name)}</h3>
      <div class="modal-exercise-rating-container">
        <p class="modal-exercise-rating-number">${rating}</p>
        <div class="modal-exercise-rating-stars" id="modal-exercise-rating-stars">
            <svg class="modal-exercise-rating-icon">
              <use href="${svgSpritePath}#icon-star"></use></svg>
            <svg class="modal-exercise-rating-icon">
              <use href="${svgSpritePath}#icon-star"></use></svg>
            <svg class="modal-exercise-rating-icon">
              <use href="${svgSpritePath}#icon-star"></use></svg>
            <svg class="modal-exercise-rating-icon">
              <use href="${svgSpritePath}#icon-star"></use></svg>
            <svg class="modal-exercise-rating-icon">
              <use href="${svgSpritePath}#icon-star"></use></svg>
        </div> 
      </div>
      <div class="modal-exercise-tag-container">
        <ul class="modal-exercise-tag-list">
          <li>
            <p class="modal-exercise-tag-key">Target</p>
            <p class="modal-exercise-tag-value">${makeUpperCaseFirstLetter(
              target
            )}</p>
          </li>
          <li>
            <p class="modal-exercise-tag-key">Body Part</p>
            <p class="modal-exercise-tag-value">${makeUpperCaseFirstLetter(
              bodyPart
            )}</p>
          </li>
          <li>
            <p class="modal-exercise-tag-key">Equipment</p>
            <p class="modal-exercise-tag-value">${makeUpperCaseFirstLetter(
              equipment
            )}</p>
          </li>
          <li>
            <p class="modal-exercise-tag-key">Popular</p>
            <p class="modal-exercise-tag-value">${popularity}</p>
          </li>
          <li>
            <p class="modal-exercise-tag-key">Burned Calories</p>
            <p class="modal-exercise-tag-value">${burnedCalories}</p>
          </li>
        </ul>
      </div>
      <p class="modal-exercise-description">${description}</p>
    </div>
  </div>
  <ul class="modal-exercise-btn-list">
    <li>
      <button type="button" class="modal-exercise-btn add-to-favorites-btn js-add-to-favorites-btn">
        Add to favorites
        <span>
          <svg class="modal-exercise-heart-icon js-modal-exercise-heart-icon">
            <use href="${svgSpritePath}#icon-heart"></use></svg
        ></span>
      </button>
    </li>
    <li>
      <button type="button" class="modal-exercise-btn give-rating-btn js-give-rating-btn">
        Give a rating
      </button>
    </li>
  </ul>
</section>
  `;
}

export function createAddToFavoritesMarkup() {
  return `
  Add to favorites
        <span>
          <svg class="modal-exercise-heart-icon js-modal-exercise-heart-icon">
            <use href="${svgSpritePath}#icon-heart"></use></svg
        ></span>`;
}

export function createRemoveFromFavoritesMarkup() {
  return `
  Remove from favorites
        <span>
          <svg class="modal-exercise-heart-icon js-modal-exercise-heart-icon modal-favorite-active-icon">
            <use href="${svgSpritePath}#icon-heart"></use></svg
        ></span>
  `;
}

function makeUpperCaseFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
