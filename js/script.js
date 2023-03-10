{
    const calculateResult = () => {

        const selectElement = document.querySelector(".js-select");
        const inputElement = document.querySelector(".js-input");

        if (!inputElement.value) {
            return;
        }

        switch (selectElement.value) {
            case "EUR":
                return inputElement.value / 4.79;

            case "USD":
                return inputElement.value / 4.45;

            case "GBP":
                return inputElement.value / 5.36;


            case "CZK":
                return inputElement.value / 0.2;

            case "SEK":
                return inputElement.value / 0.43;
        }
    }

    const updateResultText = () => {
        const resultElement = document.querySelector(".js-resultElement");
        const selectElement = document.querySelector(".js-select");
        const inputElement = document.querySelector(".js-input");

        resultElement.innerHTML = `<strong>${inputElement.value} PLN = ${calculateResult().toFixed(2)} ${selectElement.value}</strong>`;
    }

    const showResult = () => {

        const convertingButton = document.querySelector(".js-convertingButton");

        convertingButton.addEventListener("click", (event) => {
            event.preventDefault();

            updateResultText();
        });
    }
    showResult();
}