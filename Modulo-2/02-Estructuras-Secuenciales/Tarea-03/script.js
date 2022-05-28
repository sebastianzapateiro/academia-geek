
/*Actividad:
Un estudiante desea saber cual será su calificación final en la materia de Algoritmos. Dicha calificación se compone de los siguientes porcentajes:

55% del promedio de sus tres calificaciones parciales
30% de la calificación del examen final
15% de la calificación de un trabajo final
Realizado por: Sebastián Zapateiro
*/

//Declarar valiables
let primeraNotaParcial;
let segundaNotaParcial;
let terceraNotaParcial;
let promedioNotas;
let notaExamenFinal;
let notaTrabajoFinal;
let notaFinal;


//Solicitar datos de entrada

do {
primeraNotaParcial = prompt("Ingrese la nota de su primera calificación");
} while(primeraNotaParcial=="");

do {
    segundaNotaParcial = prompt("Ingrese la nota de su segunda calificación");
    } while(segundaNotaParcial=="");

do {
    terceraNotaParcial = prompt("Ingrese la nota de su tercera calificación");
    } while(terceraNotaParcial=="");

do {
        notaExamenFinal = prompt("Ingrese la nota del examen final");
    } while(notaExamenFinal=="");
    
do {
        notaTrabajoFinal = prompt("Ingrese la nota del trabajo final");
    } while(notaTrabajoFinal=="");

    
//Calcular promedio de notas parciales

promedioNotas=(parseFloat(primeraNotaParcial)+parseFloat(segundaNotaParcial)+parseFloat(terceraNotaParcial))/3;

//Se calcula la nota final

notaFinal=promedioNotas*0.55+notaExamenFinal*0.3+notaTrabajoFinal*0.15;

//Presentar en pantalla la calificación final de la materia de Algoritmos

alert("Tomando en cuenta los procentajes de las siguientes notas:\n"+"55% del promedio de sus tres calificaciones parciales ("+promedioNotas+") = "+promedioNotas*0.55+"\n"+"30% de la calificación del examen final: "+notaExamenFinal*0.3+"\n"+"15% de la calificación de un trabajo final: "+notaTrabajoFinal*0.15+"\n La calificación final de la asignatura es de Algoritmos es: "+notaFinal);




