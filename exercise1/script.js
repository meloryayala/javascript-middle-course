

let diminuir = document.querySelector('.menos')
let aumentar = document.querySelector('.mais')


document.querySelector('#numero').innerHTML = 0
let numero = document.querySelector('#numero')

console.log(numero.innerHTML)

let contador = 0


aumentar.onclick = function() {

      contador++

      numero.innerHTML= contador
}


diminuir.onclick = function() {

      contador--

      numero.innerHTML= contador
}








/*

while (contador >= -100) {

      contador--

      diminuir.onclick = document.write(contador)     
      
}



while (contador <= 100) {

      contador++

      aumentar.onclick = document.write(contador)     
      
}

*/