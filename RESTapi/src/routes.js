const { Router } = require('express')
const aulaController = require('./app/Controllers/aulaController')
const moduloController = require('./app/Controllers/moduloController')
const userController = require('./app/Controllers/userController')

const routes = new Router()

routes.post('/api/modulos/adicionar', moduloController.adicionar)
routes.get('/api/modulos', moduloController.listar)
routes.get('/api/modulos/:id', moduloController.vizualizar)
routes.put('/api/modulos/editar/:id', moduloController.editar)
routes.delete('/api/modulos/deletar/:id', moduloController.deletar)

routes.post('/api/aulas', aulaController.adicionar)
routes.get('/api/aulas', aulaController.listar)
routes.get('/api/aulas/:id', aulaController.vizualizar)
routes.put('/api/aulas/:id', aulaController.editar)
routes.delete('/api/aulas/:id', aulaController.deletar)

routes.post('/api/user', userController.store)

module.exports = routes
