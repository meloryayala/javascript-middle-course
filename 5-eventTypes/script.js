

let quadrado = document.querySelector('.quadrado')

function myFunction (event) {
    console.log(event.key)
}

quadrado.onclick = myFunction

//quadrado.onmousemove = myFunction

//quadrado.onmouseenter = myFunction

//quadrado.onmouseout = myFunction

//window.addEventListener('resize',myFunction)


//Remorver o (on) para adicionar o evento no addEventListener
window.addEventListener('keypress', myFunction)