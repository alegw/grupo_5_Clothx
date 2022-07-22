module.exports = (sequelize, DataTypes) => {
    let alias = "User";
    let cols = {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: DataTypes.STRING
        },
        last_name:{
            type: DataTypes.STRING
        },
        email:{
            type: DataTypes.STRING
        },
        password:{
            type: DataTypes.STRING
        },
        avatar:{
            type: DataTypes.STRING
        },
        category:{
            type: DataTypes.INTEGER
        },
    };

    let config = {
        tableName: "users",
        timestamps: false,
    };

    const User = sequelize.define(alias, cols, config)

    return User;

}