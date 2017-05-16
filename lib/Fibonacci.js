"use strict"
var Secuencia = require('../../Secuencia/lib/Secuencia.js');
/**
 * Proyecto: Comparador de secuencias.
 *
 * Esta clase es la clase heredará de Secuencia
 * En esta clase se describe la sucesión de Fibonacci.
 * @param {number} num
 */
class Fibonacci extends Secuencia {
  /**
   * Se le pasa num con el número de elementos de la secuencia que se desea.
   * @constructs [Secuencia]
   * @param {number} num
   *
   */
  constructor(num)
  {
    super(num);
    this.sec[0] = 0;
    this.sec[1] = 1;
    this.text =this.sec[0]+', '+this.sec[1];
    //this.getSecuencia();
  }
  /**
   * Con este método se definirán los elementos de la secuencia
   * @param {number} num
   * @return {String}
   */
  secuencia(num)
  {
    var i = 0;
    for (i = this.sec.length; i < this.num; i++)
    {
      this.sec[i] = this.sec[i-1] + this.sec[i-2];
      this.text = this.text + ', ' + this.sec[i];

    }
    return this.text;
  }
  /**
   * Devuelve un array con todos los elementos de la secuencia.
   * 
   * @return {String}
   */
  getVals()
  {
    var i = 0;
    for (i = this.sec.length; i < this.num; i++)
    {
      this.sec[i] = this.sec[i-1] + this.sec[i-2];
    }
    return this.sec;
  }
}
Secuencia.type.Fibonacci = Fibonacci;
module.exports = Fibonacci;
