

let toast= document.querySelector('.toast')
let botaoCadastrar = document.querySelector('#botaoCadastrar')


botaoCadastrar.onclick = function () {
    toast.classList.add('visible')
    
    let nomeInput = document.querySelector('#nomeInput').value
    toast.innerHTML = `<div >Tarefa ${nomeInput} cadastrada com sucesso!</div>`
    

    setTimeout(function() {
        toast.classList.remove('visible')
    }, 5000)
}





//ou



/*
function removerToast() {
    toast.classList.remove('visible')
}

botaoCadastrar.onclick = function (){
    toast.classList.add('visible')

    setTimeout(removerToast, 5000)
}

*/