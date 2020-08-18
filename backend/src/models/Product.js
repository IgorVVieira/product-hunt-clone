const { Model, DataTypes } = require('sequelize');
const sequelizePaginate = require('sequelize-paginate');

class Product extends Model {
    static init(sequelize) {
        super.init({
            title: DataTypes.STRING,
            description: DataTypes.STRING,
            url: DataTypes.STRING,
        }, {
            sequelize
        });
    }
}

sequelizePaginate.paginate(Product);

module.exports = Product;