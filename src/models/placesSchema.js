const mongoose = require("mongoose")

const placesSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  nome: {
    type: String,
    required: true,
  }, 
  endereco: {
    type: String,
    required: true,
  }, 
  cidade: {
    type: String,
    required: true
  },
  telefone: {
    type: Number,
    required: true
  }, 
})

module.exports = mongoose.model("place", placesSchema)

