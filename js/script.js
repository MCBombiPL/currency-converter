let selectElement = document.querySelector(".js-select");
let inputElement = document.querySelector(".js-input");
let convertingButton = document.querySelector(".js-convertingButton");
let resultElement = document.querySelector(".js-resultElement");

convertingButton.addEventListener("click", (event) => {
    event.preventDefault();

    let result;

    if (!inputElement.value) {
        return;
    }

    switch (selectElement.value) {
        case "EUR":
            result = inputElement.value / 4.79;
            break;

        case "USD":
            result = inputElement.value / 4.45;
            break;

        case "GBP":
            result = inputElement.value / 5.36;
            break;

        case "CZK":
            result = inputElement.value / 0.2;
            break;

        case "SEK":
            result = inputElement.value / 0.43;
            break;
    }

    resultElement.innerHTML = `<strong>${inputElement.value} PLN = ${result.toFixed(2)} ${selectElement.value}</strong>`;
});