

let botaoTeste = document.querySelector('#botaoTeste')



//addEventListener
botaoTeste.addEventListener('click', function() {
    console.log('mensagem 1')
})

botaoTeste.addEventListener('click', function() {
    console.log('mensagem 2')
})


//ou function  fora do addEventListener pode ser utilizado

function botaoClick() {
    console.log('mensagem 1')

    botaoTeste.removeEventListener('click', botaoClick)
}


botaoTeste.addEventListener('click', botaoClick)


/*
//esse codigo reescreve a funcão entao nao pode exibir 2 ao mesmo tempo
//botaoTeste.onclick = botaoClick

let contador = 0

function botaoClick() {
    contador ++

    console.log('mensagem 1')

    if(contador == 5) {
        botaoTeste.removeEventListener('click', botaoClick)
    }
}

botaoTeste.addEventListener('click', botaoClick)
*/

