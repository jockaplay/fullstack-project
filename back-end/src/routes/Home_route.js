const Home_route = (app) => {
    app.get('/', (req, res) => {
        res.status(200).json({msg: 'Hello World'})
    })
}

module.exports = Home_route;