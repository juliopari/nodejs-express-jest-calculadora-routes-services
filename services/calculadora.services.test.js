const CalculadoraService = require('../services/calculadora.services');

const calculadoraService = new CalculadoraService();

describe('Test- CalculadoraService', () => {

  it('El valor esperado debe devolver la suma de dos números enteros', () => {
    expect(calculadoraService.sumar(1,2)).toBe(3);
  })

  it('El valor esperado debe devolver la resta de dos números enteros', () => {
    expect(calculadoraService.restar(8,2)).toBe(6);
  })

  it('El valor esperado debe devolver el producto de dos números enteros', () => {
    expect(calculadoraService.multiplicar(5,2)).toBe(10);
  })

  it('El valor esperado debe devolver la devisión de dos números enteros', () => {
    expect(calculadoraService.dividir(10,2)).toBe(5);
  })

})


/*
test('Test sumar()', () => {
  expect(calculadoraService.sumar(1,2)).toBe(3);
});

test('Test restar()', () => {
  expect(calculadoraService.restar(8,2)).toBe(6);
});

test('Test multiplicar()', () => {
  expect(calculadoraService.multiplicar(5,2)).toBe(10);
});

test('Test dividir()', () => {
  expect(calculadoraService.dividir(10,2)).toBe(5);
});
*/
