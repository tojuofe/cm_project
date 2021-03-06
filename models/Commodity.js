const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const CommoditySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'admin',
  },
  img: {
    type: String,
  },
  product_name: {
    type: String,
  },
  farm_name: {
    type: String,
  },
  description: {
    type: String,
  },
  buying_price: {
    type: String,
  },
  selling_price: {
    type: String,
  },
  duration: {
    type: String,
  },
  unit_number: {
    type: String,
  },
  starting_unit: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

CommoditySchema.plugin(mongoosePaginate);
module.exports = mongoose.model('commoditie', CommoditySchema);
