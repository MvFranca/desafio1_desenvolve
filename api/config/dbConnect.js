const mongoose = require('mongoose');
require('dotenv').config();

async function conectaNaDatabase() {
    
    mongoose.connect("mongodb+srv://admin:admin123@cluster0.lwmsmwe.mongodb.net/produtos?retryWrites=true&w=majority&appName=Cluster0");
    return mongoose.connection;
}

module.exports = conectaNaDatabase;
