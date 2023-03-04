console.log("To jest moja pierwsza strona, która tworzyła się długo, z przerwami oraz wieloma próbami i zmianami. Miejscami może być trochę przekombinowane ale mam nadzieję że nie jest tak źle 😊");

let changeColorButton = document.querySelector("changeColorButton");
let body = document.querySelector(".body");
let nextColorName = document.querySelector(".nextColorName");
let changeBackground = document.querySelector(".changeBackground");


changeColorButton.addEvenListener("click", () => {
    body.classList.toggle("changeBackground");
nextColorName.classList.contains("changeBackground") ? "jasne" : "ciemne";
});
