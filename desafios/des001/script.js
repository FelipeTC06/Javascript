function carregar(){
    var msg = document.getElementById('msg')
    var foto = document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `São ${hora} horas`
    if(hora < 12){
        foto.innerHTML = '<img src="imagens/manha-red.png" alt="foto manha">'
    }else if(hora < 18){
        foto.innerHTML = '<img src="imagens/tarde-red.png" alt="foto tarde">'
    }else{
        foto.innerHTML = '<img src="imagens/noite-red.png" alt="foto noite">'
    }
}