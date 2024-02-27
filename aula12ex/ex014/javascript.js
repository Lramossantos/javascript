function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')    
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        //BOM DIA        
        img.src = "imagens/03.ico"
        document.body.style.backgroundColor = "#87a3de"
        
    }if (hora >= 12 && hora <= 18) {
        //BOA TARDE        
        img.src = "imagens/01.ico"
        document.body.style.backgroundColor = "#f88516"
        
    } if (hora > 18 && hora <= 24) {
        //BOA NOITE
        img.src = "imagens/02.ico"
        document.body.style.backgroundColor = "black"          
    }
}
