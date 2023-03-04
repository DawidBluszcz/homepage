console.log("Cześć!, to moja pierwsza strona - proszę o wyrozumiałość ;)");

let przycisk = document.querySelector(".przycisk");
let naglowek = document.querySelector(".naglowek");
let body = document.querySelector(".body");
let zmianaTła = document.querySelector(".zmianaTła");
let dark = document.querySelector("dark");
let button = document.querySelector(".button");

przycisk.addEventListener("click", () => {
    naglowek.remove();
});
button.addEventListener("click", () => {
    body.classList.toggle("dark");
zmianaTła.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";
})


