const mongoose = require('mongoose');
require('dotenv').config();

async function conectaNaDatabase() {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Conectado ao MongoDB com sucesso!');
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB:', error);
    }
    return mongoose.connection;
}

module.exports = conectaNaDatabase;
