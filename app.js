const express = require('express');
const app = express()

const {engine} = require('express-handlebars')
const Pessoas = require('./models/Pessoas')
//bootstrap
const path = require('path')
app.use(express.static(path.join(__dirname, 'public')))

//config handlebars
app.engine('handlebars', engine({defaultLayout: 'main'}))
app.set('view engine','handlebars')

//config body-parser
app.use(express.urlencoded({extended:false}))
app.use(express.json())

//rotas
app.get('/', function(req,res){
        Pessoas.findAll(({ raw: true })).then(function(pessoas){
        res.render('home', {pessoas : pessoas})
    })
})

app.get('/cadastro', function(req,res){
    res.render('formulario')
})

app.post('/add', function(req, res){
    Pessoas.create({
        nome:req.body.nome,
        sobrenome:req.body.sobrenome,
        idade:req.body.idade 
    }).then(function(){
        res.redirect('/')
    }).catch(function(error){
        res.send('falha ao cadastrar usuarioo' + error)
    })
})

app.get('/deletar/:id', function(req, res){
    Pessoas.destroy({where: {'id' : req.params.id}}).then(function(){
        res.redirect('/cadastro')
    }).catch(function(error){
    res.send('error'+ error)
  })
})



app.listen('8081', function(){
    console.log('Rodando servidorr')
})