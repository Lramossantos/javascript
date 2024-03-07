function btnContar() {
    var startInput = window.document.getElementById("start");
    var endInput = window.document.getElementById("end");
    var passInput = window.document.getElementById("pass");
    var msg = window.document.getElementById("msg");

    if (startInput.value.length == 0 || endInput.value.length == 0 || passInput.value.length == 0) {
        window.alert(`[ERROR]Faltam dados!`)
    } else {
        msg.innerHTML = "Contando: "
        var i = Number(startInput.value)
        var f = Number(endInput.value)
        var p = Number(passInput.value)

        if (p <= 0) {            
            document.alert(`Passo invalido! Considerando PASSO 1`)
            p = 1
        }
        if (i < f) {       
            for (var c = i; c <= f; c += p) {
                msg.innerHTML += `<br> ${c} \u{1F603}`
            }                            
        } else {
            for (let c = i; c >= f; c -= p) {
                msg.innerHTML+= `${c} \u{1F603}`
            }            
        }
        msg.innerHTML+= " \u{1F3C1}"        
    }
}

