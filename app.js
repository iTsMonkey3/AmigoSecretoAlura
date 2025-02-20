// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let amigo = "";

function agregarAmigo() {
    amigo = document.getElementById('amigo').value;

    if (amigo == ''){ //Valida que la caja tenga contenido
        alert("Por favor, inserte un nombre.");
        limpiarCaja();
        
    } else {
        console.log (amigo);
        amigos.push(amigo);
        limpiarCaja();
        listaAmigos();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
    return;
}

function listaAmigos() {
    let lista  = document.getElementById('listaAmigos'); //Esta es la lista que se va a crear
    lista.innerHTML = "" //Aqui lo que hace es agarrar el elemento de html y lo limpia
    let li = ""; //Esta variale es para crear los li

    for(let i=0; i<amigos.length; i++){
        li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
    return;
}

function sortearAmigo() {
    if(amigos.length > 0){
        let numeroAmigo = Math.floor(Math.random()*amigos.length)
        console.log(numeroAmigo);
        console.log(`El nombre es ${amigos[numeroAmigo]}`);
        document.getElementById("resultado").innerHTML = `Amigo sorteado: ${amigos[numeroAmigo]}`;    
    }
    return;
}

function reiniciarLista(){
    amigos = [];
    limpiarCaja();
    document.getElementById("resultado").innerHTML = "";
    document.getElementById('listaAmigos').innerHTML = ""

    return;
}

//Agregar el boton para limpiar lista y tambien agregar una animacion cuando se esté generando el amigo random

//Prueba de una funcion extra al programa

// function permutacion(numeros) {

//     let numeroFaltante = 0;
    
//     for(let i=0; i < numeros.length; i++){
//         if (numeros[i] + 1 != numeros[i+1]) {
//             numeroFaltante = numeros[i];
//             do{
//                 numeroFaltante++;
//                 console.log("a");
//             }while(numeroFaltante != numeros[i] + 1);
            
//             numeroFaltante = numeroFaltante - 2;
//         }
//     }
//     console.log(numeroFaltante);
//     return;

// }

// permutacion([1,2,3,12,100]);