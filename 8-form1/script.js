


let form = document.querySelector('#formCadastro')

form.onsubmit = function(event) {
   event.preventDefault()

   let errorIn = false

   let inputNome = document.forms['formCadastro']['nome']
   let inputEmail = document.forms['formCadastro']['email']
   let selectCidade = document.forms['formCadastro']['cidade']

   if(!inputNome.value) {
      errorIn=true

      inputNome.classList.add('inputError')

      let span = inputNome.nextSibling.nextSibling
      span.innerText = 'digite o nome corretamente!'
   } else{
      inputNome.classList.remove('inputError')

      let span = inputNome.nextSibling.nextSibling
      span.innerText = ''
   }

   if(!inputEmail.value) {
      errorIn=true

      inputEmail.classList.add('inputError')

      let span = inputEmail.nextSibling.nextSibling
      span.innerText = 'digite o e-mail corretamente!'
   } else{
      inputEmail.classList.remove('inputError')

      let span = inputEmail.nextSibling.nextSibling
      span.innerText = ''
   }

   if(!selectCidade.value) {
      errorIn=true

      selectCidade.classList.add('inputError')

      let span = selectCidade.nextSibling.nextSibling
      span.innerText = 'Selecione uma cidade!'
   } else{
      selectCidade.classList.remove('inputError')

      let span = selectCidade.nextSibling.nextSibling
      span.innerText = ''
   }

   if(!errorIn){
      form.submit()
   }
   

}

