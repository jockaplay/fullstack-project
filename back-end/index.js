require('dotenv').config();
const express = require('express');
const cors = require("cors");

const Home_route = require('./src/routes/Home_route');
const Register_route = require('./src/routes/Register_route');
const Login_route = require('./src/routes/Login_route');
const DB_Connect = require('./src/models/DB_Connect');

const app = express();
app.use(express.json())
app.use(cors())

Home_route(app)
Register_route(app)
Login_route(app)

DB_Connect(app)