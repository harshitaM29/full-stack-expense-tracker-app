const Expenses = require('../models/expense');
const User = require('../models/users');
exports.getExpenseData = async(req,res,next) => {
    const expenses = await Expenses.findAll({ where: {userId: req.user.id}});
   
    res.status(200).json(expenses);
};

exports.postExpenseData = async(req,res,next) => {
    let totalAmount;
   
    const description = req.body.description;
    const amount = req.body.amount;
    const category = req.body.category;
    
    const expenseData = await Expenses.create({
        description:description,
        amount:amount,
        category:category,
        userId:req.user.id
    });
    const user = await User.findOne({ where: {id:req.user.id}});
    console.log(req.user.totalExpenses);
    totalAmount = Number(req.body.amount) + Number(req.user.totalExpenses);
    console.log("amount",totalAmount)
    await req.user.update({ totalExpenses: totalAmount});
    res.status(201).json(expenseData);
};

exports.deleteExpenseData = async(req,res,next) => {
   
    const id = req.params.id;
    
    const expenseData = await Expenses.findByPk(id);
    res.status(200).json(expenseData);
    await expenseData.destroy({ where: { userId:req.user.id } });
}