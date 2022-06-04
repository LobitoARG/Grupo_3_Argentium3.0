const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const submitButton = document.querySelector('.formulario__btn');
const inputName = document.getElementById('first_name')
const inputEmail = document.getElementById('email')
const inputTelefono = document.getElementById('telefono')
const inputComentario = document.getElementById('input_comentario')
const mensajeExitoso = document.getElementById('formulario__mensaje-exito')
const mensajeError = document.getElementById('formulario__mensaje-error')

const expresiones = {
	first_name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
	first_name: false,
	email: false,
	telefono: false,
}

formulario.addEventListener('submit', function(e){
    e.preventDefault()
})


submitButton.addEventListener('click', function(e){
	
    if(inputName.value === '' || inputEmail.value==='' || inputTelefono.value==='' || inputComentario.value===''){
        mensajeExitoso.classList.remove('formulario__mensaje-exito-activo')
        mensajeExitoso.classList.add('formulario__mensaje-exito')
        
        mensajeError.classList.remove('formulario__mensaje-error')
        mensajeError.classList.add('formulario__mensaje-error-activo')

    }else{
        mensajeError.classList.remove('formulario__mensaje-error-activo')
        mensajeError.classList.add('formulario__mensaje-error')
        mensajeExitoso.classList.remove('formulario__mensaje-exito')
        mensajeExitoso.classList.add('formulario__mensaje-exito-activo')
    }
})






const validarFormulario = (e) => {
	switch (e.target.name) {
		case "first_name":
			validarCampo(expresiones.first_name, e.target, 'first_name');
		break;
		
		
		case "email":
			validarCampo(expresiones.email, e.target, 'email');
		break;

		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}


inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});
