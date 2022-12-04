
'use strict';

let modalButton = document.querySelector(".modal__button");
let modal = document.querySelector(".modal");

modalButton.addEventListener("click", function () {
    modal.classList.add("fadein");
    modal.style.display = "flex";
    setTimeout(() => {
        modal.classList.remove("fadein");
    }, 1000)

})

let xButton = document.querySelector(".close__btn");
xButton.addEventListener("click", fadeAway);

let okButton = document.querySelector(".okay__btn");
okButton.addEventListener("click", fadeAway);

let cancelButton = document.querySelector(".cancel__btn");
cancelButton.addEventListener("click", fadeAway);

modal.addEventListener("click", fadeAway);

function fadeAway() {
    modal.classList.add("fadeout");
    setTimeout(() => {
        modal.style.display = "none";
        modal.classList.remove("fadeout");
    }, 1000);
}