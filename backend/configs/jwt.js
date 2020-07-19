const jwt = require('jsonwebtoken')


module.exports.verifyJwtToken = (req, res, next) => {
    var token;
    if ('autherization' in req.headers)
        token = req.headers['autherization'].split('')[1];

    if (!token)
        return res.status(403).send({ auth: false, messahe: 'no token provided' })
    else
        jwt.verify(token, process.env.JWT_SECRET,
            (err, decoded) => {
                if (err)
                    return res.status(500).send({ auth: false, message: 'token authentication failed' })
                else {
                    req._id = decoded._id
                    next();
                }
            })
}