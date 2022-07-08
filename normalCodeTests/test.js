function numeroRandom(minN,maxN){
    var numRandom=Math.floor(Math.random() *(maxN-minN+1))+minN;
    return numRandom;
}

function imprimirLista(lista){
    resultado.innerHTML += "<br><strong>Lista:</strong> [";
    for (var pos=0; pos < lista.length; pos++){
        if(pos == lista.length-1){
            resultado.innerHTML += lista[pos]+"]<br>";
        }
        else{
            resultado.innerHTML += lista[pos]+",";
        }
    }
}

var resultado = document.getElementById("resultado");

var listaNumeros=[];

var cantidadVecesLlenadoLista = numeroRandom(3,19);

for (var i=0; i<= cantidadVecesLlenadoLista;i++){
    listaNumeros.push(numeroRandom(0,100));
}

resultado.innerHTML = "<strong>Longitud:</strong> " + listaNumeros.length + "<br>";
imprimirLista(listaNumeros);

for (var pos1=0; pos1 < listaNumeros.length; pos1++){
    for (var pos2=pos1+1; pos2 < listaNumeros.length; pos2++){
        if(listaNumeros[pos1] < listaNumeros[pos2]){
            var aux = listaNumeros[pos1];
            listaNumeros[pos1] = listaNumeros[pos2];
            listaNumeros[pos2] = aux;
        }
    }
}
imprimirLista(listaNumeros);

