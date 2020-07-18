'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Request extends Model {
    static associate(models) {
      // define association here
    }
  };
  Request.init({
    name: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    beverage: DataTypes.STRING,
    address: DataTypes.STRING,
    zip_code: DataTypes.STRING,
    city: DataTypes.STRING,
    delivery: DataTypes.BOOLEAN,
    client: DataTypes.STRING,
    payment: DataTypes.STRING,
    request_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Request',
  });
  return Request;
};