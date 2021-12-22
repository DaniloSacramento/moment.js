let DateEntrada = prompt("Digite a data de partida (formato DD/MM/YYYY")

let departureDate = moment(DateEntrada, "DD/MM/YYYY")

let today = moment()

let Diferenca = today - DateEntrada

let retornoData = prompt("Escolha como gostaria de exibir o tempo de partida\n1- Segundos\n2- Minutos\n3- Horas\n4- Dias")

if (retornoData == "1") {
    let segundos = Math.round(Diferenca / 1000)
    alert("Tempo de voo: " + segundos + " segundos")
} else if (retornoData == "2") {
    let minutos = Math.round(Diferenca / 1000 / 60)
    alert("Tempo de voo: " + minutos + " minutos")
} else if (retornoData == "3") {
    let horas = Math.round(Diferenca / 1000 / 3600)
    alert("Tempo de voo: " + horas + " horas")
} else if (retornoData == "4") {
    let dias = Math.round(Diferenca / 1000 / 3600 / 24)
    alert("Tempo de voo: " + dias + " horas")
} else {
    alert("Selecione uma opcao valida!")
}