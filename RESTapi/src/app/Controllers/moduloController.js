const mongoose = require('mongoose')
require('../../models/modulo')

const Modulo = mongoose.model('modulo')

class moduloController {
  adicionar(req, res) {
    Modulo.create(req.body, err => {
      if (err)
        return res.status(400).json({
          error: true,
          message: 'Erro: Modulo Não cadastrado..'
        })
      return res.status(200).json({
        error: false,
        message: 'Modulo cadastrado com sucesso!..'
      })
    })
  }

  listar(req, res) {
    Modulo.find({})
      .then(modulo => {
        return res.json(modulo)
      })
      .catch(erro => {
        return res.status(400).json({
          error: true,
          message: 'Nenhum modulo encontrado!'
        })
      })
  }

  vizualizar(req, res) {
    Modulo.findOne({ _id: req.params.id })
      .then(modulo => {
        return res.json(modulo)
      })
      .catch(erro => {
        return res.status(400).json({
          error: true,
          message: 'Nehum modulo encontrado..'
        })
      })
  }

  editar(req, res) {
    const modulo = Modulo.updateOne({ _id: req.params.id }, req.body, err => {
      if (err)
        return res.status(400).json({
          error: true,
          message: 'Erro: Modulo não foi editado..'
        })
      return res.json({
        error: false,
        message: 'Modulo editado com sucesso!'
      })
    })
  }

  deletar(req, res) {
    const modulo = Modulo.deleteOne({ _id: req.params.id }, err => {
      if (err)
        return res.status(400).json({
          error: true,
          message: 'Error: Modulo não foi apagado...'
        })
      return res.json({
        error: false,
        message: 'modulo deletado com sucesso!'
      })
    })
  }
}

module.exports = new moduloController()
