module.exports = (sequelize, dataTypes) => {
    let alias = "Product";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        },
        description: {
            type: dataTypes.STRING
        },
        image: {
            type: dataTypes.STRING
        },
        category_id: {
            type: dataTypes.INTEGER
        },
        colors_id: {
            type: dataTypes.STRING
        },
        price: {
            type: dataTypes.DECIMAL
        }

    };

    let config = {
        tableName: "products",
        timestamps: false,
        paranoid: true,
        deleteAt: "destroyTime"
    };

    const Product = sequelize.define(alias, cols, config);

    Product.associate = models => {
        // pertenece a:
        Product.belongsTo(models.Product_category, {
            as: 'categories',
            foreignKey: 'category_id'

        });
    }

 

    return Product;

}