function contar(){
    var inicio = Number(document.getElementById('txinicio').value)
    var fim = Number(document.getElementById('txfim').value)
    var passo = Number(document.getElementById('txpasso').value)
    var res = document.getElementById('res')
    if(inicio == 0 || fim == 0 || passo == 0){
        //window.alert('[ERRO] Faltam dados')
        res.innerHTML = 'Impossivel contar'
    }else{
        res.innerHTML = 'Contando: '
        if(passo <= 0){
            window.alert('Passo invalido! Considerando passo 1')
            passo = 1
        }
        if(inicio < fim){
            for(c = inicio; c <= fim; c += passo){
                res.innerHTML += `${c} \u{1F449}`
            }
            
        }else{
            for(c = inicio; c >= fim; c -= passo){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += '\u{1F3C1}'
        
}
}