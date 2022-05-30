const mongoose = require('mongoose')

const Aula = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: false
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
