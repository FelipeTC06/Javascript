function parimp(n){
    if(n%2 == 0){
        return 'par'
    }else{
        return 'impar'
    }
}
let res = parimp(10)
console.log(res)
console.log('----------------------------')
function somar(n1=0, n2=0){
    return n1 + n2
}
let resu = somar(3,8)
console.log(resu)
console.log('----------------------------')

let v = function(x){
    return x**2
}
let r = v(10)
console.log(r)
console.log('----------------------------')
/*
function fatorial(n){
    let fat = 1
    for(c = n; c > 1; c--){
        fat *= c
    }
    return fat
}
let rp = fatorial(5)
console.log(rp)
*/
//Abaixo é uma maneira recursiva
function fatorial(n){
    if(n == 1){
        return 1
    }else{
        return n * fatorial(n-1)
    }
}
console.log(fatorial(5))