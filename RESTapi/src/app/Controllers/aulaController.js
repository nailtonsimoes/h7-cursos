const mongoose = require('mongoose')
require('../../models/aula')

const Aula = mongoose.model('aula')

class aulaController {
  adicionar(req, res) {
    const aula = Aula.create(req.body, err => {
      if (err)
        return res.status(400).json({
          error: true,
          message: 'Erro: Aula Não cadastrada..'
        })
      return res.status(200).json({
        error: false,
        message: 'Aula cadastrada com sucesso!..'
      })
    })
  }

  listar(req, res) {
    Aula.find({})
      .then(aula => {
        return res.json(aula)
      })
      .catch(erro => {
        return res.status(400).json({
          error: true,
          message: 'Nenhuma aula encontrada..'
        })
      })
  }

  vizualizar(req, res) {
    Aula.findOne({ _id: req.params.id })
      .then(aula => {
        return res.json(aula)
      })
      .catch(erro => {
        return res.status(400).json({
          error: true,
          message: 'Nehuma aula encontrada..'
        })
      })
  }

  editar(req, res) {
    const aula = Aula.updateOne({ _id: req.params.id }, req.body, err => {
      if (err)
        return res.status(400).json({
          error: true,
          message: 'Erro: Aula não foi editada..'
        })
      return res.json({
        error: false,
        message: 'Aula editada com sucesso!'
      })
    })
  }

  deletar(req, res) {
    const aula = Aula.deleteOne({ _id: req.params.id }, err => {
      if (err)
        return res.status(400).json({
          error: true,
          message: 'Error: Aula não foi apagada...'
        })
      return res.json({
        error: false,
        message: 'Aula deletada com sucesso!'
      })
    })
  }
}

module.exports = new aulaController()
