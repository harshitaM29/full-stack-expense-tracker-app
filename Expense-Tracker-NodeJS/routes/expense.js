const express = require('express');

const router = express.Router();

const expenseController = require('../controllers/expense');


router.get('/expenses',expenseController.getExpenseData);

router.post('/expenses',expenseController.postExpenseData);

module.exports = router;