export function createModalExerciseMarkup() {
  return `<section class="modal modal-exercise">
  <div class="modal-exercise-container">
    <img
      src="https://www.sony.eu/alphauniverse/assets/resized/2020/11/petar-sabol-sony-alpha-7RIII-two-butterflies-on-a-plant-stem-360x360-1_square_360x360.jpg"
      alt="test image"
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
          <use href="../img/sport-sprite.svg#icon-cross"></use>
        </svg>
      </button>
      <h3 class="modal-exercise-title">Air bike</h3>
      <div class="modal-exercise-rating-container">
        <p class="modal-exercise-rating-number">4.0</p>
      </div>
      <div class="modal-exercise-tag-container">
        <ul class="modal-exercise-tag-list">
          <li>
            <p class="modal-exercise-tag-key">Target</p>
            <p class="modal-exercise-tag-value">Abs</p>
          </li>
          <li>
            <p class="modal-exercise-tag-key">Body Part</p>
            <p class="modal-exercise-tag-value">Waist</p>
          </li>
          <li>
            <p class="modal-exercise-tag-key">Equipment</p>
            <p class="modal-exercise-tag-value">Body weight</p>
          </li>
          <li>
            <p class="modal-exercise-tag-key">Popular</p>
            <p class="modal-exercise-tag-value">150</p>
          </li>
          <li>
            <p class="modal-exercise-tag-key">Burned Calories</p>
            <p class="modal-exercise-tag-value">323/3 min</p>
          </li>
        </ul>
      </div>
      <p class="modal-exercise-description">
        This refers to your core muscles, which include the rectus abdominis,
        obliques, and transverse abdominis. They're essential for maintaining
        posture, stability, and generating force in many movements. Exercises
        that target the abs include crunches, leg raises, and planks.
      </p>
    </div>
  </div>
  <ul class="modal-exercise-btn-list">
    <li>
      <button type="button" class="modal-exercise-btn add-to-favorites-btn">
        Add to favorites
        <span>
          <svg class="modal-exercise-heart-icon">
            <use href="../img/sport-sprite.svg#icon-heart"></use></svg
        ></span>
      </button>
    </li>
    <li>
      <button type="button" class="modal-exercise-btn give-rating-btn">
        Give a rating
      </button>
    </li>
  </ul>
</section>
  `;
}
