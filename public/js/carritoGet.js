window.addEventListener("load", function(){   

    let arrayCarrito = window.localStorage.getItem('arrayCarrito');
    var suma = 0;
    var sumaTotal = 0;  

    
    var divContArticles = document.getElementById('contArticles'); 

        
    //SETEO LOS PRODUCTOS EN EL HTML. 
    if (arrayCarrito != null){
        let carrito = JSON.parse(arrayCarrito)
        for (let i = 0; i < carrito.length; i++) {
            const element = carrito[i];
            let nombreProducto = element.nombre;
            let imagenSrcProducto = element.imagen;
            let precioProducto = parseInt(element.precio)
            let cantidadProducto = parseInt(element.cantidad)
            let precioCantidad = parseInt( precioProducto * cantidadProducto)
            sumaTotal += precioProducto;      
        var articleCarrito = document.createElement('article');
        articleCarrito.setAttribute('class', 'productoCarrito');
        articleCarrito.innerHTML =                    
                    `<div id="divImagenCarrito" class="imagenCarrito">
                    <img id="imagenProductoCarrito" src="${imagenSrcProducto}" alt="">
                    </div>
                    <div class="descripcionCarrito">
                    <h3 id="nombreProductoCarrito"class="nombreProducto">${nombreProducto}</h3>
                    <p class="precio">Precio Unitario: </p>
                    <p id="precioUnitarioCarrito" class="precio">${precioProducto}</p>
                    <p class="total">Total Producto: </p>
                    <p id="precioTotalProducto" class="precio">${precioCantidad}</p>
                    <div class="agregarQuitar">
                    <label>Cantidad:</label>
                    <div class="cantidadButtons">
                    <input type="text" name="cantidad" id="cantidad" class="cantidad" value="${cantidadProducto}"/>
                    <div class="sumarRestar">
                    <button><i class="fas fa-angle-up"></i></button>
                    <button><i class="fas fa-angle-down"></i></button>
                    </div>            
                    <button id='btnBorrarProducto'><i class="fas fa-trash"></i></button>
                    </div>
                    </div>`
        divContArticles.appendChild(articleCarrito);
            
        } 
    }
    else{
        divContArticles.innerHTML = `<h1> Aún no has agregado nada en tu carrito </h1>`

    }


    //Elementos
    var inputsCantidad = document.querySelectorAll('#cantidad');
    var pPreciosUnitariosProductos = document.querySelectorAll('#precioUnitarioCarrito')
    var pPreciosTotalesProductos = document.querySelectorAll('#precioTotalProducto');
    var totalCompra = document.getElementById('totalCompra');
    var articulosDelCarrito = document.querySelectorAll('.productoCarrito');
    var botonesBorrar = document.querySelectorAll('#btnBorrarProducto');
    var nombresProductosCarrito = document.querySelectorAll('#nombreProductoCarrito')

    //Setea total de la compra por primera vez.
    for (let i = 0; i < pPreciosTotalesProductos.length; i++) {    
        const element = pPreciosTotalesProductos[i];        
        suma += parseInt(element.innerText);
        sumaTotal = suma;
        totalCompra.innerText = sumaTotal;    
    }

    //borra un articulo del carrito
    for (let i = 0; i < articulosDelCarrito.length; i++) {
        const elementArticuloDelCarrito = articulosDelCarrito[i];
        const elementBotonBorrar = botonesBorrar[i];

        elementBotonBorrar.addEventListener('click', () => {
            //actualiza el arrayCarrito en el LocalStorage
            let carrito = JSON.parse(arrayCarrito);
            let carritoActualizado = carrito.filter(carrito => carrito.nombre !== nombresProductosCarrito[i].innerHTML);
            carritoActualizado = JSON.stringify(carritoActualizado);
            this.window.localStorage.setItem('arrayCarrito', carritoActualizado);
            //borra elemento del html
            elementArticuloDelCarrito.remove();
            //recarga página
            this.window.location.reload();
            

        })
        
    }
    
    

    //Finaliza la compra
    var btnEnd = document.getElementById('btnEnd');
    btnEnd.addEventListener('click', ()=>{
        this.localStorage.removeItem('arrayCarrito');
        this.window.alert('¡¡Gracias por su compra!!')
    })
    

    //Actualiza precio total del producto si se modifica la cantidad
    for (let i = 0; i < inputsCantidad.length; i++) {     
    let elementInput = inputsCantidad[i];   
    let elementPrecioUnitario = pPreciosUnitariosProductos[i];   
    let elementPrecioTotal = pPreciosTotalesProductos[i];

    elementInput.addEventListener('blur', (e) =>{
    multiPrecio = parseInt(elementInput.value) * parseInt(elementPrecioUnitario.innerText);    
    elementPrecioTotal.innerText = multiPrecio
    console.log(elementPrecioTotal.innerText);
       
    //Actualiza total de compra  
    let sumaNueva = 0;
    for (let i = 0; i < pPreciosTotalesProductos.length; i++) {    
    const element = pPreciosTotalesProductos[i];        
    sumaNueva += parseInt(element.innerText);
    sumaTotal = sumaNueva;
    totalCompra.innerText = sumaTotal;    
    }   

    })    
    }




    
}) //cierre funcion load.
    








//     const articulosCarritoNL = document.querySelectorAll('.productoCarrito');

//     for (const articulo of articulosCarritoNL){
//         let descCant = articulo.childNodes[2];
//         let desc = descCant.

        
//         articulo.addEventListener('click', (e)=>{
//         console.log(desc);
//         })
//     }
  




    // ME QUEDE ACÁ, DONDE SI COLOCO 'GETELEMENTBYID' ME RECONOCE SOLO EL PRIMER INPUT DE CANTIDAD Y MÁS NINGUNO DE TODOS LOS PRODUCTOS EN EL CARRITO. 
    // let cantidad = this.document.querySelectorAll('#cantidad');
    // // let cantidadValue = cantidad.getAttribute('value');
    // console.log(cantidad[2]);
    // let precioProductoCarrito = this.document.querySelectorAll('#precioProductoCarrito');
    // console.log(precioProductoCarrito[2]);
    // let nombreProductoCarrito = this.document.querySelectorAll('#nombreProductoCarrito');
    // console.log(nombreProductoCarrito[2]);
    // // cantidad.addEventListener('blur', () => {
    // //     console.log(`cantidad ${cantidadValue} y precio ${precioProductoCarrito}`);
    //     // precioProductoCarrito.innerText = parseInt(cantidad.innerText) * parseInt(precioProductoCarrito.innerText);
    // })
        
    //     function multiPrecioCantidad(e){
    //         console.log(e.target);
    //     }

    // divContArticles.addEventListener('blur', multiPrecioCantidad);



















    //     let nombreProducto = carrito[0].nombre;
    //     let imagenSrcProducto = carrito[0].imagen;
    //     let precioProducto = carrito[0].precio;
    //     console.log(nombreProducto, imagenSrcProducto, precioProducto);

   
        

    //     let contenido = `<article class="productoCarrito">
    //     <div id="divCarrito"class="imagenCarrito">
    //         <img id="imagenProductoCarrito" src="${imagenSrcProducto}" alt="">
    //     </div>
    // <div class="descripcionCarrito">
    //     <h3 id="nombreProductoCarrito"class="nombreProducto">${nombreProducto}</h3>
    //     <p id="precioProductoCarrito" class="precio">${precioProducto}</p>
    // <div class="agregarQuitar">
    //     <label>Cantidad:</label>
    //     <div class="cantidadButtons">
    //     <input type="text" name="cantidad" id="cantidad" value="1"/>
    //     <div class="sumarRestar">
    //        <button><i class="fas fa-angle-up"></i></button>
    //        <button><i class="fas fa-angle-down"></i></button>
    //     </div>            
    //     <button><i class="fas fa-trash"></i></button>
    //     </div>
    // </div>
    // </article>`

    // divContArticles.innerHTML = contenido;








    //     carrito = JSON.parse(window.localStorage.getItem('arrayCarrito'))
    //     console.log(carrito);

    //     let nombreProducto = carrito[0].nombre;
    //     let imagenSrcProducto = carrito[0].imagen;
    //     let precioProducto = carrito[0].precio;
    //     console.log(nombreProducto, imagenSrcProducto, precioProducto);

    //     //imagen
    //     let imgElemento = document.createElement("img");
    //     imgElemento.setAttribute('id', 'imagenProductoCarrito')
    //     imgElemento.setAttribute('src', imagenSrcProducto)        
    //     let divCarrito = this.document.getElementById('divCarrito');
    //     divCarrito.appendChild(imgElemento);       

    //     //precio
    //     let precioElemento = document.createElement("h3");
    //     precioElemento.setAttribute('id', 'nombreProductoCarrito');
    //     precioElemento.setAttribute('class', nombreProducto);
    //     let divDescripcion = this.document.getElementById('divCarrito');
    //     divCarrito.prepend(imgElemento);    

    //     let precioProductoCarrito = document.getElementById('precioProductoCarrito')


    //     //nombre
    //     let nombreProductoCarrito = document.getElementById('nombreProductoCarrito')

        

        
    //     nombreProductoCarrito.innerText = nombreProducto;
    //     precioProductoCarrito.innerText = precioProduct

