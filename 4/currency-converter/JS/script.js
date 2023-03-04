console.log("Bardzo prosty ten kantorek ale mnie te funkcje pokonały. Siadałem do tego kilka razy aż to wymęczyłem ale bardziej na podstawie prac innych niż własnej twórczości");

let formElement = document.querySelector(".js-form");
let currencyElement = document.querySelector(".js-currency");
let amountElement = document.querySelector(".js-amount");
let resultElement = document.querySelector(".js-result");

let rateUSD = 4.2803;
let rateEUR = 4.7079;
let rateGBP = 5.2838;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let currency = currencyElement.value;
    let amount = +amountElement.value;

    switch (currency) {
        case "USD":
            result = amount / rateUSD;
            break;

        case "EUR":
            result = amount / rateEUR
            break;

        case "GBP":
            result = amount / rateGBP
            break;
    }
    resultElement.innerHTML = `${amount.toFixed(2)} PLN =  ${result.toFixed(2)} ${currency}`;
});