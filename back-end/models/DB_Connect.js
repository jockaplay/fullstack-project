const mongoose = require('mongoose');
const PORT = 3030;
const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS

const DB_Connect = (app) => {
    mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@cluster0.8xjfylx.mongodb.net/?retryWrites=true&w=majority`).then(()=>{
        app.listen(PORT, () => {
            console.log(`Listening on port ${PORT}`)
        })
        console.log("Database conected.")
    }).catch((err) => console.log(err))
}

module.exports = DB_Connect;