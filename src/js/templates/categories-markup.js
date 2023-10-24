export function createCategoryMarkup(data) {
	return `<ul class="categories-list">${data.map(createMarkup).join('')}</ul>`;
}

function createMarkup({ filter, name, imgURL }) {
	return `<li class="categories-item" data-body-part='${name}'>
			<button type="button" class="categories-btn categories-img"  alt="${name}" style='background: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), url(${imgURL}), lightgray -69.24px -3px / 129.788% 103.306% no-repeat;
background-size: cover;
	background-position: center;'
				
				<div class="categories-info">
					<h3 class="category-title">${name}</h3>
					<p class="category-descr">${filter}</p>
				</div>
			</button>
		</li>`;
}
