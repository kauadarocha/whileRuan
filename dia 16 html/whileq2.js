let populacaoA = 80000
let populacaoB = 200000
let quantidadeAno = 0
while(populacaoA < populacaoB){
    populacaoA *= 1.03
    populacaoB *= 1.015
    quantidadeAno++
}
alert(`A população A ultrapassa a população B após ${quantidadeAno} anos`)