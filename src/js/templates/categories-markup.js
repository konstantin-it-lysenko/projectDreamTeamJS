export default function createCategoryMarkup(data) {
  return data.map(createMerkup).join('');
}

function createMerkup({ filter, name, imgURL }) {
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
