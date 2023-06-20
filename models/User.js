const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

class User extends Model {}

User.init(
    {
        id: {
            
        },
        username: {

        },
        password: {

        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',  
    }
)

module.exports = User