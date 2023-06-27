const { Model, DataTypes, UUIDV4} = require('sequelize')
const sequelize = require('../config/connection')

class Comment extends Model {}

let date =  new Date()
today = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`

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
        poster_name: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'user',
                key: 'username'
            }  
        },
        created_date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            defaultValue: today
        }

    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
        createdAt: false    
    }
)

module.exports = Comment