function gerar(){
    let num = document.getElementById('txnum')
    let tab = document.getElementById('tabu')
    if(num.value.length == 0){
        window.alert('[ERRO] Digite um número!')
    }else{
        let n = Number(num.value)
        tab.innerHTML = ''
        for(c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)

        }
    }



    
}