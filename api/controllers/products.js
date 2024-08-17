const Produto = require("../models/Produto");

 const productGet =  async (req, res) => {
    try {
        const produtos = await Produto.find({});
        res.status(200).json(produtos); 
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = productGet