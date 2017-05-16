var Fibonacci = require("../lib/Fibonacci.js");
var should = require("should")

describe("Función comparar", function(){
  it("No existen secuencias declaradas", function() {
    var mySecuencia = new Fibonacci(5);
    var result = mySecuencia.getSecuencia();
    result.should.be.equal("0, 1, 1, 2, 3");
  })
  it("No existen operaciones declaradas", function() {
    var mySecuencia = new Fibonacci(5);
    var prueba = new Fibonacci(5);
    var result = mySecuencia.operar(prueba, "Igual")
    result.should.be.equal("Operación no definida");
  })

})
