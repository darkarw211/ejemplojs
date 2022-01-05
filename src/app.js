const express = require('express');
const log = require('morgan');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require ('mongoose');

const indexRoutes = require('./routes/index.js');

//escuchar servidor
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view egine', 'ejs');

// conexion a BD

mongoose.connect('mongodb+srv://vida:123tamarindo@cluster0.mxuyj.mongodb.net/vidan?retryWrites=true&w=majority').
then(bd =>console.log('BD se concectó')).catch(err=>console.log('err'));
//middleware
app.use(log('dev'));
app.use(bodyParser.urlencoded({extended: false}));


//rutas 
app.use('/', indexRoutes);



app.listen(app.get('port'), () =>{
    console.log('servidor funcionando en el puerto', app.get('port'))
});