let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementohtml = document.querySelector(elemento);
    elementohtml.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`¡¡ Acertaste al número secreto !! después de ${intentos} ${(intentos === 1) ? 'vez' : 'veces'} `);
        document.getElementById('reiniciar').removeAttribute('disabled');// lo que hace es desactivar el atributo 'disable' direccionado mediante ID
    }else{
        // El usuario no acertó.
        if(numeroSecreto > numeroDeUsuario){
            asignarTextoElemento('p', 'El número que buscas es mayor');
        }else{
            asignarTextoElemento('p', 'El número que buscas es menor');
        }
        intentos++;
        limpiarCaja();            
    }
    return;  
}


function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los números
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','ya se sortearon todos los números posibles');
    } else{
         //si el número generado está incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', '¡Juego del número secreto!');
    asignarTextoElemento('p', `Indica un número de 1 a ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de números
    //generar el número aleatorio    
    //inicializar el número de intentos
    condicionesIniciales();
    //deshabilitar botón de nuevo juego para que el jugador primero termine un juego y luego reinicie uno nuevo
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}

condicionesIniciales();


