# nodejs-express-calculadora-routes-services

## 1. Instalar dependencias
```
npm install
```

## 2. Ejecutar
```
npm run dev
```

## 3. Docker build
```
docker build -t nodejs-calculadora:v1 .
```

## 4. Docker run
```
docker run -p 4000:3000 nodejs-calculadora:v1
```

## 5. Enviar a Dockerhub
```
docker login –-u juliopari –-p *****
docker tag nodejs-calculadora:v1 juliopari/nodejs-calculadora:v1
docker push juliopari/nodejs-calculadora:v1
```

## 6. Jest (test)

Se utiliza Jest como librería de apoyo para las pruebas unitarias, se obtiene coverage de 100%.
Al implementar gradualmente, se obtiene coverage también gradualmente
40% coverage  : sumar(): 
60% coverage  : sumar(), restar()
80% coverage  : sumar(), restar(), multiplicar()
100% coverage : sumar(), restar(), multiplicar(), dividir()

Pasos para configurar Jest en el proyecto, desde cero
#### 1. Ejecutar: npm install --save-dev jest
#### 2. Agregar en el package.json
"scripts": {  
  "test": "jest"
}
#### 3. Crear el archivo calculadora.services.test.js e ir agregando las pruebas
#### 4. Ejecutar comando (incluye reporte): npm test -- --coverage

<img src='https://github.com/juliopari/nodejs-express-jest-calculadora-routes-services/blob/main/jest-test.png' />
