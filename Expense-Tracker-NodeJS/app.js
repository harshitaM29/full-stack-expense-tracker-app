const express = require('express');
const bodyParser = require('body-parser');
const cors =  require('cors');
const sequelize = require('./utils/database');
const userRoutes = require('./routes/user');
const expenseRouter = require('./routes/expense');
const purchaseRouter = require('./routes/purchase');
const premiumRouter = require('./routes/premium');
const passwordRouter = require('./routes/forgetpassword');
const User = require('./models/users');
const Expense = require('./models/expense');
const Order = require('./models/orders');
const ForgetPassword = require('./models/forgetpassword');
const FilesDownloaded = require('./models/filesdownloaded');
const app = express();

app.use(cors());

app.use(bodyParser.json({ extended: false }));
app.use('/user',userRoutes);
app.use(expenseRouter);
app.use('/purchase', purchaseRouter);
app.use('/premium',premiumRouter);
app.use('/password',passwordRouter);

User.hasMany(Expense);
Expense.belongsTo(User);

User.hasMany(Order);
Order.belongsTo(User);

User.hasMany(ForgetPassword);
ForgetPassword.belongsTo(User);

User.hasMany(FilesDownloaded);
FilesDownloaded.belongsTo(User);

sequelize.sync().then(res => {
    app.listen(4000);
})
.catch(err => console.log(err));
