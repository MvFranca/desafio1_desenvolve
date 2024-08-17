const mongoose = require('mongoose');
require('dotenv').config();

async function conectaNaDatabase() {
    
    mongoose.connect(process.env.URL_CONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    return mongoose.connection;
}

module.exports = conectaNaDatabase;
