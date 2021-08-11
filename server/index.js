const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');



var employeeController = require('./controllers/employeeController.js');

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));


mongoose.connect('mongodb+srv://Prasad_Database:Prasad_Databse123@cluster0.1qfop.mongodb.net/MEAN_STACK_CRUD?retryWrites=true&w=majority' , {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex : true})
    .then(()=>app.listen(3000, ()=>console.log(`Server running 3000`)))
    .catch((err)=>console.log(err))

mongoose.set('useFindAndModify', false)

app.use('/employees', employeeController);