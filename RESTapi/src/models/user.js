const mongoose = require('mongoose')

const User = new mongoose.Schema(
  {
    nome: { type: String, required: true },
    email: { type: String, required: true },
    senha: { type: String, required: true }
  },
  {
    timestamps: true
  }
)

mongoose.model('user', User)
