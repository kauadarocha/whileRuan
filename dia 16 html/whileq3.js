// Você é um colecionador de video games e resolveu ir a uma loja para
// comprar alguns jogos raros. Porém, você tem apenas R$2000 para gastar.
// Faça um programa que pergunte o nome do jogo e o valor, repetidamente.
// Caso o valor ultrapasse R$2000, encerrar (desconsiderando o último jogo).
// Extra: Mostrar na tela o total gasto em reais nos jogos, a quantidade de
// jogos, o mais caro e o mais barato.

let saldo = 2000
let totalGasto = 0
let quantidadeJogos = 0
let precoMaior = 0
let precoMenor = 2001
let nomeMaior
let nomeMenor

while(saldo > 0){
    // Pedir ao usuário o nome e o valor do jogo
    let nomeAtual = prompt('Qual o nome do jogo ?')
    let valorAtual = Number(prompt(`Qual o valor do ${nomeAtual} ?`))
    // Descontar o valor do jogo do orçamento
    saldo -= valorAtual
    // Verificar  se o orçamento está disponível, para não fazer a soma
    if(saldo >= 0){
        quantidadeJogos++
        totalGasto += valorAtual
        // Verificar maoir
        if(valorAtual > precoMaior){
            precoMaior = valorAtual
            nomeMaior = nomeAtual
        }
        // Verificar menor
        if(valorAtual < precoMenor){
            precoMenor = valorAtual
            nomeMenor = nomeAtual
        }
    }
    else{
        alert(`O jogo ${nomeAtual} ultrapassou o orçamento e não foi incluido na sua compra`)
    }
}
alert(`o total gasto foi R$${totalGasto} com ${quantidadeJogos} jogos\nJogo mais barato: ${nomeMenor} - R$${precoMenor}\nJogo mais caro: ${nomeMaior} - R$${precoMaior}`)