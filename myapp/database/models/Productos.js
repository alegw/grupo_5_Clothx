module.exports = function (sequelize, DataTypes){
    let alias = "Productos"

    let cols = {
        id: {
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING,
            primaryKey: true,
            autoIncrement: true
        },
        description: {
            type: DataTypes.STRING
        },
        image: {
            //type: DataTypes.PHOTOS??
        },
        category: {
            type: DataTypes.STRING
        },
        colors: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.INTEGER
        }

    }

    let config = {
        tableName: "productos",
        timestamps: false
    }
    let Productos = sequelize.define (alias,cols,config);
    return Productos;
}