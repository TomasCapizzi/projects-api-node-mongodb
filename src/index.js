require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
//Mongoose
const mongoose = require('mongoose');
//Controller
const Projects = require('./api/projects');


//Variables de entorno traidas por config
const config = require('./config');

//Cors
const cors = require('cors');

const app = express(); 

app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'))

//Route + Controller
app.use('/api/projects', Projects)


//Conexión a MongoDB
mongoose.connect(
    config.db_uri, //"mongodb://localhost/projects"
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }, 
    (err, res)=> {
        err && console.log('Error conectando a la db' + err);
        app.listen(config.port, ()=>{
            console.log('Servidor escuchando en el puerto ',config.port);
        })
        app.get('/', (req,res) => {
            res.send('Tomas Capizzi | Projects API')
        } )
    }
)
