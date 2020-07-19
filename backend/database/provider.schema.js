const mongoose =require('mongoose')
const bcrypt=require("bcryptjs")
const _ = require('lodash');

var providerSchema=new mongoose.Schema({
    name:{
        type:String,
        require:[true,'name canot be empty !!']
    },
    phone:{
        type:String,
        require:[true,'phone no canot be empty !!']
    },
    service:{
        type:String,
        require:[true,"service canot be empty !!"]
    },
    area:{
        type:String,
        require:[true,'area caont be empty !!']
    },
    password:{
        type:String,
        require:[true,'password canot be empty !!']
    },
    saltsecet: String

});

providerSchema.pre('save', function (next) {
    bcrypt.genSal(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash
            this.saltsecet = salt
            next();
        })
    })
})


module.exports=mongoose.model('Provider',providerSchema)