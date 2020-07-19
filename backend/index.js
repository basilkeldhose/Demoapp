const express =require('express')
const router =express.Router();
const jwt =require('./configs/jwt')

const user = require('./controllers/user.controller')
const provider=require('./controllers/provider.controller')
const service=require('./controllers/service.controller')
router.post('/register',user.register)
router.post('/serviceprovider',provider.register)
router.post('/service',service.service)

router.get('/authenticate',user.authenticate)
router.get('/providerprofile',jwt.verifyJwtToken,provider.serviceProvider)




module.exports=router;