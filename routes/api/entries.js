const express = require('express');
const router = express.Router();

// Import entry model
const Entry = require('../../models/Entry');

// Create routes
// @route GET api/entries
// @desc Get all entries
router.get('/', (req, res) => {
    Entry.find()
        .then(entries => {
            res.json(entries)
            console.log("Get request received");
        })
});

// Create routes
// @route POST api/entries
// @desc Create an entry
router.post('/', (req, res) => { 
    const newEntry = new Entry({merchant: req.body.merchant, products:[]});

    req.body.products.forEach(product => {
            newEntry.products.push({name: product.name,
                                    price: product.price,
                                    current_count: product.current_count,
                                    orders: product.orders});
    });

    newEntry.save().then(entry => res.json(entry));

});
router.delete('/:id', (req, res) => { 
    Entry.findByIdAndDelete(req.params.id)
    .then(() => res.json({success: true}))
    .catch((err) => res.status(404).json({success: false})); 
});

module.exports = router;   