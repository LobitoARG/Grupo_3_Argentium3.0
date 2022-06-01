const db = require('../../src/database/models'); 

function validarEMAILDB(){
	let inputEmail = document.getElementById('email')
    let mensajeError = document.getElementById('msgEMAIL')
    db.Usuario.findOne(
        {where: {
            email: inputEmail.value
        }})
			.then(resultado =>{
				if(resultado !== null){
                    console.log(inputEmail.value)
					mensajeError.classList.remove('formulario__input-error')
                    mensajeError.classList.add('formulario__input-error-activo')
				}else{
                    mensajeError.classList.remove('formulario__input-error-activo')
                    mensajeError.classList.add('formulario__input-error')
                }
            })
}