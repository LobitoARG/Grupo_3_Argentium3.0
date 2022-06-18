const funcionesFront = {

setTotalCompra(nodeList, node){
    let suma = 0;
    let sumaTotal = 0;
    for (let i = 0; i < nodeList.length; i++) {    
        const element = nodeList[i];        
        suma += parseInt(element.innerText);
        sumaTotal = suma;
        node.innerText = sumaTotal;
    }  
}


}

module.exports = funcionesFront;