console.log("To jest moja pierwsza strona, która tworzyła się długo, z przerwami oraz wieloma próbami i zmianami. Miejscami może być trochę przekombinowane ale mam nadzieję że nie jest tak źle 😊");

let button = document.querySelector(".button");
let body = document.querySelector(".body");
let changeColorName = document.querySelector(".changeColorName");

button.addEventListener("click", () => {
    body.classList.toggle("dark");
    changeColorName.innerText = body.classList.contains("dark") ?
        "jasny" : "ciemny";
});
