window.addEventListener("load", () => {

let elementImg = document.getElementById('imgUsuarioLogeado');
if(elementImg){    
    let srcImagen= elementImg.getAttribute('src');
    let elementId = document.getElementById('idUsuarioLogeado').innerText;
    let elementNombre = document.getElementById('nombreUsuarioLogeado').innerText; 
    let elementApellido = document.getElementById('apellidoUsuarioLogeado').innerText;
    let elementEmail =  document.getElementById('emailUsuarioLogeado').innerText;
    let elementTelefono =  document.getElementById('telefonoUsuarioLogeado').innerText;
    let usuarioSession = new Object();
    usuarioSession.id_usuario = elementId;
    usuarioSession.first_name = elementNombre;
    usuarioSession.last_name = elementApellido;
    usuarioSession.email = elementEmail;
    usuarioSession.imagenUsers = srcImagen
    usuarioSession.telefono = elementTelefono;	

    let jsonSession = JSON.stringify(usuarioSession);
    window.sessionStorage.setItem('usuarioSession', jsonSession);
    let sessionLog = window.sessionStorage.getItem('usuarioSession');    
    let sessionLogObj = JSON.parse(sessionLog);
   console.log(sessionLogObj);
}


let btnLogOut = document.getElementById('LogOut');
btnLogOut.addEventListener('click', () => {
    window.sessionStorage.removeItem('usuarioSession');
})



})