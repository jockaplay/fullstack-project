const Crypter = require('../assets/Crypter');
const User = require('../models/User');

const Login_route = (app) => {
    app.post('/auth/login', async (req, res) => {
        const {email, pass} = req.body

        if (!email) {
            return res.status(422).json({msg: "Email is required."})
        }
        if (!pass) {
            return res.status(422).json({msg: "Password is required."})
        }

        const user = await User.findOne({ email: email})
        if (!user) { return res.status(404).json({msg: "User not found."}) }

        const cryptedPass = await Crypter(pass)
        if (cryptedPass != user.password){
            return res.status(422).json({msg: "Incorrect password."})
        }

        return res.status(200).json({msg: "Successfull."})
    })
}

module.exports = Login_route;