/*  
Ejercicio 7 [ ] Crea una clase simple

En este momento, hay clase Counter declarada que contiene 4 funciones:
constructor: Esta función inicializa el valor del contador.
increaseOne: Esta función incrementa el valor del contador en uno.
decreaseOne: Esta función disminuye el valor del contador en uno.
getValue: Esta función retorna el valor del contador.
Todas las funciones están vacías.
📝 Instructions
Tu trabajo es llenar las funciones con el código apropiado para que funcione:
Agrega contenido a la clase Counter para que se comporte como se espera.
💡 Pista:
Inicaliza la variable this.counter y úsala en cada función.
Resultado esperado:
1
3
1
*/
class Counter{
    constructor(counter){
        this.counter = counter
    }
    increaseOne(){
        this.counter++
    }
    decraseOne(){
        this.counter--
    }
    getValue(){
        return this.counter
    }
}
const newCounter = new Counter(1)
console.log(newCounter.getValue());
newCounter.increaseOne()
newCounter.increaseOne()
console.log(newCounter.getValue());
newCounter.decraseOne()
newCounter.decraseOne()
console.log(newCounter.getValue());