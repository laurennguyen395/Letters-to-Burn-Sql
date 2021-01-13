'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class letter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  letter.init({
    userId: DataTypes.INTEGER,
    recipient: DataTypes.STRING,
    sender: DataTypes.STRING,
    subjectLine: DataTypes.STRING,
    body: DataTypes.TEXT,
    date: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'letter',
  });
  return letter;
};