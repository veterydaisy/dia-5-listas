let frutas = [];
let verduras = [];
let lacteos = [];
let dulces = [];
let congelados = [];
let comida = "";
let categoria = "";
let eliminar = "";

let listaCompras = "si"; //valor inicial si , porque la primera vez entra al while

while(listaCompras != "no"){
    if(frutas.length === 0 && verduras.length === 0 && lacteos.length === 0 && dulces.length === 0 && congelados.length === 0){
        listaCompras = prompt("¿Deseas agergar un producto a la lista de compras? Responde 'si' o 'no'");
    }else{
        listaCompras = prompt("¿Deseas agergar un producto a la lista de compras? Responde 'si','no' o 'eliminar'");
    }

    
    while(listaCompras != "si" && listaCompras !="no" && listaCompras != eliminar){ //para mostrar que el texto no fue reconocido y preguntar nuevamente
        alert("¡operación no reconicida!");
        listaCompras = prompt("¿Desea agregar un producto a la lista de compras? Responde 'si' o 'no'");
    }

    if(listaCompras === "no"){
        break; //salir del while
    }
    
    if (listaCompras === "si"){
        comida = prompt("¿Que Producto desea agregar ?");
        categoria = prompt("¿En qué categoria encaja esta comida: 'frutas', 'verduras', 'lacteos', 'dulces' o 'congelados'?");
        if(categoria === 'frutas'){
            frutas.push(comida);
        }
        else if(categoria === "verduras"){
            verduras.push(comida);
        }
        else if(categoria === "lacteos"){
            lacteos.push(comida);
        }
        else if(categoria === "dulces"){
            dulces.push(comida);
        }
        else if(categoria === "congelados"){
            congelados.push(comida);
        }
        else{
            alert("No existe esa caregoria");
        }
    }
    else if(listaCompras === "eliminar"){
        if(frutas.length === 0 && verduras.length === 0 && lacteos.length === 0 && dulces.length === 0 && congelados.length === 0){
            alert("¡La lista es ta vacia !");
        }
        else{// si la lista no esta vacia
            eliminar = prompt(`Lista de compras:\n  Frutas: ${frutas}\n  Verduras: ${verduras}\n Lácteos: ${lacteos}\n  Dulces: ${dulces}\n  Congelados: ${congelados}\n\n¿Qué producto deseas eliminar?`);
            if(frutas.indexOf(eliminar) != 1){
                frutas.splice(frutas.indexOf(eliminar),1);
                alert(`El producto ${eliminar} ha sido eliminado con éxito!`);
            }else if(verduras.indexOf(elminar) != -1){
                verduras.splice(verduras.indexOf(eliminar),1);
                alert(`El producto ${eliminar} ha sido eliminado con éxito!`);
            }else if(lacteos.indexOf(eliminar) != -1){
                lacteos.splice(lacteos.indexOf(eliminar),1);
                alert(`El producto ${eliminar} ha sido eliminado con éxito!`);
            }else if(dulces.indexOf(eliminar) != -1){
                dulces.splice(dulces.indexOf(eliminar),1);
                alert(`El producto ${eliminar} ha sido eliminado con éxito!`);
            }else if(congelados.indexOf(eliminar) != -1){
                congelados.splice(congelados.indexOf(eliminar),1);
                alert(`El producto ${eliminar} ha sido eliminado con éxito!`);
            }else{
                alert("¡No fue posible encontrar el producto dentro de la lista!");
            }
        }
    }
}

alert(`Lista de compras: \n Frutas:${frutas}\n Verduras:${verduras}\n Lácteos:${lacteos}\n Dulces:${dulces}\n Congelados:${congelados}`);