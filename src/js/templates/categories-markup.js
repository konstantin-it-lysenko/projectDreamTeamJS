export function createCategoryMarkup(data) {
  return `<ul class="categories-list">${data.map(createMarkup).join('')}</ul>
	<ul class="cat-pagination-list"></ul>`;
}

function createMarkup({ filter, name, imgURL }) {
  return `<li class="categories-item" data-body-part='${name}'>
			<button type="button" class="categories-btn">
				<img src="${imgURL}" alt="${name}" class="categories-img">
				<div class="categories-info">
					<h3 class="category-title">${name}</h3>
					<p class="category-descr">${filter}</p>
				</div>
			</button>
		</li>`;
}
export function createPaginationBtnsMarkup(
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
