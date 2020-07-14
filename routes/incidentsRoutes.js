const Incident = require('../controllers/incidentsController')
// routes
const routes = {
    incidents: '/api/incidents',
    incidentsId: '/api/incidents/:id'
}

module.exports = app => {

    app.route(routes.incidents)
        .get((req, res) => {
            Incident.listIncidents(res)
        })
        .post((req, res) => {
            const incident = req.body;
            Incident.createIncidents(incident, res)
        })
    app.route(routes.incidentsId)
        .put((req, res) => {
            const { id } = req.params;
            const incident = req.body;
            Incident.updateIncidents(id, incident, res)
        })
        .delete((req, res) => {
            const { id } = req.params;
            Incident.deleteIncidents(id, res)
        })
}
