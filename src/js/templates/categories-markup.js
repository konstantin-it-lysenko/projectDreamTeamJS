export function createCategoryMarkup(data) {
	return data.map(createMarkup).join('');
}

function createMarkup({ filter, name, imgURL }) {
	return `<li class="categories-item">
			<button type="button" class="categories-btn">
				<img src="${imgURL}" alt="${name}" class="categories-img">
				<div class="categories-info">
					<h3 class="category-title">${name}</h3>
					<p class="category-descr">${filter}</p>
				</div>
			</button>
		</li>`;
}
export function createPaginationBtnsMarkup(firstBtn = 1, secondBtn = 2, thirdBtn = 3) {

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
		`
}