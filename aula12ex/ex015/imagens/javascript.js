function verificar() {
    var data = new Date()
    var anoAtual = data.getFullYear()
    var anoNasc = document.getElementById(`nascimento`)
    var res = document.getElementById(`msg`)    

    if (anoNasc.value.length == 0 || Number(anoNasc.value) > anoAtual) {
        window.alert(`[ERRO] verifique os dados e verifique novamente`)
    } else {
        var fsex = document.getElementsByName(`radsex`)
        var idade = anoAtual - Number(anoNasc.value)
        gênero = ""
        if (fsex[0].checked) {
            gênero = "Homem"
            img.src = "homem.jpg"
            if (idade < 16) {
                gênero = "Criança"
                img.src = "criança.jpg"
            } else if (idade > 64) {
                gênero = "Idoso"
                img.src = "idoso.jpg"
            }               
        } else if (fsex[1].checked) {
            gênero = "Mulher"
            img.src = "mulher.jpg"
            if (idade < 16) {
                gênero = "Criança"
                img.src = "criança.jpg"
            } else if (idade > 64) {
                gênero = "Idosa"
                img.src = "idosa.jpg"
            } else {
                
            }
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        
    }
        

}

