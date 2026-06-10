// Cotação das moedas
const dolar = 5.19
const euro = 6
const libra = 6.95

// Obtendo os elementos do formulário
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

// Manipulando o input "amount" para receber somente números
amount.addEventListener("input", () => {

    const Regex = /\D+/g
    amount.value = amount.value.replace(Regex, "")
})

// Capturando o evento de submit do formulário
form.onsubmit = (event) => {
    event.preventDefault()

    switch (currency.value){
        case "USD":
            Convert(amount.value, dolar, "US$")
            break
        case "EUR":
            Convert(amount.value, euro, "€")
            break
        case "GBP":
            Convert(amount.value, libra, "£")
            break
    }
}

// Função para converter a moeda
function Convert (amount, price, symbol){
    try {
        // Atualizando o conteudo da cotação da moeda
        description.textContent = `${symbol} 1 = ${formatBRL(price)}`

        // Calculando e exibindo o resultado total
        let total = amount * price
        result.textContent = `${formatBRL(total).replace("R$", "")} Reais`

        // Aplica a classe que habilita a visualização do footer para ver o resultado
        footer.classList.add("show-result")
    } catch (error) {
        console.log(error)
        // Remove a classe do footer para esconder
        footer.classList.remove("show-result")
        alert("Não foi possível converter!")
    }
}

// Função para formatar o valor numério em moeda (reais)
function formatBRL(value) {
    // Primeiro converte o valor em número e depois usa o toLocaleString para converter para moeda
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })
}