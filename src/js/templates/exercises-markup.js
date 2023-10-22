export function createExercisesMarkup(data) {
  return `<ul class="exercises-list">${data.map(createMarkup).join('')}</ul>
	<ul class="exer-pagination-list"></ul>`;
}

function createMarkup({ rating, name, burnedCalories, bodyPart, target }) {
  return `<li class="exercises-item">
			<div class="exercises-header">
				<div class="exercises-meta-container">
					<p class="exercises-meta">WORKOUT</p>
					<p class="exercises-rating">
						${rating}
						<svg width="18" height="18" class="exercises-svg">
							<use href="../img/sport-sprite.svg#icon-star"></use>
						</svg>
					</p>
				</div>
				<button type="button" class="exercises-btn" data-modal-exercise="open">
					Start
					<svg width="16" height="16" class="exercises-btn-svg">
						<use href="../img/sport-sprite.svg#icon-arrow-up"></use>
					</svg>
				</button>
			</div>
			<div class="exercises-name-container">
				<svg width="14" height="14" class="exercises-name-svg">
					<use href="../img/sport-sprite.svg#icon-running-stick"></use>
				</svg>
				<p class="exercises-name">
					${name}
				</p>
			</div>
			<div class="exercises-descr-container">
				<ul class="exercises-descr-list">
					<li class="exercises-descr-item">
						<span class="exercises-descr-span">Burned calories:</span>
						${burnedCalories}
					</li>
					<li class="exercises-descr-item">
						<span class="exercises-descr-span">Body part:</span>
						${bodyPart}
					</li>
					<li class="exercises-descr-item">
						<span class="exercises-descr-span">Target:</span>
						${target}
					</li>
				</ul>
			</div>
		</li>`;
}
export function createExercisesPaginationBtnsMarkup(
  firstBtn = 1,
  secondBtn = 2,
  thirdBtn = 3
) {
  return `
			<li class="cat-pagination-item">
				<button type="button" class="cat-pagination-btn" data-id="1">${firstBtn}</button>
			</li>
			<li class="cat-pagination-item">
				<button type="button" class="cat-pagination-btn" data-id="2">${secondBtn}</button>
			</li>
			<li class="cat-pagination-item">
				<button type="button" class="cat-pagination-btn" data-id="3">${thirdBtn}</button>
			</li>
		`;
}
