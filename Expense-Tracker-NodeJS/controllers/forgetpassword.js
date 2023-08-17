const Sib = require('sib-api-v3-sdk');
const User = require('../models/users');
const ForgetPassword = require('../models/forgetpassword');
require('dotenv').config();
const {v4 : uuidv4} = require('uuid');

exports.forgetPassword = async(req,res,next) => {
const emailId = req.body.email;

    const user = await User.findOne({
        attributes: ['id'],
        where: {
            email:emailId
        }
    });
    const forgetpasswordrequests = await ForgetPassword.create({
        id:uuidv4(),
        userId:user.id,
        isActive:true
    })
    
    const client = Sib.ApiClient.instance

const apiKey = client.authentications['api-key']
apiKey.apiKey = process.env.API_KEY

const tranEmailAPI = new Sib.TransactionalEmailsApi();
try {
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
    subject:'Reset Password Link',
    textContent:`http://localhost:4000/password/resetpassword/${forgetpasswordrequests.id}`
})
res.status(200).json({message:'Mail Sent Successfully'})
}catch(err) {
    res.status(400).json({message:'Something Went Wrong'})
}

};

exports.resetPassword = async(req,res,next) => {
    const id = req.params.id;
    const isActive = await ForgetPassword.findOne({
        attributes: ['isActive'],
        where: {
            id:id
        }
    });
    console.log(isActive);
    res.status(200).json(isActive);
}