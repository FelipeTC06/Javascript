let num = [3, 4, 6, 4]
console.log(`Esse é o vetor ${num}`)
console.log(num)
console.log('-----------------------------')
num[4]=9
console.log(num)
console.log('-----------------------------')
num.push(0)
console.log(num)
console.log('-----------------------------')
console.log(num.length)
console.log('-----------------------------')
num.sort()
console.log(num)
console.log('-----------------------------')
/*
for(c = 0; c <= num.length; c++){
    console.log(num[c])
}
*/
for(let c in num)
console.log(num[c])
console.log('-----------------------------')
