const CalculadoraService = require('../services/calculadora.services');

const calculadoraService = new CalculadoraService();

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
