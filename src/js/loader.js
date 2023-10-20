let mask = document.querySelector(".mask");
console.log(mask);
window.addEventListener("load", makesDisappear);



function makesDisappear () {
    mask.classList.add("hide");
    setTimeout(() => {mask.remove();
    }, 600);
}

// let mask = document.querySelector(".mask");

// export function name(params) {

// }
// export function name(params) {
    
// }

// window.addEventListener("load", makesDisappear);

// function makesDisappear () {
//     mask.classList.add("hide");
//     setTimeout(() => {mask.remove();
//     }, 600);
// }
