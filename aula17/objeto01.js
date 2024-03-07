let amigo = {nome: `José`,
sexo: `M`,
peso: 85.4,
engordar(p){
    console.log(`ENGORDOU!`)
    this.peso += p
}}
console.log(amigo.nome)
console.log(amigo.peso)
amigo.engordar(2)
console.log(amigo.peso)
