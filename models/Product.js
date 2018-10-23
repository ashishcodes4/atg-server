const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const ProductSchema = new Schema ({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  }
})

mongoose.model('product', ProductSchema);