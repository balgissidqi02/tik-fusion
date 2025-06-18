const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Token = sequelize.define('Token', {
  access_token: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  refresh_token: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
 seller_id: {
  type: DataTypes.STRING,
  allowNull: false, 
  unique: true,     
},
expired_at: {
  type: DataTypes.DATE,
  allowNull: true,
}
}, {
  timestamps: true,
});

module.exports = Token;
