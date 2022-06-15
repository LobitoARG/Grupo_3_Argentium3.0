window.addEventListener("load", function(){
   
    let formNombre = document.getElementById("name");
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
   
    let formPrecio = document.getElementById("price");
    const pErroresVacioPrecio = document.getElementById('pErroresVacioPrecio')
    formPrecio.addEventListener('blur', function(e) {
        if (formPrecio.value == "")
            {pErroresVacioPrecio.classList.remove('errores-price-vacio')} 
        else{
            pErroresVacioPrecio.classList.add('errores-price-vacio')
            }
        })
    
    const formDescuento = document.getElementById("discount");
    const pErroresVacioDescuento = document.getElementById('pErroresVacioDescuento')  
    formDescuento.addEventListener('blur', function(e) {
        if (formDescuento.value == ""){  
            pErroresVacioDescuento.classList.remove('errores-discount-vacio')}
        else{
            pErroresVacioDescuento.classList.add('errores-discount-vacio')
                }    
            })      
   
    const formTipo = document.getElementById("type");
    const pErroresVacioType= document.getElementById("pErroresVacioType");
    formTipo.addEventListener('blur', function(e) {
        if(formTipo.value == ""){
            pErroresVacioType.classList.remove('errores-tipo-vacio')
                    }
         else{
            pErroresVacioType.classList.add('errores-tipo-vacio')
                    }
                })        
        
    let formDescripcion = document.getElementById("description");
    let pErroresVacioDescripcion= document.getElementById("pErroresVacioDescripcion");
    const pErroresMinDescripcion = document.getElementById('pErroresMinDescripcion')
    formDescripcion.addEventListener('blur', function(e) {
        if (formDescripcion.value === "")
        {
          pErroresVacioDescripcion.classList.remove('errores-descripcion-vacio')
          pErroresMinDescripcion.classList.add('errores-descripcion-min')

        } else if (formDescripcion.value.length<20){
            pErroresMinDescripcion.classList.remove('errores-descripcion-min')
            pErroresVacioDescripcion.classList.add('errores-descripcion-vacio')
        }
        else{
            pErroresVacioDescripcion.classList.add('errores-descripcion-vacio')
            pErroresMinDescripcion.classList.add('errores-descripcion-min')
        }
    })             
       
    
    /* let formImagen = document.getElementById("imagen-para-subir");
    var allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
    const pErroresVacioImagen= document.getElementById("pErroresVacioImagen");
    formImagen.addEventListener('change', function(e) {
        if (formImagen.value !== allowedExtensions){
            pErroresVacioImagen.classList.remove('errores-imagen-vacio')
        }
        else {
            pErroresVacioImagen.classList.add('errores-imagen-vacio')
        }
    })      */
    
    function validarIMG(){
        let inputIMG = document.getElementById('imagenProducto');
        let extensionesIMG = /(.jpg|.jpeg|.png|.gif)$/i;
        let filePath = inputIMG.value;
        console.log(filePath);
        let mensajeError = document.getElementById('msgIMG')
        if(!extensionesIMG.exec(filePath)){
              mensajeError.classList.remove('formulario__input-IMG-error')
              mensajeError.classList.add('formulario__input-error-activo')
              inputIMG.value='';
              return false
        }
        else{
            mensajeError.classList.remove('formulario__input-error-activo')
            mensajeError.classList.add('formulario__input-IMG-error')
        }
    } 

    /* function validarIMG(){
        let inputIMG = document.getElementById('imagenProducto');
        var extension = path.extname(inputIMG.value);
        console.log(extension);
        var aceptadas = ['.jpg', '.jpeg', '.png', '.gif'];
        let mensajeError = document.getElementById('msgIMG')
        if(!aceptadas.includes(extension)){
              mensajeError.classList.remove('formulario__input-IMG-error')
              mensajeError.classList.add('formulario__input-error-activo')
              inputIMG.value='';
              return false
        }
        else{
            mensajeError.classList.remove('formulario__input-error-activo')
            mensajeError.classList.add('formulario__input-IMG-error')
        }
    } */

})