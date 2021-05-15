const express = require('express');
const router = express.Router();

const products = require('../../../store/products');

router.get('api/products', async (req,res) => {
    const products = await Products.find()
    .then((products)=>{
        response.success(req,res,products,200);
    })
    .catch((err) =>{
        response.error(req, res, err.message, 500); 

    });;
    res.render(index, {
        products
    });
});

module.exports = router; 
