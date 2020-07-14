const Ong = require('../controllers/ongsController')
// routes
const routes = {
    ong: '/api/ongs'
}
module.exports = app => {

    app.route(routes.ong)
        .get((req, res) => {

            Ong.listOng(res)
        })
        .post((req, res) => {


            Ong.createOng(ong, res)
        })
    app.route(routes.ongId)
        .put((req, res) => {
            const id = req.headers.authorization;

            Ong.updateOng(id, ong, res)
        })
        .delete((req, res) => {
            const id = req.headers.authorization;
            Ong.deleteOng(id, res)
        })
}
