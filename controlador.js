//1.necesito almacenar el precio en dolares
//ps5--xbox--seriex--nintendo wich

let preciosConsolas=Array(750,700,409);

//almacenar la cantidad

let cantidad=1;

//calcular precio del casillero

let pesoConsolas=Array(14.2,7.61,4.75);
let pesoTotal=pesoConsolas[0]*cantidad;

let costoCasillero=0;
if(pesoTotal>=10 && pesoTotal<=20){
    
        costoCasillero=85;

}

else{

    let diferenciaPeso=pesoTotal-20;
    costoCasillero=85+(diferenciaPeso*2)
}

//4.costos de envio impuestos
const VALOR_SEGURO=7;
const IMPUESTO_PAIS=114;

//5.total calculo final
let costoTotal=(preciosConsolas[0]*cantidad)+costoCasillero+IMPUESTO_PAIS+VALOR_SEGURO;

console.log(costoTotal);
