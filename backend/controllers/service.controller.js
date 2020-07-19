const mongoose =require('mongoose')

const Service=mongoose.model("Service")

module.exports.service=(req,res,next)=>{
    var service =new Service()
    service.address=req.body.address
    service.phone=req.body.phone
    service.location=req.body.location
    service.save((err,doc)=>{
        if(!err)
        res.send(doc)
        else
        return next(err)
    })
}