let num = [5, 8, 2, 9, 3]
for (i = 0; i < num.length; i++){
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}

for (var i in num) {
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}
