const mongoose = require('mongoose');

const ProdutoSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  nome: { type: String, required: true },
  imagem: { type: String, required: true },
  descricao: { type: String, required: true },
  preco: { type: Number, required: true }
}, {versionKey: false});

module.exports = mongoose.model('perfumes', ProdutoSchema);
