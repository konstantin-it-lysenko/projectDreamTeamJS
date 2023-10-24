import { fetchCategories } from "./api-service/categories-api";
import { createCategoryMarkup } from "./templates/categories-markup";

export async function catsPagination(category = 'Body parts', totalPages, currentPage) {

    const catsDiv = document.querySelector('.categories-wrapper')
    const maxButtons = 3;

    // if (currentPage >= totalPages) {
    //     middle.disabled = true;
    //     next.disabled = true;
    // }

    try {
        const resp = await fetchCategories(category, currentPage)
        catsDiv.innerHTML = createCategoryMarkup(resp.results)
    } catch {
        err => console.log(err);
    }


    // const maxButtons = 3;

    // const paginationList = document.querySelector(".cat-pagination-list");
    // const paginationButtons = paginationList.querySelectorAll(".cat-pagination-btn");


    // function updatePagination(activePage) {
    //     if (activePage <= maxButtons) {
    //         for (let i = 0; i < maxButtons; i++) {
    //             paginationButtons[i].setAttribute("data-page", (i + 1).toString());
    //             paginationButtons[i].innerText = (i + 1).toString();
    //         }
    //     } else {
    //         for (let i = 0; i < maxButtons; i++) {
    //             paginationButtons[i].setAttribute("data-page", (activePage - maxButtons + i + 1).toString());
    //             paginationButtons[i].innerText = (activePage - maxButtons + i + 1).toString();
    //         }
    //     }
    // }

    // paginationButtons[maxButtons - 1].addEventListener("click", () => {
    //     const activePage = parseInt(paginationButtons[maxButtons - 1].getAttribute("data-page"));
    //     if (activePage < totalPages) {
    //         for (let i = 0; i < maxButtons; i++) {
    //             paginationButtons[i].setAttribute("data-page", (activePage + i).toString());
    //             paginationButtons[i].innerText = (activePage + i).toString();
    //         }
    //     }
    // });

    // paginationButtons[0].addEventListener("click", () => {
    //     const activePage = parseInt(paginationButtons[0].getAttribute("data-page"));
    //     if (activePage > 1) {
    //         updatePagination(activePage - 1);
    //     }
    // });

}
