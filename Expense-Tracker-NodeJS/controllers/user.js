const Users = require('../models/users');


exports.postUserData = async(req,res,next) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    try {
    const userData = await Users.create({
        name:name,
        email:email,
        password:password
    });
   
    return res.status(201).json(userData);
} catch(err) {
    return res.status(400).json(err.name)
}
   

}

exports.postLoginUserData = async(req,res,next) => {
    const email = req.body.email;
    const password = req.body.password;
    console.log(password);
    const presentEmail = await Users.findOne({ where: {
        email : email
    }})
    
    if(presentEmail) {
        const presentPass = await Users.findOne({ where: {
            password : password
        }})
        console.log("presentPass",presentPass)
        if(presentPass) {
            res.status(200).json({ email:email, password:password })
        } else {
            res.status(401).json('Password Does Not Match')
        } 
    } else {
        res.status(404).json('User Does Not Exists')
    }

}