const Crypter = require('../assets/Crypter');
const User = require('../models/User');

const Register_route = (app) => {
    app.post('/auth/register', async(req, res) => {
        const {name, email, pass, confirmpass} = req.body
        if (!name) {
            return res.status(422).json({msg: "Name is required."})
        }
        if (!pass) {
            return res.status(422).json({msg: "Password is required."})
        } else if (pass != confirmpass){
            return res.status(422).json({msg: "Passwords not match."})
        }
        if (!email) {
            return res.status(422).json({msg: "Email is required."})
        }
    
        const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!regexEmail.test(email)) { return res.status(422).json({msg: "Email invalid."}) }
    
        const userExists = await User.findOne({ email: email})
        if (userExists) { return res.status(422).json({msg: "This Email already be registered."}) }
    
        const cryptedPass = await Crypter(pass)
    
        const user = new User({
            name,
            email,
            password: cryptedPass,
        })
    
        try {
            await user.save()
            return res.status(200).json({msg: "User registred as successfully."})
        } catch(err) {
            return res.status(500).json({m: "Server Error."})
        }
    })
}

module.exports = Register_route;