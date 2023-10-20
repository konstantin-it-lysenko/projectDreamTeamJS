// Функція для відображення лоадера
export function showLoader() {
    const loader = document.querySelector('div');
    loader.classList.replace("hide", "mask")
}

// Функція для приховування лоадера
export function hideLoader() {
    const loader = document.querySelector('div');
    loader.classList.replace("mask", "hide")
}
showLoader();
// Викликати функцію showLoader при завантаженні сторінки
window.addEventListener('load', () => {
    hideLoader(); // Приховуємо лоадер, оскільки сторінка вже завантажена
});
