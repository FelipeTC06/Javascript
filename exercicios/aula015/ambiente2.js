let num = [3, 4, 6, 4]
console.log(`Esse é o vetor ${num}`)
console.log(num)
console.log('-----------------------------')
num[4]=9
console.log(num)
console.log('-----------------------------')
num.push(0)
console.log(num)
let psc = num.indexOf(9)
if(psc == -1){
    console.log('Valor não encontrado')
}else{
    console.log(`O valor está na posicao ${psc}`)
}
