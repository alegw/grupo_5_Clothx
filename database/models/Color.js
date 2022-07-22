module.exports = (sequelize, DataTypes) => {
    let alias = "Colors";
    let cols = {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: DataTypes.STRING
        },
    };

    let config = {
        tableName: "colors",
        timestamps: false,
    };

    const Color = sequelize.define(alias, cols, config)

    return Color;

}