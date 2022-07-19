module.exports = (sequelize, dataTypes) => {
    let alias = "Colors";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true 
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
		Colors.hasMany(models.Product, {
			as: 'colors',
            foreignKey: 'colors_id'
			
		}); 

	}


    return Product_category;

}