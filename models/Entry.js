const mongoose = require('mongoose');

// Define schema for my data entries, a schema is the JSON format for data entries
// *** Need good reference for this
const EntrySchema = new mongoose.Schema({
    id: {
      type: Number,
      required: true
    },
    products:{
        type: Array,
        items: {
            type: Object,
            properties: {
                id:{
                    type: Number
                },
                name:  {
                    type: String
                },
                price: {
                    type: Number,
                    min: 0
                }
            }
        }
    }
  });
 
module.exports = Entry = mongoose.model("entry", EntrySchema);