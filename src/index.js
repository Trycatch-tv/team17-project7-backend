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
=======
import './config/env.js'
import express from 'express'
import cors from 'cors'
import { movieRouter, reviewRouter } from './routes/index.js'

const app = express()

app.use(cors())
//middlewares
app.use(express.json());// datos tipo json
app.use(express.urlencoded({extended:false})); // con esto solo recibiremos datos simples string

//routes
app.use(require('./routes/indes'));
app.use('/api/reviews', reviewRouter)
app.use('/api/movies', movieRouter)

// Inicializa el servidor
app.listen(3000)
console.log('Server running on port 3000')