let mask = document.querySelector(".mask");

window.addEventListener("load", makesDisappear);



function makesDisappear () {
    mask.classList.add("hide");
    setTimeout(() => {mask.remove();
    }, 600);
}
