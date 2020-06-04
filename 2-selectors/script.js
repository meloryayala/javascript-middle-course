
//Seletor por ID
document.querySelector('#titulo').innerHTML='<i>EXEMPLO</i>'


//Seletor por TAG
document.querySelector('a').innerText = '<b>teste ancora</b>'



//Seletor para todos
document.querySelectorAll('h1')


let teste = ['a', 'b', 'c']

teste.forEach(function(item) {
console.log(item)
})


//o (xxxx.forEach) só funciona quando a coisa anterior for um array
//Função anônima, nao precisa de nome, // Callback

let ancora = document.querySelectorAll('a')

ancora.forEach(function(elemento) {
    elemento.innerHTML='Teste'
})


//Seletor mais de 1 item por classe

let boxes = document.querySelectorAll('.box')


let count=0
boxes.forEach(function(box,index) {
    count ++
    box.innerHTML = 'box' + (index + 1)
})