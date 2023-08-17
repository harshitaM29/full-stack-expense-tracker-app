const Sequelize = require('sequelize');
const sequelize = require('../utils/database');
const ForgetPassword = sequelize.define('forgetpasswordrequests', {
    id:{
        type:Sequelize.UUID,
        autoIncrement:true,
        allowNull:false,
        primaryKey: true
    },
    isActive:Sequelize.BOOLEAN
});

module.exports = ForgetPassword;