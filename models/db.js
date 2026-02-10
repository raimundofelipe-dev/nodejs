const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste','felipe','123456', {
    host: 'localhost',
    dialect: 'mysql' 
})



module.exports = { Sequelize : Sequelize,
                   sequelize : sequelize };


/*
                   sequelize.authenticate().then(function(){
    console.log('Conectado com o banco')
}).catch(function(error){
    console.log('Falha ao se conctar com o banco'+ error)
})
     */