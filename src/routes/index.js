const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('index.ejs',{
        nombre:'vidaña'
    })
});

router.get('/saludo',(req,res)=>{
    res.send('Hola, este es el saludo desde express para recuperar la materia T-T')
});

router.get('/login',(req,res)=>{
    res.render('login.ejs')
});

router.get('/studiambre',(req,res)=>{
    res.render('studiambre.ejs')
});


module.exports = router;