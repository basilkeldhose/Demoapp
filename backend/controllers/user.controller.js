const mongoose =require('mongoose')
const passport =require('passport')

const Customer =mongoose.model('Customer')
const _ = require('lodash');

module.exports.register=(req,res,next)=>{
    var customer = new Customer()
    customer.fullnme=req.body.Fullnme
    customer.email =req.body.Email
    customer.phone=req.body.Phone
    customer.password=req.body.Password
    customer.save((err,doc)=>{
        if (!err)
        res.send(doc);
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate email adrress found.']);
            else
                return next(err);
        }
    });


}
module.exports.authenticate=(req,res,next)=>{
    passport.authenticate('local',(err,user,info)=>{
        if(err)
        {
            return res.status(400).json(err)
        }
        else if(user){
            return res.status(200).json({ "token": user.generatejwt() })
        }
        else {
            return res.status(404).json(info)
        }
    })(req,res)
}
