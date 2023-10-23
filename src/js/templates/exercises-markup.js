import svgSprite from '../../img/sport-sprite.svg';

export function createExercisesMarkup(data) {
	return `<ul class="exercises-list">${data.map(createMarkup).join('')}</ul>
	<ul class="exer-pagination-list"></ul>`;
}

function createMarkup({ rating, name, burnedCalories, bodyPart, target, _id }) {
	return `<li class="exercises-item" data-exercise-id="${_id}">
			<div class="exercises-header">
				<div class="exercises-meta-container">
					<p class="exercises-meta">WORKOUT</p>
					<p class="exercises-rating">
						${rating.toFixed(1)}
						<svg width="18" height="18" class="exercises-svg">
							<use href="${svgSprite}#icon-star"></use>
						</svg>
					</p>
				</div>
				<button type="button" class="exercises-btn" data-modal-exercise="open">
					Start
					<svg width="16" height="16" class="exercises-btn-svg">
						<use href="${svgSprite}#icon-arrow-up"></use>
					</svg>
				</button>
			</div>
			<div class="exercises-name-container">
				<span class="exercises-name-span">
				<svg width="20" height="20" class="exercises-name-svg">
					<use href="${svgSprite}#icon-running-stick"></use>
				</svg>
				</span>
				<h3 class="exercises-name">
					${name}
				</h3>
			</div>
			<div class="exercises-descr-container">
				<ul class="exercises-descr-list">
					<li class="exercises-descr-item">
						<span class="exercises-descr-span">Burned calories:</span>
						${burnedCalories} / 3 min
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
			<li class="exer-pagination-item">
				<button type="button" class="exer-pagination-btn active" data-id="1">${firstBtn}</button>
			</li>
			<li class="exer-pagination-item">
				<button type="button" class="exer-pagination-btn" data-id="2">${secondBtn}</button>
			</li>
			<li class="exer-pagination-item">
				<button type="button" class="exer-pagination-btn" data-id="3">${thirdBtn}</button>
			</li>
		`;
}
