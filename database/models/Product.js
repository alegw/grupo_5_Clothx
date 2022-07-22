const { production } = require("../config/config");

module.exports = (sequelize, DataTypes) => {
    let alias = "Product";
    let cols = {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: DataTypes.STRING
        },
        description:{
            type: DataTypes.STRING
        },
        image:{
            type: DataTypes.STRING
        },
        category_id:{
            type: DataTypes.INTEGER
        },
        color:{
            type: DataTypes.STRING
        },
        price:{
            type: DataTypes.INTEGER
        },
    };

    let config = {
        tableName: "products",
        timestamps: false,
    };

    const Product = sequelize.define(alias, cols, config)

    Product.associate = models => {
        Product.belongsTo(models.Category, {
            as:"category", foreignKey: "category_id"
        })
    }

    return Product;

}