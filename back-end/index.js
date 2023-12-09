require('dotenv').config();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const express = require('express');
const cors = require("cors");

const User = require('./models/User');
const Crypter = require('./assets/Crypter');

const app = express();
app.use(express.json())
app.use(cors())
const PORT = 3030;
const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS


app.get('/', (req, res) => {
    res.status(200).json({msg: 'Hello World'})
})

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

mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@cluster0.8xjfylx.mongodb.net/?retryWrites=true&w=majority`).then(()=>{
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`)
    })
    console.log("Database conected.")
}).catch((err) => console.log(err))