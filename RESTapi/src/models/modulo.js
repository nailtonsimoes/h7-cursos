const mongoose = require('mongoose')

const Modulo = new mongoose.Schema(
  {
    id: {
      type: String,
      required: false
    },
    nome: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

mongoose.model('modulo', Modulo)
