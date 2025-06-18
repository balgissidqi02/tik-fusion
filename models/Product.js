const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Product = sequelize.define('Product', {
  product_id: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  name: DataTypes.STRING,
  status: DataTypes.STRING,
  price: DataTypes.DECIMAL,
  quantity: DataTypes.INTEGER
}, {
  timestamps: true
});

module.exports = Product;
