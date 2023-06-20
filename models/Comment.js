const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

class Comment extends Model {}

Comment.init(
    {
        id: {

        },
        date_created: {

        },
        content: {

        },
        post_id: {
            references: {
                model: 'post',
                key: 'id'
            }
        },
        user_id: {
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
        modelName: 'post',  
    }
)

module.exports = Comment