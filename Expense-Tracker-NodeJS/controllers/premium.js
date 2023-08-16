const Expense = require('../models/expense');
const User = require('../models/users');
const sequelize = require('sequelize');
exports.getLeaderBoardData = async(req,res,next) => {
    const users = await User.findAll({
        attributes: ['id','name', 'totalExpenses' ],
        order:[['totalExpenses','DESC']]

    });
   
   
    
    res.status(200).json(users);
}