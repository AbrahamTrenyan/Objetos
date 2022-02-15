/*
Ejercicio 5 [ ] Hello world con classes
📝 Instrucciones:
En este ejercicio en particular ( a la izquierda), tienes una clase llamada Printer que ya está
declarada.
Create a new object instance of the class Printer and assign it to a variable called myPrinter.
Call the function printerTest of the class Printer and store the result in a variable called
testResult
Print on the console the variable testResult
*/
class Printer{
    constructor(name){
        this.name=name
    }
    printerTest(){
        return 'Hello world'
    }
}
let myPrinter = new Printer()
let testResult=myPrinter.printerTest() 
console.log(testResult);
