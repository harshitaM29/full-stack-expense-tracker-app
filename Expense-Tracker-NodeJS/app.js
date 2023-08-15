const express = require('express');
const bodyParser = require('body-parser');
const cors =  require('cors');
const sequelize = require('./utils/database');
const userRoutes = require('./routes/user');
const expenseRouter = require('./routes/expense');
const app = express();

app.use(cors());

app.use(bodyParser.json({ extended: false }));
app.use('/user',userRoutes);
app.use(expenseRouter);

sequelize.sync().then(res => {
    app.listen(4000);
})
.catch(err => console.log(err));
