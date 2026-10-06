const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")           // moeda FINAL (para)
const currencyFirstSelect = document.querySelector(".currency-first-select") // moeda INICIAL (de)

function convertValues(){
    const inputCurrencyValue = Number (document.querySelector(".input-currency").value)
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

const dolarToday = 5.2
const euroToday = 6.2
const libraToday = 7.2
const bitcoinToday = 200000

let valueInReal = 0

    if (currencyFirstSelect.value == "real") {
        valueInReal = inputCurrencyValue
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }

   if (currencyFirstSelect.value == "dolar") {
        valueInReal = inputCurrencyValue * dolarToday
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)

    }

  if (currencyFirstSelect.value == "euro") {
        valueInReal = inputCurrencyValue * euroToday
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }   

   if (currencyFirstSelect.value == "libra") {
        valueInReal = inputCurrencyValue * libraToday
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    }

   if (currencyFirstSelect.value == "bitcoin") {
        valueInReal = inputCurrencyValue * bitcoinToday
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",
            minimumFractionDigits: 8
        }).format(inputCurrencyValue)
    }   


     // --- Bloco 2: reais -> moeda final ---
    if (currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valueInReal)
    }

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valueInReal / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valueInReal / euroToday)
    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(valueInReal / libraToday)
    }

    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",
            minimumFractionDigits: 8
        }).format(valueInReal / bitcoinToday)
    }
}


// ===== 3. Troca de nome e imagem =====
function changeCurrency() {
    const firstCurrencyName = document.getElementById("first-currency-name")
    const firstCurrencyImage = document.querySelector(".currency-img-to-convert")
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    // --- Lado INICIAL ---
    if (currencyFirstSelect.value == "real") {
        firstCurrencyName.innerHTML = "Real brasileiro"
        firstCurrencyImage.src = "./assets/brasil.png"
    }

    if (currencyFirstSelect.value == "dolar") {
        firstCurrencyName.innerHTML = "Dólar americano"
        firstCurrencyImage.src = "./assets/estados-unidos.png"
    }

    if (currencyFirstSelect.value == "euro") {
        firstCurrencyName.innerHTML = "Euro"
        firstCurrencyImage.src = "./assets/euro.png"
    }

    if (currencyFirstSelect.value == "libra") {
        firstCurrencyName.innerHTML = "Libra Esterlina"
        firstCurrencyImage.src = "./assets/libra.png"
    }

    if (currencyFirstSelect.value == "bitcoin") {
        firstCurrencyName.innerHTML = "Bitcoin"
        firstCurrencyImage.src = "./assets/bitcoin.png"
    }

    // --- Lado FINAL ---
    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real brasileiro"
        currencyImage.src = "./assets/brasil.png"
    }

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/estados-unidos.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra Esterlina"
        currencyImage.src = "./assets/libra.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }

   convertValues()
}

// ===== 4. Ouvintes de eventos =====
currencySelect.addEventListener("change", changeCurrency)
currencyFirstSelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)