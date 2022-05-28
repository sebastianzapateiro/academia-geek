
/*Actividad:
Hacer un algoritmo que calcule el sueldo de un empleado dados como datos de entrada: el nombre, horas trabajadas y el valor de la hora.

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




