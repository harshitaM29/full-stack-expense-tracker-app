const Expenses = require('../models/expense');

exports.getExpenseData = async(req,res,next) => {
    const expenses = await Expenses.findAll();
    console.log(expenses)
    res.status(200).json(expenses);
};

exports.postExpenseData = async(req,res,next) => {
    const description = req.body.description;
    const amount = req.body.amount;
    const category = req.body.category;
    const expenseData = await Expenses.create({
        description:description,
        amount:amount,
        category:category
    });
    res.status(201).json(expenseData);
};

exports.deleteExpenseData = async(req,res,next) => {
   
    const id = req.params.id;
    
    const expenseData = await Expenses.findByPk(id);
    res.status(200).json(expenseData);
    await expenseData.destroy();
}