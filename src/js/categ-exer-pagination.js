import { fetchCategories } from "./api-service/categories-api";
import { fetchExercises } from "./api-service/exercises-api";
import { createCategoryMarkup } from "./templates/categories-markup";
import { createExercisesMarkup } from "./templates/exercises-markup";

export async function catsPagination(categoryName = 'Body parts', totalPages, currentPage) {

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
        const resp = await fetchCategories(categoryName, currentPage)
        catsDiv.innerHTML = createCategoryMarkup(resp.results)
    } catch {
        err => console.log(err);
    }
}

export async function exersPagination(categoryName, currentExercise, totalPages, currentPage) {

    const catsDiv = document.querySelector('.categories-wrapper')
    const middle = document.querySelector('button[data-exer="middle"]')
    const next = document.querySelector('button[data-exer="next"]')

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
        const resp = await fetchExercises(categoryName, currentExercise, currentPage)
        catsDiv.innerHTML = createExercisesMarkup(resp.results)
    } catch {
        err => console.log(err);
    }
}

export function updatePaginationState(arrOfBtns, page) {
    arrOfBtns.forEach(btn => {
        btn.classList.remove('active');
    });

    [...arrOfBtns].forEach(btn => {
        if (btn.innerHTML === page) {
            btn.classList.add('active');
        }
    })

    // currentActiveBtn.classList.add('active');

    // const currentActiveBtn = [...arrOfBtns].find(btn => {
    //     btn.innerHTML === page
    // })

    // currentActiveBtn.classList.add('active');
}