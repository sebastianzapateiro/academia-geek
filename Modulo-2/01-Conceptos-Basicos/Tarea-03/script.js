
/*Actividad:
Un estacionamiento requiere determinar el cobro que debe aplicar a las personas que lo utilizan. Considere que el cobro es con base en las horas que lo disponen y que las fracciones de hora se toman como completas. Realizar el algoritmo que permita determinar el cobro.

Realizado por: Sebastián Zapateiro
*/

//Declarar valiables
let horasEstacionamiento;
let valorHora;
let cobroEstacionamiento;


//Solicitar datos de entrada

do {
horasEstacionamiento = prompt("Ingrese la cantidad de horas en el estacionamiento\n las horas deben seguir de . (punto) decimal para hacer referencia a fracciones");
} while(horasEstacionamiento=="");

do {
    valorHora = prompt("Ingrese el costo que tiene la hora en el estacionamiento, por favor");
    } while(valorHora=="");
    

//Calcular cobro del estacionamieno

cobroEstacionamiento = parseFloat(Math.ceil(horasEstacionamiento))*Number(valorHora);

//Presentar en pantalla el cobro del estacionamiento

alert("¡Un saludo \n El cobro del estacionamiento es de: $"+cobroEstacionamiento+"\n Horas en estacionamiento: "+horasEstacionamiento+"="+"("+Math.ceil(horasEstacionamiento)+")"+"\n Valor por hora: $"+valorHora);




