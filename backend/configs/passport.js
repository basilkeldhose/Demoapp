const passport = require('passport')
const localStratergy = require('passport-local').Strategy
const mongoose = require('mongoose')



var Customer = mongoose.model('Customer')
passport.use(new localStratergy({ usernameField: 'Email' },
    (username, passward, next) => {
        Customer.findOne({ Email: username },
            (err, user) => {
                if (err)
                    return done(err)
                else if (!user)
                    return done(null, false, { message: "Email is not registred" });
                else if (!user.verifyPassword(passward))
                    return done(null, false, { message: "wrong password" })
                else
                    return done(null, user)
            })
    }))