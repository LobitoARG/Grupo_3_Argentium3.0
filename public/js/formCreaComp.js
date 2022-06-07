window.addEventListener("load", function(){

    const formNombre = document.getElementById("name");
    const pErroresVacio = document.getElementById('pErroresVacio')
    const pErroresMin = document.getElementById('pErroresMin')

    formNombre.addEventListener('blur', function(e) {
        if (formNombre.value === "")
        {
          pErroresVacio.classList.remove('errores-name-vacio')
          pErroresMin.classList.add('errores-name-min')

        } else if (formNombre.value.length<5){
            pErroresMin.classList.remove('errores-name-min')
            pErroresVacio.classList.add('errores-name-vacio')
        }
        else{
            pErroresVacio.classList.add('errores-name-vacio')
            pErroresMin.classList.add('errores-name-min')
        }
        
    })

    let formPrecio = document.getElementById("precio");
    let ulErroresPrice = document.querySelector(".erroresUlPrice");
    formPrecio.addEventListener('blur', function(e) {
        if (formPrecio.value == ""){
           ulErroresPrice.innerHTML += "<li> El campo del precio debe estar completo </li>"
        }})

    let formDescuento = document.getElementById("discount");
    let ulErroresDiscount= document.querySelector(".erroresUlDiscount");
    formDescuento.addEventListener('blur', function(e) {
        if (formDescuento.value == ""){
            ulErroresDiscount.innerHTML += "<li> El campo del descuento debe estar completo </li>"
        }})    

    let formTipo = document.getElementById("type");
    let ulErroresType= document.querySelector(".erroresUlType");
    formTipo.addEventListener('blur', function(e) {
        if (formTipo.value == ""){
            ulErroresType.innerHTML += "<li> El campo del tipo debe estar completo </li>"
        }})  
        
    let formDescripcion = document.getElementById("description");
    let ulErroresDescripcion= document.querySelector(".erroresUlDescripcion");
    formDescripcion.addEventListener('blur', function(e) {
        if (formDescripcion.value == ""){
            ulErroresDescripcion.innerHTML += "<li> El campo de descripcionn debe estar completo </li>"
        } else if (formDescripcion.value.length<5){
            ulErroresDescripcion.innerHTML += "<li> El campo de la descripción debe tener mas de 20 caracteres</li>"
        }})     
        
        
    let formImagen = document.getElementById("imagen-para-subir");
    var allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
    let ulErroresImagen= document.querySelector(".erroresUlImagen");
    formImagen.addEventListener('change', function(e) {
        if (formImagen.value !== allowedExtensions){
            ulErroresImagen.innerHTML += "<li> Los formatos permitidos son JPG, JPEG, PNG y GIF </li>"
        }})   
            
   
}
)