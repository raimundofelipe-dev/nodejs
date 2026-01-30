const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    "cadastro",
    "felipe",
    "123456",
    {
        host: "localhost",
        dialect: "mysql"
    }
)
sequelize.authenticate().then((function(){
    console.log("Banco de dados conectado com suscesso!")
})).catch((function(erro){
    console.log(" Error ao se conectar com o Banco de dados" + erro)
}))

module.exports = {
    sequelize,
    Sequelize
}