

let diminuirBtn = document.querySelector('.menos');
let aumentarBtn = document.querySelector('.mais');


document.querySelector('#numero').innerHTML = 0
let numeroLabel = document.querySelector('#numero')

console.log(numeroLabel.innerHTML)



let count = 0;
let intervalMenos;
let intervalMais;




aumentarBtn.onclick =  function() {
      
      intervalMais = setInterval(function() {
            count++;
            numeroLabel.innerHTML= count;
      }, 1000);
      
      clearInterval(intervalMenos);

      aumentarBtn.classList.add('green');
      diminuirBtn.classList.remove('red');
}


diminuirBtn.onclick = function() {
      
      intervalMenos = setInterval(function() {
            count--;
            numeroLabel.innerHTML= count;
      
      }, 1000);

     clearInterval(intervalMais);

      diminuirBtn.classList.add('red');
      aumentarBtn.classList.remove('green');
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