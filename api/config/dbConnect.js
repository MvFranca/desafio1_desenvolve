const mongoose = require('mongoose');
require('dotenv').config();

async function conectaNaDatabase() {
    
    mongoose.connect(process.env.URL_CONNECT);
    return mongoose.connection;
}

module.exports = conectaNaDatabase;
