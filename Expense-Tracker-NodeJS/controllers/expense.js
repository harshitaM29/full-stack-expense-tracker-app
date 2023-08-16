const Expenses = require('../models/expense');
const User = require('../models/users');
const sequelize = require('../utils/database');
exports.getExpenseData = async(req,res,next) => {

    const expenses = await Expenses.findAll({ where: {userId: req.user.id}});
   
    res.status(200).json(expenses);
};

exports.postExpenseData = async(req,res,next) => {
    const t = await sequelize.transaction();
    let totalAmount;
   
    const description = req.body.description;
    const amount = req.body.amount;
    const category = req.body.category;
    try {
    const expenseData = await Expenses.create({
        description:description,
        amount:amount,
        category:category,
        userId:req.user.id
    }, {transaction:t});
    totalAmount = Number(req.body.amount) + Number(req.user.totalExpenses);
    await req.user.update({ totalExpenses: totalAmount}, {transaction:t});
    await t.commit();
    res.status(201).json(expenseData); 
}catch(err)  {
    await t.rollback();
    throw new Error(err)
}
};

exports.deleteExpenseData = async(req,res,next) => {
   const t = await sequelize.transaction();
    const id = req.params.id;
    try {
    const expenseData = await Expenses.findByPk(id);
    res.status(200).json(expenseData);
    const data = await expenseData.destroy({ where: { userId:req.user.id } }, {transaction:t});
    let totalAmount = Number(req.user.totalExpenses) - Number(data.amount);
    const user = await req.user.update({ totalExpenses : totalAmount})
    await t.commit();
    }
    catch(err) {
        await t.rollback();
        throw new Error(err);
      
    }
}