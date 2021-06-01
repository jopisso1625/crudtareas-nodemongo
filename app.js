const express = require('express');

const morgan = require('morgan');
const app = express();

const bodyParser = require('body-parser');

const tareas = require('./routes/tareas');

require('dotenv').config()

const port = process.env.PORT || 3000;

const mongoose = require('mongoose')


const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.kka4u.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;


mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Base de datos conectada'))
    .catch(e => console.log(e))


app.set('views', __dirname + '/views');
//app.set('views', path.join(__dirname + 'views'));
app.set('view engine', 'ejs');


app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // body en formato json
//body formulario

app.use('/', tareas);



app.listen(port, () => {
    console.log("Server listen port 3000")
})

