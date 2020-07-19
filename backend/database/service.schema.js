const mongoose =require('mongoose')


var serviceSchema= new mongoose.Schema({

    address:{
        type:String,
        require:[true,'adress canot be empty !!']
    },

    phone:{
        type:String,
        require:[true,'phone no canot be empty !! ']
    },
    location:{
        type:String,
        require:[true,'location canot be empty !!']
    }


})

module.exports= mongoose.model('Service', serviceSchema)