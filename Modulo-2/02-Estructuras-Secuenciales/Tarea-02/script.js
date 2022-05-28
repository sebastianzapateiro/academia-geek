
/*Actividad:
Una modista, para realizar sus prendas de vestir, encarga las telas al extranjero. Para cada pedido tiene que proporcionar las medidas de la tela en pulgadas, pero ella generalmente las tiene en metros. Realice un algoritmo para ayudar a resolver el problema, determinando cuántas pulgadas debe pedir con base en los metros que requiere. (1 pulgada = 0.0254 m).

Realizado por: Sebastián Zapateiro
*/

//Declarar valiables
let medidaMetros;
let medidaPulgadas;


//Solicitar datos de entrada

do {
medidaMetros = prompt("Ingrese los metros que requiere de tela")
} while(medidaMetros=="");


//Calcular medida en Pulgadas

medidaPulgadas = parseFloat(medidaMetros)/0.0254;

//Presentar en pantalla la medida en pulgadas

alert("Segun las medidad proporcionadas se halla que "+medidaMetros+"m de tela\n equivalen a: "+medidaPulgadas+" pulgadas\n");




