module.exports = (sequelize, dataTypes) => {
    let alias = "Users";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        first_name: {
            type: dataTypes.STRING,
        },
        last_name: {
            type: dataTypes.STRING,
        },
        email: {
            type: dataTypes.STRING, 
        },
        phone: {
            type: dataTypes.INTEGER,
        },
        password: {
            type: dataTypes.STRING,
        },
        image: {
            type: dataTypes.STRING,
        }       
        
    };
    
    let config = {
        tableName: "users",
        timestamps: false,
        paranoid: true,
        deleteAt: "destroyTime"
    };

    const User = sequelize.define( alias, cols, config );

   User.associate = models => {
		
/* 		User.belongsTo(models.User_category, {
			as: 'categories',
            foreignKey: 'category_id'
			
		}); */


	}


    return User;

}