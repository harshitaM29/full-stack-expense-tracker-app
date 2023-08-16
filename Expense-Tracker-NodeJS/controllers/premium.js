const Expense = require('../models/expense');
const User = require('../models/users');

exports.getLeaderBoardData = async(req,res,next) => {
    const data = await Expense.findAll({ group: "userId",
        
    });
    console.log(data)
    res.status(200).json(data);
}