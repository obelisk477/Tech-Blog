const { Model, DataTypes, UUIDV4 } = require('sequelize')
const sequelize = require('../config/connection')

class Post extends Model {}

let date =  new Date()
today = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: DataTypes.UUID,
            references: {
                model: 'user',
                key: 'id'
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
        modelName: 'post',
        createdAt: false  
    }
)

module.exports = Post