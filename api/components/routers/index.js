const express = require('express');
const router = express.Router();

const Category = require('../../../store/categories'); 
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

router.get('api/products/:id', async (req,res) => {
    const { id } = req.params;
    const products = await Products.find({_id: id })
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


router.post('api/products/', async (req,res) => {
    const products = new Products(req.body);
    await products.save();
    res.redirect('api/products');
});

router.delete('api/products/:id', async (req,res) => {
    const { id } = req.params;
    await prodcuts.remove({_id: id});
    res.redirect('api/products');
});

router.put('api/products/:id', async (req,res) => {
    await products.update(req.body);
    res.redirect('api/products');
});


router.get('api/categories/', async (req,res) => {
    const categories = await Category.find()
    .then((categories)=>{
        response.success(req,res,categories,200);
    })
    .catch((err) =>{
        response.error(req, res, err.message, 500); 

    });;
    res.render(index, {
        categories
    });
});


router.get('api/categories/:id', async (req,res) => {
    const { id } = req.params;
    const category = await Category.find({_id: id})
    .then((category)=>{
        response.success(req,res,category,200);
    })
    .catch((err) =>{
        response.error(req, res, err.message, 500); 

    });;
    res.render(index, {
        categories
    });
});


router.post('api/categories/', async (req,res) => {
    const category = new Category(req.body);
    await category.save();
    res.redirect('/categories');
});

router.delete('api/categories/:id', async (req,res) => {
    const { id } = req.params;
    await Category.remove({_id: id});
    res.redirect('api/categories');
});

router.put('api/categories/:id', async (req,res) => {
    await category.update(req.body);
    res.redirect('api/categories');
});

module.exports = router;