const mongoose =require('mongoose')

mongoose.Promise=global.Promise

mongoose.connect('mongodb://localhost:27017/Demo', { useNewUrlParser: true }).then(() => {
    
    console.log("Connected to MongoDB successfully.......");
}).catch((e) => {
    console.log("Error while attempting to connect to MongoDB");
    console.log(e);
});

require('./user.schema')
require("./provider.schema")
require('./service.schema')


module.exports = mongoose