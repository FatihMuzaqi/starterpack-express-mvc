import db from '../configs/db.js';
import { DataTypes } from 'sequelize';

const Users = db.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.ENUM('admin', 'user'), // hanya boleh admin atau user
        allowNull: false,
        defaultValue: 'user'
    }
}, {
    timestamps: true,
    tableName: 'users'    
});

export default Users;
