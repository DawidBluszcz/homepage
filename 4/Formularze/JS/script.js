console.log("To jest moja pierwsza strona, która tworzyła się długo, z przerwami oraz wieloma próbami i zmianami. Miejscami może być trochę przekombinowane ale mam nadzieję że nie jest tak źle 😊");

let button = document.querySelector(".section__button");
let body = document.querySelector(".body");
let changeColorName = document.querySelector(".JS-changeColorName");

button.addEventListener("click", () => {
    body.classList.toggle("body--dark");
    changeColorName.innerText = body.classList.contains("body--dark") ?
        "jasny" : "ciemny";
});
