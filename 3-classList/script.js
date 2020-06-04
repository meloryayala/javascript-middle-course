


let menuMobile = document.querySelector('.menuMobile');
let botaoMenu = document.querySelector('.botaoMenu');

//Flag => lvantar uma bandeira para controlar o estado
let aberto = false;


function openClose () {
    if( aberto === true ){
        aberto = false;
        menuMobile.classList.remove('aberto');
        botaoMenu.innerText = 'abrir menu';

    } else if (aberto === false){
        aberto = true;
        menuMobile.classList.add('aberto');
        botaoMenu.innerText = 'fechar menu';
    }
}

botaoMenu.onclick = openClose;