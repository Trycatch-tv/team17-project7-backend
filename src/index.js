const express = require('express');
const app = express();

//Funcion que permite monitorear servidor en el desarrollo (NO NECESARIO)
const morgan = require('morgan');
app.use(morgan('dev'));

app.set('json spaces',2);

//middlewares
app.use(express.urlencoded({extended: false})); 
app.use(express.json());

//Routes
app.use(require('./routes/index'));

//Arrancamos servidor
app.listen(3001, () =>{
  console.log(`Server on port ${3001}`);
});