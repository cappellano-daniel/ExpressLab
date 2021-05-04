const express = require('express');
const cartItems = express.Router();

const items = [
    {
        id: 1,
        product: 'Doritos',
        price: '$3.99',
        quantity: 1
    },
    {
        id: 2,
        product: 'Dr. Pepper',
        price: '$1.99',
        quantity: 2
    },
    {
        id: 3,
        product: 'AirPod Pros',
        price: '$249.99',
        quantity: 1
    },
    {
        id: 4,
        product: 'Monster Energy Green',
        price: '$3.99',
        quantity: 1
    }
]


cartItems.use(express.json());

// Grabs all cart items
cartItems.get('/cart-items/items', (req, res) => {

    res.json(items)
})


// 
cartItems.get('/cart-items/items/:id', (req, res) => {

    console.log(req.params.id)
    res.json(items.id)
})



cartItems.post('/cart-items', (req, res) => {

    console.log(req.body);

    res.json('Adding a cart item..')
})



cartItems.put('/cart-items', (req, res) => {

    res.json('Updating a cart item..')
})

cartItems.delete('/cart-items', (req, res) => {

    res.json('Deleting a cart item..')
})



module.exports = cartItems;

