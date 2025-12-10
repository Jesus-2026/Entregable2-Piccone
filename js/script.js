//🏥 Calculadora de Índice de Masa Corporal (IMC)
//Simulador para calcular el IMC y determinar el estado de salud según el peso y altura

/* El simulador debe:
1- Mostrar un mensaje de bienvenida
2- Solicitar datos al usuario:
   2a- Pedir peso en kilogramos
   2b- Pedir altura en metros
3- Calcular el IMC con la fórmula: peso / (altura × altura)
4- Determinar la categoría según el resultado:
   a- Bajo peso: IMC menor a 18.5
   b- Peso normal: IMC entre 18.5 y 24.9
   c- Sobrepeso: IMC entre 25 y 29.9
   d- Obesidad: IMC mayor o igual a 30
5- Mostrar el resultado en consola y con alert
6- Preguntar si desea realizar otro cálculo
7- Al finalizar mostrar mensaje de despedida
*/


// CONSTANTES - Valores de referencia para categorías IMC

const bajoPeso = 18.5;
const pesoNormal = 25;
const sobrePeso = 29.9;
const obesidad = 30;

function pedirDatos(){

    let peso = parseFloat(prompt("Ingresa  tu peso en Kg (ej: 70,5)"));
    let altura = parseFloat(prompt( "Ingresa  tu altura en M metros (ej: 1.75)"));
    return{ peso, altura};
}

function calcularIMC(peso, altura){
    let imc = peso / (altura * altura);
    return imc;
}

function determinarCategoria(imc){
    if (imc < bajoPeso){
        return "Bajo Peso";
    } else if(imc >= bajoPeso && imc < pesoNormal){
        return "Peso Normal";
    } else if( imc >= pesoNormal && imc < sobrePeso) {
        return "Atención, Sobre Peso!!"
    } else if( imc >= sobrePeso ){
        return "Alerta, Obesidad!!"
    }

}


alert("🏥 Bienvenido a la calculadora de IMC");

let continuar; 

do{
    let datos = pedirDatos();

    let resultadoIMC = calcularIMC(datos.peso, datos.altura);
  
    let categoria = determinarCategoria(resultadoIMC);

    console.log("--- Resultado ---");
    console.log("Peso: " + datos.peso + " kg");
    console.log("Altura: " + datos.altura + " m");
    console.log("Tu IMC es: " + resultadoIMC.toFixed(2));
    console.log("Categoría: " + categoria);

    alert("Tu IMC es: " + resultadoIMC.toFixed(2) + "\nCategoría: " + categoria);

    continuar = confirm("¿Deseas calcular otro IMC?");

} while(continuar);

alert("👋 Gracias por usar la Calculadora de IMC. ¡Cuida tu salud!");
console.log("=== Programa finalizado ===");