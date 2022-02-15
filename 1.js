/*         Práctica
● Ejercicio 1 [ ] Date Time —> Crea una instancia DateTime (FechaHora)
Javascript tiene algunas clases predefinidas que puedes usar cuando lo desees. Una de estas
clases es la clase DateTime, que fue creada para ayudar a los desarrollado@res a trabajar con
fechas y horas.
Por ejemplo, para imprimir la fecha actual, podemos usar la clase DateTimede esta manera:
let d = new Date(); console.log(d);
📝 Instrucciones:
1. Crea un nuevo objeto Date con formato mes-día-año e imprímelo en la consola de esta
forma:
Today is: 8-23-2018
*/
let DateTime = new Date();
console.log(`Today is: ${DateTime.getDay()}-${DateTime.getMonth()}-${DateTime.getFullYear()}`);
