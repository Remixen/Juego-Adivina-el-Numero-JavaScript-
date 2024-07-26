// Variables
let numeroMinimo = 1;
let numeroMaximo = 100;
let numeroSecreto = Math.floor(Math.random() * (numeroMaximo - numeroMinimo + 1)) + numeroMinimo;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = "vez";
let maximosIntentos = 6;


while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Me indicas un numero entre ${numeroMinimo}-${numeroMaximo} por favor:`));

    //alert('Hola Mundo');
    console.log(typeof(numeroUsuario));
    
    /*
    Este codigo realiza
    la comparacion
    */
    console.log('Resultado de la comparación:', numeroUsuario == numeroSecreto);

    if (numeroUsuario == numeroSecreto){
        alert(`Acertaste, el numero es: ${numeroUsuario}. Lo hiciste ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
    } else {
        if (numeroUsuario > numeroSecreto){
            alert('El numero secreto es menor');
        } else {
            alert('El numero secreto es mayor');
        }
        // Incrementamos el contador cuando no acierta
        //intentos =intentos + 1;
        //intentos += 1;
        intentos++;

        palabraVeces = "veces";  //alert("Lo siento, no acertaste el numero");
        if (intentos > maximosIntentos){
            alert(`Lllegaste al numero maximo de ${maximosIntentos} intentos`);
            break;
        }
    }   
    
}


