const express = require('express');
const router = express.Router();

const cartItems = [
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


router.use(express.json());

// Grabs all cart items
router.get('/cart-items/', (req, res) => {

    res.json(cartItems)
})


// 
router.get('/cart-items/:id', (req, res) => {
    console.log(req.params.id)
    const found = cartItems.find(item => item.id === +req.params.id)

    if (!found) {
        res.status(404).send("The cart item could not be found")
    }

    res.json(found)
})



router.post('/cart-items', (req, res) => {
    
    const quantity = parseInt(req.body.quantity)

    if(!quantity) {
        return res.status(400).send("Invalid Quantity")
    }
    
    
    const newItem = {
        id: cartItems.length + 1,
        product: req.body.product,
        price: req.body.price,
        quantity: quantity
    }

    cartItems.push(newItem)

    res.status(201).json(newItem)

})



router.put('/cart-items/:id', (req, res) => {
    const found = cartItems.find(item => item.id === +req.params.id)

    if (found) {
        found.price = req.body.price
        found.quantity = req.body.quantity
        found.product = req.body.product

        res.json(found)
    } else {
        res.status(404).send('The cart item could not be found')
    }
})

router.delete('/cart-items/:id', (req, res) => {
    // const found = cartItems.find(item => item.id === +req.params.id)

    // if (found) {
    //     cartItems.splice(found)
    //     res.status(204).send("The item was removed from the cart")
    // } else {
    //     res.status(404).send('The cart item could not be found')
    // }

    for (let cartItem of cartItems) {
        if (!cartItem === req.params.id) {
            cartItems.splice(cartItem)
            res.status(204).send("The item was taken out of the cart")
        } else {
            res.status(404).send("the item could not be found")
        }
    }
})



module.exports = router;

