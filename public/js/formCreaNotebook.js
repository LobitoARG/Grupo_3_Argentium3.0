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

    const formPrecio = document.getElementById("precio");
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
    

    
        
    let formMicro = document.getElementById("descripCPU");
    const pErroresVacioCPU= document.getElementById("pErroresVacioCPU");
    formMicro.addEventListener('blur', function(e) {
        if(formMicro.value == ""){
            pErroresVacioCPU.classList.remove('errores-cpu-vacio')
                }
        else{
            pErroresVacioCPU.classList.add('errores-cpu-vacio')
            }
        }) 
            
    let formRAM = document.getElementById("descripRAM");
    const pErroresVacioRAM= document.getElementById("pErroresVacioRAM");
    formRAM.addEventListener('blur', function(e) {
        if(formRAM.value == ""){
            pErroresVacioRAM.classList.remove('errores-ram-vacio')
                }
        else{
            pErroresVacioRAM.classList.add('errores-ram-vacio')
                }
        })     
    
    let formSSD = document.getElementById("descripSSD");
    const pErroresVacioSSD= document.getElementById("pErroresVacioSSD");
    formSSD.addEventListener('blur', function(e) {
        if(formSSD.value == ""){
            pErroresVacioSSD.classList.remove('errores-ssd-vacio')
                }
        else{
            pErroresVacioSSD.classList.add('errores-ssd-vacio')
                }
        })         
        
    let formGPU = document.getElementById("descripGPU");
    const pErroresVacioGPU= document.getElementById("pErroresVacioGPU");
    formGPU.addEventListener('blur', function(e) {
        if (formGPU.value == ""){
            pErroresVacioGPU.classList.remove('errores-gpu-vacio')
                }
        else{
            pErroresVacioGPU.classList.add('errores-gpu-vacio')
                }
        })         
        
    let formPWS = document.getElementById("descripPWS");
    const pErroresVacioPWS= document.getElementById("pErroresVacioPWS");
    formPWS.addEventListener('blur', function(e) {
        if (formPWS.value == ""){
            pErroresVacioPWS.classList.remove('errores-pws-vacio')
            }
        else{
        pErroresVacioPWS.classList.add('errores-pws-vacio')
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
       
        
    let formImagen = document.getElementById("imagen-para-subir");
    var allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
    let ulErroresImagen= document.querySelector(".erroresUlImagen");
    formImagen.addEventListener('change', function(e) {
        if (formImagen.value !== allowedExtensions){
            ulErroresImagen.innerHTML += "<li> Los formatos permitidos son JPG, JPEG, PNG y GIF </li>"
        }}) 
        
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
        
    
   
}
)