const mongoose = require('mongoose')

const Modulo = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true
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
