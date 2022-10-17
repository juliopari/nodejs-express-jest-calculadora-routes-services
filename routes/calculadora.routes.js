const express = require('express');
const CalculadoraService = require('../services/calculadora.services');
const router = express.Router();

const calculadoraService = new CalculadoraService();

router.post('/sumar', (req, res) => {

  const body = req.body;
  const result = calculadoraService.sumar(body.numero1, body.numero2);

  res.json(
    {
      resultado: result
    }
  );

});

router.post('/restar', (req, res) => {

  const body = req.body;
  const result = calculadoraService.restar(body.numero1, body.numero2);

  res.json(
    {
      resultado: result
    }
  );

});

router.post('/multiplicar', (req, res) => {

  const body = req.body;
  const result = calculadoraService.multiplicar(body.numero1, body.numero2);

  res.json(
    {
      resultado: result
    }
  );

});

router.post('/dividir', (req, res) => {

  const body = req.body;

  if(body.numero2 === 0){
    res.status(500).json(
      {
        mensaje: 'División entre 0 no permitida'
      }
    );
  }else{

    const result = calculadoraService.dividir(body.numero1, body.numero2);

    res.status(200).json(
      {
        resultado: result
      }
    );
  }

});

module.exports = router;
