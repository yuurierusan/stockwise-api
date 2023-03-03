const { User } = require('../models')
const middleware = require('../middleware')

const Register = async (req, res) => {
    try {
        //Pull user model fields
        const { name, email, password } = req.body
        //Hash user provided password
        let passwordDigest = await middleware.hashPassword(password)
        //Create user using pulled fields and hashed password
        const user = await User.create({ name, email, passwordDigest })
        //Return user
        res.send(user)
    } catch (e) {
        console.error(e)
        res.status(401).send({
            status: 'Error',
            msg: 'ERROR CREATING USER, PLEASE TRY AGAIN!',
        })
    }
}

const Login = async (req, res) => {
    try {
        //Find user by unique email
        const user = await User.findOne({
            where: { email: req.body.email },
            raw: true,
        })
        //Check if stored password and provided password match
        let matched = await middleware.comparePassword(
            user.passwordDigest,
            req.body.password
        )
        //If match id True create payload for JWT token
        if (matched) {
            //Non-Sensitive info get put into payload
            let payload = {
                id: user.id,
                email: user.email,
            }
            //Token is created and sent as a response with the payload
            let token = middleware.createToken(payload)
            return res.send({
                user: payload,
                token,
            })
        }
        res.status(401).send({ status: 'Error', msg: 'UNAUTHORIZED!' })
    } catch (e) {
        console.error(e)
        res.status(401).send({
            status: 'Error',
            msg: 'ERROR CREATING USER, PLEASE TRY AGAIN!',
        })
    }
}

module.exports = {
    Register,
    Login,
}
