const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const Produtos = require('./models/Produtos')

require('./models/db')

app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())

app.post('/cadastro', (req, res) => {
    Produtos.create({
        nome: req.body.nome,
        preco: req.body.preco,
        descricao: req.body.descricao
    }).then(function(){
        res.send("Produto cadastrado")
    }).catch(function(erro){
         res.send("Error ao cadastrar" + erro)
    })
})

app.listen(8081, () =>{
    console.log("Servidor esta rodandoo...")
});

