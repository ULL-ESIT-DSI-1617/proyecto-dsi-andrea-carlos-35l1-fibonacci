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
