const jwt = require('jsonwebtoken')

const jwtMiddleware = (req, res, next) => {

    try {

        // access token from header
        const token = req.headers['access_token']

        // true/false

        jwt.verify(token, "secretkey123")

        next()

    } catch {

        res.status(401).json({
            message: "please login",
            status: false,
            statusCode: 401
        })

    }

}

module.exports={jwtMiddleware}