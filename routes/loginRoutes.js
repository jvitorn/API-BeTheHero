const Session = require('../controllers/sessionController')
// routes
const routes = {
    login: '/api/session',

}
module.exports = app => {

    app.route(routes.login)
        .post((req, res) => {
            const user = req.body
            Session.login(user, res)
        })

}

