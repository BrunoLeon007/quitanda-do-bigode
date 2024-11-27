const inicioPrograma = Number(prompt(`
         ===========Bem-Vindo==============
               O que deseja comprar?
            =============================
               Selecione uma opção
            _____________________________
    [1] - Banana
    [2] - Maçã
    [3] - Manga
    [4] - Laranja
    [5] - Limão
    
    `))

function comprarBanana() {
    var resultado = 0
    alert("Preço da banana é R$1,30 a unidade, a partir de 12 unidades o preço sai a R$1,00")

    var qtdBanana = Number(prompt("Quantas bananas deseja comprar?"))
    if (qtdBanana >= 12) {
        resultado = qtdBanana * 1
        alert(`Voce comprou ${qtdBanana} bananas e saiu por ${resultado}`)
    } else {
        resultado = qtdBanana * 1.30
        alert(`voce comprou ${qtdBanana}bananas e sau por ${resultado.toLocaleString(`pt-br`, {
            style: `currency`,
            currency: `BRL`,
        })}`)
    }
}

function comprarMaca() {
    var resultado = 0
    alert("O KG da maçã é R$8,55 a partir de 2KG sai por R$6,99")

    var qtdMaca = Number(prompt("Quantos kilos de Maçã deseja comprar?"))
    if (qtdMaca >= 2) {
        resultado = qtdMaca * 6.99
        alert(`Voce comprou ${qtdMaca} Maçãs e saiu por ${resultado}`)
    } else {
        resultado = qtdMaca * 8.55
        alert(`voce comprou ${qtdMaca} Maçãs e sau por ${resultado.toLocaleString(`pt-br`, {
            style: `currency`,
            currency: `BRL`,
        })}`)
    }
}


function comprarManga() {
   

    var resultado = 0
    alert("O KG da manga Palmer é R$5,49 o KG da manga Rosa R$10,00 e o KG da manga Tommy R$2,99")

    var qtdManga = Number(prompt("Qual tipo de  Manga deseja comprar?"))

    switch (inicioPrograma) {

        case 1:
            alert("Manga Palmer")
        case 2:
            alert("Manga Rosa")
        case 3:
            alert("Manga Tommy")
    }

    if (qtPalmer = 5.49, qtdRosa == 10, qtdTommy = 2,99) {
        resultado = qtPalmer = 5.49, qtdRosa == 10, qtdTommy = 2,99
        alert(`Voce comprou ${qtdManga} Manga e saiu por ${resultado}`)
    } else {
        resultado = qtdManga * 8.55
        alert(`voce comprou ${qtdManga} Manga e sai por ${resultado.toLocaleString(`pt-br`, {
            style: `currency`,
            currency: `BRL`,
        })}`)
    }
}


switch (inicioPrograma) {
    case 1:
        comprarBanana()


        break;
    case 2:
        comprarMaca()

        break;
    case 3:
        comprarManga()
        break;
    case 4:
        ("Laranja")
        break;
    case 5:
        ("Limão")
        break;
    default:
        alert("Não existe esta opção!")

}