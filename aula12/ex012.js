var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()

console.log(`Agora são exatamente ${hora}:${minutos}hrs.`)
if (hora < 12) {
    console.log(`Bom Dia!`)
}if (hora >= 12 && hora <= 18) {
    console.log(`Boa Tarde!`)    
}if (hora > 18 && hora <= 24) {
    console.log(`Boa Noite!`)
}