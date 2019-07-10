const Sequelize = require('sequelize');
const sequelize = require('./index.js');

const { Model } = Sequelize;

const tableName = 'lorendell';

class lorendell extends Model {}
lorendell.init({
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  city: Sequelize.STRING,
  property_avail: Sequelize.STRING,
  location_name: Sequelize.STRING,
  photo_url: Sequelize.STRING,
  price: Sequelize.INTEGER,
  rating: Sequelize.STRING,
  review_count: Sequelize.INTEGER,
}, {
  sequelize,
  modelName: tableName,
  timestamps: false,
  underscored: true,
});

module.exports.lorendell = lorendell;
module.exports.tableName = tableName;
