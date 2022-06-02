window.addEventListener("load", function(){
    let formNombre = document.getElementById("name");
    let ulErroresName = document.querySelector(".erroresUlName");
    formNombre.addEventListener('blur', function(e) {
        if (formNombre.value == ""){
           ulErroresName.innerHTML += "<li> El campo del nombre debe estar completo </li>"
        } else if (formNombre.value.length<5){
            ulErroresName.innerHTML += "<li> El campo del nombre debe tener mas de 5 caracteres</li>"
        }
    
    })

    let formPrecio = document.getElementById("price");
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
        }
    })   
    
    let formImagen = document.getElementById("imagen-para-subir");
    var allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
    let ulErroresImagen= document.querySelector(".erroresUlImagen");
    formImagen.addEventListener('change', function(e) {
        if (formImagen.value !== allowedExtensions){
            ulErroresImagen.innerHTML += "<li> Los formatos permitidos son JPG, JPEG, PNG y GIF </li>"
        }})        


})