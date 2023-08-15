const express = require('express');

const router = express.Router();

const expenseController = require('../controllers/expense');


router.get('/expenses',expenseController.getExpenseData);

router.post('/expenses',expenseController.postExpenseData);

router.delete('/expense-delete/:id',expenseController.deleteExpenseData);

module.exports = router;