const db = require('./db')

const Pessoas = db.sequelize.define('pessoas', {
    nome: {
        type: db.Sequelize.STRING
    },
    sobrenome: {
        type :db.Sequelize.STRING
    },
    idade : {
        type: db.Sequelize.INTEGER
    }
});

module.exports = Pessoas
//Pessoas.sync({force: false})
