

let form = document.querySelector('#formCidade');

let estado = document.querySelector('#estado');
let cidadeDiv = document.querySelector('#cidade');
let cidadeSelect = document.querySelector('.cidadeSelect')


const cidades = {

      sp: ['Jundiaí', 'Campinas', 'Limeira', 'Atibaia'],

      rj: ['Teresópolis', 'Resende', 'Maricá', 'Macaé'],

};

let inputIn = false

estado.addEventListener('change', function (event) {
      
      let inputEstado = estado.value
      cidadeDiv.classList.remove('hide')

      cidadeSelect.addEventListener('change', function(){
      })

      if( inputEstado === 'São Paulo') {
            inputIn = true;

            for (let cidade of cidades.sp) {

                  cidadeSelect.innerHTML = cidadeSelect.innerHTML + `<option>${cidade}</option>`
            }
            
            
      } else if (inputEstado === 'Rio de Janeiro') {
            inputIn = true;

            for (let cidade of cidades.rj) {

                  cidadeSelect.innerHTML = cidadeSelect.innerHTML + `<option>${cidade}</option>`;
            }
      }

});



if(estado.value === '-- Selecione --') {
      estado.classList.add('selectError')
}
      
if(cidadeSelect.value === '-- Selecione --') {
      cidadeSelect.classList.add('selectError')
}



/*


if(inputIn === true) {
      form.submit ()
}


if (inputEstado === '--Selecione --') {
      inputIn = false

      estado.classList.add('selectError')
      console.log(fieldEstado)

      
};
let inputEstado = estado.value
let inputCidade = cidadeSelect.value

if(inputEstado === '--Selecione --') {
      inputIn = false

      estado.classList.add('selectError')
      console.log(fieldEstado)

      
};


estado.onchange = function() {
      let inputBtn = estado.value
      cidade.classList.remove('hide')
           
      if( estado === 'São Paulo') {
            inputIn = true

      } else if (estado === 'Rio de Janeiro') {
            inputIn = true

      } else if(estado === '--Selecione --') {
            inputIn = false
                  
      };
}

*/



//para lembrar
//let nomeInput = document.querySelector('#nomeInput').value