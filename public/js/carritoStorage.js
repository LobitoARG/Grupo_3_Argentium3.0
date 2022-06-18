window.addEventListener("load", function(){   
    let btnAgregarCarrito = document.getElementById('btnAgregarCarrito');

    btnAgregarCarrito.addEventListener('click', function(){
        let query = new URLSearchParams(location.search);
        let id; //me queda ver como lo saco del URL. 
                
        let objProducto = new Object();
        objProducto.nombre = document.getElementById('nombreProducto').innerText;
        objProducto.imagen = document.getElementById('imagenInput').getAttribute('src');
        objProducto.precio = document.getElementById('precio').innerText;
        objProducto.cantidad = 1;

        let carritoStorage = JSON.parse(window.localStorage.getItem('arrayCarrito'));
        

        if(carritoStorage != null){
                    let resultado = carritoStorage.find( producto => producto.nombre == objProducto.nombre);

                    //Si ya existe el producto le suma 1 en cantidad. 
                    if(resultado !== undefined){
                        let index = carritoStorage.findIndex(producto => producto.nombre == objProducto.nombre);
                        carritoStorage[index].cantidad += 1;
                        carritoStorage = JSON.stringify(carritoStorage);
                        window.localStorage.setItem('arrayCarrito', carritoStorage);
                        window.alert('¡Se agregó una unidad más a tu carrito!')
                    }
                    //Si no existe el producto, lo crea y se lo suma al array que ya existe.
                    else{
                        let carrito = carritoStorage
                        carrito.push(objProducto);
                        carrito = JSON.stringify(carrito);
                        window.localStorage.setItem('arrayCarrito', carrito);
                        window.alert('¡Se agrego el producto a tu carrito!')
                    }
        }
        //Si no hay carrito en LocalStorage, crea un nuevo array, pusea el producto y crea un nuevo item en el LocalStorage.
        else{
            let carrito = [];
            carrito.push(objProducto);
            carrito = JSON.stringify(carrito);                        
            window.localStorage.setItem('arrayCarrito', carrito);
            window.alert('¡Se agrego el primer producto a tu carrito!')
            
        }
        
    })

})