/*
Ejercicio 9 [ ] Calculadora con clases
Crea una clase calculadora que tenga las operaciones básicas de la misma.
Si te sientes cómodo puedes agregarle la función de MC MR M+ M- y MS
*/
class Calculadora{
    constructor(operandoX, operandoY){
        this.operandoX;
        this.operandoY;
    }
    sumar(){
        const suma = this.operandoX + this.operandoY
        console.log(suma);
    }
    restar(x, y){
        const resta = this.operandoX - this.operandoY
        console.log(resta);
    }
    dividir(x, y){
        const division = this.operandoX/this.operandoY
        console.log(division);
    }
    multiplicar(x, y){
        const producto = this.operandoX*this.operandoY
        console.log(producto);
    }
    elevarPotencia(x, y){
        const potencia = this.operandoX**this.operandoY
        console.log(potencia);
    }
    elegirNumeros(){
        this.operandoX = parseInt("ingrese un nro") 
        this.operandoY = parseInt("ingrese otro nro" )
    }
}
calcu =  new Calculadora()
calcu.sumar()
/// No me quedo clara la consigna y el resto de las funcionalidades. lo dejo por ahora con esta funcionalidad y 
/// cuando pueda lo profundizo y le meto tambien una interfaz grafica.