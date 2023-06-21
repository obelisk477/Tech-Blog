const { Model, DataTypes, UUIDV4} = require('sequelize')
const sequelize = require('../config/connection')

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: UUIDV4
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false
        },
        post_id: {
            type: DataTypes.UUID,
            references: {
                model: 'post',
                key: 'id'
            }
        },
        user_id: {
            type: DataTypes.UUID,
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