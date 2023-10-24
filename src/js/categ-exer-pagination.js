import { fetchCategories } from "./api-service/categories-api";
import { createCategoryMarkup } from "./templates/categories-markup";

export async function catsPagination(category = 'Body parts', totalPages, currentPage) {

    const catsDiv = document.querySelector('.categories-wrapper')
    const middle = document.querySelector('button[data-page="middle"]')
    const next = document.querySelector('button[data-page="next"]')

    if (totalPages === 1) {
        middle.disabled = true;
        next.disabled = true;
    } else if (totalPages === 2) {
        next.disabled = true;
    } else {
        middle.disabled = false;
        next.disabled = false;
    }

    try {
        const resp = await fetchCategories(category, currentPage)
        catsDiv.innerHTML = createCategoryMarkup(resp.results)
    } catch {
        err => console.log(err);
    }
}
