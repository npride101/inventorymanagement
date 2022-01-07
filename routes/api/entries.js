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

module.exports = router;