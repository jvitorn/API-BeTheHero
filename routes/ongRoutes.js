const Ong = require('../controllers/ongsController')
const { validateToken } = require('../utils/authToken')
// routes
const routes = {
    ong: '/api/ongs',
    ongId: '/api/ongs/:id'
}
module.exports = app => {

    app.route(routes.ong)
        .get((req, res) => {

            Ong.listOng(res)
        })
        .post((req, res) => {
            const ong = req.body
            Ong.createOng(ong, res)
        })
    app.route(routes.ongId)
        .get((req, res) => {
            const { id } = req.params
            Ong.listId(id, res)
        })
<<<<<<< HEAD
        .put((req, res) => {
            const { id } = req.params
            const ong = req.body
            Ong.updateOng(id, ong, res)
        })
        .delete((req, res) => {
            const { id } = req.params
=======
        .put(validateToken, (req, res) => {
            const { id } = req.params;
            const ong = req.body
            Ong.updateOng(id, ong, res)
        })
        .delete(validateToken, (req, res) => {
            const { id } = req.params;
>>>>>>> d3b60819619ce264b7db838528db994052bc2159

            Ong.deleteOng(id, res)
        })
}
