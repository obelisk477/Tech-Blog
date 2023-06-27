const { Model, DataTypes, UUIDV4} = require('sequelize')
const sequelize = require('../config/connection')

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false
        },
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'post',
                key: 'id'
            }
        },
        user_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }  
        }

    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',  
    }
)

module.exports = Comment