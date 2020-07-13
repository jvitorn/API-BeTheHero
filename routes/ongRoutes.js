
// routes
const routes = {
    ong: '/api/ongs/:id'
}
module.exports = app => {

    app.route(routes.ong)
        .get((req, res) => {
            const Ong = new Ongs
            Ong.listOng(res)
        })
        .post((req, res) => {
            const Ong = new Ongs
            const ong = req.body;
            Ong.createOng(ong, res)
        })
        .put((req, res) => {
            const Ong = new Ongs
            const id = req.headers.authorization;
            const ong = req.body;
            Ong.updateOng(id, ong, res)
        })
        .delete((req, res) => {
            const Ong = new Ongs
            const id = req.headers.authorization;
            Ong.deleteOng(id, res)
        })
}
