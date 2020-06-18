
let contador = document.querySelector('#contador')

let count=0

let intervalo = setInterval( function(){
count++
contador.innerHTML = count

},100)

let botaoPause = document.querySelector('#botaoPause')

botaoPause.onclick = function() {
    clearInterval(intervalo)
}