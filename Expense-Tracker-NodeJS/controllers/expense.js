const Expenses = require('../models/expense');
const User = require('../models/users');
const sequelize = require('../utils/database');
const ITEMS_PER_PAGE = 2;
exports.getExpenseData = async(req,res,next) => {
    const page = +req.query.page || 1;
    let totalItems;
    const expenses = await Expenses.findAll({ where: {userId: req.user.id}, offset:(page - 1) * ITEMS_PER_PAGE, limit:ITEMS_PER_PAGE});
   
    res.status(200).json({expenses:expenses,
        currentPage:page,
        hasNextPage: ITEMS_PER_PAGE * page < totalItems,
        nextPage:page + 1,
        hasPreviousPage: page > 1,
        previousPage: page - 1,
        lastPage: Math.ceil(totalItems / ITEMS_PER_PAGE)
    });
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