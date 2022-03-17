const mongoose = require('mongoose')

class Connection {
  constructor() {
    this.dataBaseConnectionMongoDB()
  }

  dataBaseConnectionMongoDB() {
    this.mongoDBConnection = mongoose
      .connect('mongodb://localhost:27017/h7cursos')
      .then(() => {
        console.log('Conexão com MongoDB realizada com sucesso!')
      })
      .catch(erro => {
        console.log(
          `Erro: Conexão com MongoDB não foi realizada com sucesso! ${erro}`
        )
      })
  }
}

module.exports = new Connection()
