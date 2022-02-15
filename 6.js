/*  
Ejercicio 6 [ ] Print with clase Printer
📝 Instrucciones:
Por favor escribe una segunda función llamada getModel que retorne/devuelva el modelo de la
impresora actual.
💡 Pista:
Declara la nueva función dentro de la clase Printer.
La función debe retornar el contenido de la variable _model.
Resultado esperado:
The model of the printer is: TX-200
*/
class Printer{
    constructor(model){
        this.model=model
    }
    getModel(){
        console.log(this.model);
    }
}
const myPrinter = new Printer('TX-200')
myPrinter.getModel()