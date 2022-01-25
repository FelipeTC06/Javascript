function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano){
    window.alert('[ERRO] Verifique os dados e tente novamente')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homen'
            if(idade >=0 && idade <4){
                img.setAttribute('src', 'imagens/bebeH.jpg')
            }else if(idade < 12){
                img.setAttribute('src', 'imagens/criancaH.jpg')
            }else if (idade < 18){
                img.setAttribute('src', 'imagens/jovemH.jpg')
            }else if(idade < 60){
                img.setAttribute('src', 'imagens/adultoH.jpg')
            }else{
                img.setAttribute('src', 'imagens/idosoH.jpg')
            }

        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade <4){
                img.setAttribute('src', 'imagens/bebeM.jpg')
            }else if(idade < 12){
                img.setAttribute('src', 'imagens/criancaM.jpg')
            }else if (idade < 18){
                img.setAttribute('src', 'imagens/jovemM.jpg')
            }else if(idade < 60){
                img.setAttribute('src', 'imagens/adultaM.jpg')
            }else{
                img.setAttribute('src', 'imagens/idosaM.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`
        res.appendChild(img)
    }
        
}