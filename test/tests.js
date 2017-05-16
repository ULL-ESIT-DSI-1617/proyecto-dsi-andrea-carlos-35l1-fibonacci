var Fibonacci = require("../lib/Fibonacci.js");
var should = require("should")

describe("Función comparar", function(){
  it("No existen secuencias declaradas", function() {
    var mySecuencia = new Fiboancci(5);
    var result = mySecuencia.getSecuencia();
    result.should.be.equal("0, 1, 1, 2, 3");
  }
  it("No existen operaciones declaradas", function() {
    var mySecuencia = new Secuencia(5);
    var prueba = new Fibonacci(5);
    var result = mySecuencia.operar(prueba, "Igual")
    result.should.be.equal("0, 1, 1, 2, 3");
  }

})


/*
var assert = chai.assert;

suite('Fibonacci', function() {
    test('Se declara correctamenete la sucesión', function() {
        var mySecuencia = new Fibonacci(5);
        assert.deepEqual(mySecuencia.getSecuencia(), "Secuencia no definida");
    });
    test('No existen operaciones declaradas', function() {
        var mySecuencia = new Fibonacci(5);

        var prueba = new Fibonacci(5);
        assert.deepEqual(mySecuencia.operar(prueba, "Igual"), "Operación no definida");
    });

});
*/
