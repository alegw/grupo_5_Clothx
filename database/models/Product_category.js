module.exports = (sequelize, dataTypes) => {
    let alias = "Product_category";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        category: {
            type: dataTypes.STRING,
        },
        name: {
            type: dataTypes.STRING,
        }
    };
    
    let config = {
        tableName: "product_categories",
        timestamps: false,
        paranoid: true,
        deleteAt: "destroyTime"
    };

    const Product_category = sequelize.define( alias, cols, config );

    Product_category.associate = models => {
		
        // tiene muchos:
		Product_category.hasMany(models.Product, {
			as: 'products',
            foreignKey: 'category_id'
			
		});

	}


    return Product_category;

}