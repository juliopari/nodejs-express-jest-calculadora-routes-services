class CalculadoraService{

  constructor(){
    this.resultado = 0;
  }

  sumar(numero1, numero2){
    const resultado = numero1 + numero2;
    return resultado;
  }

  restar(numero1, numero2){
    const resultado = numero1 - numero2;
    return resultado;
  }

  multiplicar(numero1, numero2){
    const resultado = numero1 * numero2;
    return resultado;
  }

  dividir(numero1, numero2){
    const resultado = numero1 / numero2;
    return resultado;
  }

}

module.exports = CalculadoraService;
