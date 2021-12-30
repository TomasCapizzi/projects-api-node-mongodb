require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Projects = require('./api/projects');
const config = require('./config');
const cors = require('cors');

const app = express(); 

app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());
app.use(cors());

//Route + Controller
app.use('/api/projects', Projects)

mongoose.connect(
    config.db_uri,
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
