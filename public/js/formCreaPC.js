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
        
    let formMicro = document.getElementById("descripCPU");
    let ulErroresMicro= document.querySelector(".erroresUlMicro");
    formMicro.addEventListener('blur', function(e) {
        if (formMicro.value == ""){
            ulErroresMicro.innerHTML += "<li> El campo del Microprocesador debe estar completo </li>"
        }})        

    let formCooler = document.getElementById("descripWC");
    let ulErroresCooler= document.querySelector(".erroresUlCooler");
    formCooler.addEventListener('blur', function(e) {
        if (formCooler.value == ""){
            ulErroresCooler.innerHTML += "<li> El campo del Water Cooler debe estar completo </li>"
        }})
    
    let formMother = document.getElementById("descripMB");
    let ulErroresMother= document.querySelector(".erroresUlMother");
    formMother.addEventListener('blur', function(e) {
        if (formMother.value == ""){
            ulErroresMother.innerHTML += "<li> El campo de la Motherboard debe estar completo </li>"
        }})

    let formRAM = document.getElementById("descripRAM");
    let ulErroresRAM= document.querySelector(".erroresUlRAM");
    formRAM.addEventListener('blur', function(e) {
        if (formRAM.value == ""){
            ulErroresRAM.innerHTML += "<li> El campo del RAM debe estar completo </li>"
        }})    

    let formSSD = document.getElementById("descripSSD");
    let ulErroresSSD= document.querySelector(".erroresUlSSD");
    formSSD.addEventListener('blur', function(e) {
        if (formSSD.value == ""){
            ulErroresSSD.innerHTML += "<li> El campo del SSD debe estar completo </li>"
        }})    

    let formGPU = document.getElementById("descripGPU");
    let ulErroresGPU= document.querySelector(".erroresUlGPU");
    formGPU.addEventListener('blur', function(e) {
        if (formGPU.value == ""){
            ulErroresGPU.innerHTML += "<li> El campo del GPU debe estar completo </li>"
        }})    

    let formPWS = document.getElementById("descripPWS");
    let ulErroresPWS= document.querySelector(".erroresUlPWS");
    formPWS.addEventListener('blur', function(e) {
        if (formPWS.value == ""){
            ulErroresPWS.innerHTML += "<li> El campo de la fuente de alimentacion debe estar completo </li>"
        }})     
        
    let formGAB = document.getElementById("descripGAB");
    let ulErroresGAB= document.querySelector(".erroresUlGAB");
    formGAB.addEventListener('blur', function(e) {
        if (formGAB.value == ""){
            ulErroresGAB.innerHTML += "<li> El campo del Gabinete debe estar completo </li>"
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
        
        
       
        
   
        
 
}
)