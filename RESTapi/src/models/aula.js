const mongoose = require('mongoose')

const Aula = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true
    },
    nome: {
      type: String,
      required: true
    },
    modulo: {
      type: String,
      required: true
    },
    data: {
      type: Date,
      required: true
    }
  },
  {
    timestamps: true
  }
)

mongoose.model('aula', Aula)
