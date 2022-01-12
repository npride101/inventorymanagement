const mongoose = require('mongoose');

// Define schema for my data entries, a schema is the JSON format for data entries
// *** Need good reference for this
const EntrySchema = new mongoose.Schema({  
      merchant: {type: String, default: null},
      products: [{name: {type: String, default: null}, 
                  price: {type: Number, min: 0, default: null},
                  current_count: {type: Number, min: 0, default: null}, 
                  orders: [{date: {type: Date, default: Date.now}, count:{type:Number, default:null}}] 
      }]
  });
 
module.exports = Entry = mongoose.model("entry", EntrySchema);