const RazorPay = require('razorpay');
const Order = require('../models/orders');
require('dotenv').config();
const userController = require('./user');

exports.purchaseMembership = async(req,res) => {
    try {
      
        var rzp = new RazorPay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret:process.env.RAZORPAY_KEY_SECRET
        })
        const amount = 25;
        const currency = 'INR'
        const options = {
            amount: amount * 10,
            currency
        };

       const response = await rzp.orders.create(options)
            console.log(response)
            // if(err) {
            //     throw new Error(JSON.stringify(err));
            // }
            req.user.createOrder({ orderId: response.id, status: 'PENDING'}).then(() => {
                    return res.status(201).json({ response, key_id: rzp.key_id });
            }).catch(err => {
                throw new Error(err);
            })
      
    }catch(err){
        console.log(err)
        res.status(403).json({ message: 'Something Went Wrong', error: err})
    }
}

exports.updatetransactionstatus = async(req,res, next) => {
    const userId = req.user.id;
    try {
        const {payment_id, order_id} = req.body;
        if(!payment_id) {
        const order = await Order.findOne({ where: {orderId: order_id} });
        await order.update({ status: 'Failed'});
        await req.user.update({ isPremium: false});
        }  else {
        const order = await Order.findOne({ where: {orderId: order_id} });
        await order.update({ paymentId: payment_id, status: 'SUCCESSFUL'});
        await req.user.update({ isPremium: true});
        res.status(202).json({token: userController.generateWebToken(userId,true), message: "Transaction Completed"})
        }


    }catch(err) {
        throw new Error(err);
    }

}