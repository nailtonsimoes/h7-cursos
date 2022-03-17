const express = require('express') //chamando o express
const cors = require('cors') //chamando o cors
const routes = require('./routes') //setando rotas

require('./config/connection')

class App {
  constructor() {
    this.app = express()
    this.middlewares()
    this.routes()
    this.models()
  }

  middlewares() {
    this.app.use(express.json()) // setando o uso de json

    this.app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*')
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
      res.header(
        'Access-Control-Allow-Header',
        'Access, Content-type, Authorization, Accept, Origin, X-Requested-With'
      )

      this.app.use(cors())
      next()
    })
  }

  routes() {
    this.app.use(routes)
  }

  models() {}
}

module.exports = new App().app
