module.exports = function (sequelize, DataTypes){
    let alias = "Usuarios"

    let cols = {
        id: {
            type: DataTypes.INTEGER
        },
        first_name: {
            type: DataTypes.STRING,
            primaryKey: true,
            autoIncrement: true
        },
        last_name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        phone: {
            type: DataTypes.INTEGER
        },
        password: {
            //type: DataTypes.STRING
        },
        price: {
            type: DataTypes.INTEGER
        }

    }

    let config = {
        tableName: "usuarios",
        timestamps: false
    }
    let Usuarios = sequelize.define (alias,cols,config);
    return Usuarios;
}