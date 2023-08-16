const Expense = require('../models/expense');
const User = require('../models/users');
const sequelize = require('sequelize');
exports.getLeaderBoardData = async(req,res,next) => {
    const users = await User.findAll({
        attributes: ['id','name',  [ sequelize.fn('sum',sequelize.col('expenses.amount')) , 'amount' ]],
        include: [
            {
            model:Expense,
            attributes: []
            }
        ],
        group: ['users.id'],
        order:[['amount','DESC']]

    });
   
   
    
    res.status(200).json(users);
}