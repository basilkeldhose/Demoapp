const mongoose = require('mongoose')
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const customerSchema = new mongoose.Schema({
    fullname: {
        type: String,
        require: "name canot be empty!"
    },
    email: {
        type: String,
        require: "email canot be empty!",
        minleght: 1,
        unique: true

    },
    phone: {
        type: String,
        require: "phone no canot be empty!",
        unique: true
    },
    password: {
        type: String,
        required: "password canot be empty!",
        minlength: 8
    },
    saltsecet: String

})

customerSchema.path("email").validate((val) => {
    emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'invaled email...')

customerSchema.pre('save', function (next) {
    bcrypt.genSal(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash
            this.saltsecet = salt
            next();
        })
    })
})
customerSchema.method.verifyPassword = function (password) {
    return bcrypt.compareSync(password, this.password)
}
customerSchema.method.generateJwt = function () {
    return jwt.signin({ _id: this.id },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXP
        })
}



const Customer= mongoose.model('Customer',customerSchema)

module.exports={
    Customer
}