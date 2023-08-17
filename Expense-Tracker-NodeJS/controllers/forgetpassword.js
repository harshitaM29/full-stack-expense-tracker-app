const Sib = require('sib-api-v3-sdk');
require('dotenv').config();


exports.forgetPassword = async(req,res,next) => {
const emailId = req.body.email;
    const client = Sib.ApiClient.instance

const apiKey = client.authentications['api-key']
apiKey.apiKey = process.env.API_KEY

const tranEmailAPI = new Sib.TransactionalEmailsApi();

const sender = {
    email: 'mundhe.harshita29@gmail.com',
    name:'Harshita'
}

const receiver = [
{
    email:emailId
}

]

const response = await tranEmailAPI.sendTransacEmail({
    sender,
    to: receiver,
    subject:'welcome',
    textContent:'Welcome to Expense Tracker Mail system'
})
res.status(200).json({ message: 'Mail Sent Sucessfully'})

};