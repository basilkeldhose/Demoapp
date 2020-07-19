const monngoose=require("mongoose")
const  passport=require('passport')
const Provider =monngoose.model('Provider')

module.exports.register =(req,res,next)=>{
    var provider=new Provider()
    provider.name=req.body.name
    provider.phone=req.body.phone
    provider.service=req.body.service
    provider.area=req.body.area
    provider.save((err,doc)=>{
        if(!err)
        res.send(doc)
        else
        return next(err);
    })
}

module.exports.serviceProvider = (req, res, next) => {
    Provider.find({ _id: req._id },
        (err, user) => {
            if (!user)
                return res.status(404).json({ status: false, message: 'provider not found.' });
            else
                return res.status(200).json({ status: true, user: _.pick(user, ['name','phone','service','area']) });
        }
    );

}