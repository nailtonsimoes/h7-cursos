const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const yup = require('yup')
const jwt = require('jsonwebtoken')

require('../../models/user')

const User = mongoose.model('user')

class userController {
  async store(req, res) {
    //validação atravez do yup schema: Inicio
    let schema = yup.object().shape({
      nome: yup.string().required(),
      email: yup.string().email().required(),
      senha: yup.string().required()
    })

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        error: true,
        message: 'Dados invalidos'
      })
    }
    //validação atravez do yup schema: FIM

    //verificando se o usuario existe no bd
    let userExist = await User.findOne({ email: req.body.email })

    if (userExist) {
      return res.status(400).json({
        error: true,
        message: 'Usuario ja existe!'
      })
    }

    const { nome, email, senha } = req.body
    const dados = { nome, email, senha }

    //criptografa a senha do Usuario antes de guardar no BD
    dados.senha = await bcrypt.hash(dados.senha, 8)

    await User.create(dados, err => {
      if (err)
        return res.status(400).json({
          error: true,
          message: 'Erro ao Cadastrar Usuario no MongoDB'
        })

      return res.status(200).json({
        error: false,
        message: 'Usuario Cadastrado no MongoDB!'
      })
    })
  }
}

module.exports = new userController()
