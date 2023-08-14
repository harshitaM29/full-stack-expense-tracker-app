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