
/*Actividad:
Hacer un algoritmo que calcule el sueldo de un empleado dados como datos de entrada: el nombre, horas trabajadas y el valor de la hora.

Realizado por: Sebastián Zapateiro
*/

//Declarar valiables
let nombreEmpleado;
let horasTrabajadas;
let valorHora;
let sueldoEmpleado


//Solicitar datos de entrada

do {
nombreEmpleado = prompt("Ingrese su nombre, por favor");
} while(nombreEmpleado=="");

do {
    horasTrabajadas = prompt("Ingrese las horas tabajadas, por favor");
    } while(horasTrabajadas=="");
    
do {
    valorHora = prompt("Ingrese el valor de la hora, por favor");
    } while(valorHora=="");

//Calcular sueldo del empleado

sueldoEmpleado = Number(horasTrabajadas)*Number(valorHora);

//Presentar en pantalla el sueldo del empleado

alert("¡Un saludo "+nombreEmpleado+"! "+"\n Tu sueldo es de: $"+sueldoEmpleado+"\n Horas trabajdas: "+horasTrabajadas+"\n Valor por hora: $"+valorHora);




