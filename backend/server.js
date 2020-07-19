require('./database/mongoose')
require('./configs/config')
require('./configs/passport')
require('./configs/jwt')


const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
const passport = require('passport')


const index = require('./index')


app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize())
app.use('/api', index)

app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
});

app.listen(3000, () => {
    console.log("server connected......")
})