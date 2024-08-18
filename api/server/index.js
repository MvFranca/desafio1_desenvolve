const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Produto = require('../models/Produto');
const conectaNaDatabase = require('../config/dbConnect');
const productGet = require('../controllers/products');

const app = express();

async function startServer() {
  try {
      const conexao = await conectaNaDatabase();

      conexao.on('error', (erro) => {
          console.log('Erro de conexão', erro);
      });

      conexao.once('open', () => {
          console.log('Conexão com o banco feita com sucesso!');
      });

      app.use(cors());
      app.use(express.json());


      app.get('/api/produtos', productGet);

      app.post('/api/produtos', async (req, res) => {

        const produto = await req.body

          try {
              await conectaNaDatabase();
              const resultado = await Produto.insertMany(produto);
              res.status(200).json({message: "Produto cadastrado com sucesso!", resultado}); 
          } catch (err) {
              res.status(500).json({ message: err.message });
          }
      });

      app.listen(3000, () => {
          console.log('Servidor rodando na porta 3000');
      });
  } catch (err) {
      console.error('Erro ao iniciar o servidor:', err);
  }
}

startServer();
