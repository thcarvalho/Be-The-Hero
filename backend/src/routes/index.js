const express = require('express');

const OngController = require('../controller/OngController');
const IncidentController = require('../controller/IncidentController');
const ProfileController = require('../controller/ProfileController');

const SessionController = require('../controller/SessionController');

const validation = require('./validation')

const routes = express.Router();

routes.post('/ongs', validation.ongCreate(), OngController.create);
routes.get('/ongs', OngController.list);

routes.post('/incidents', validation.incidentsCreate(), IncidentController.create);
routes.get('/incidents', validation.incidentsList(), IncidentController.list);
routes.delete('/incidents/:id', validation.incidentsDelete(), IncidentController.delete);

routes.get('/profile', validation.profileList(), ProfileController.list);

routes.post('/session', validation.sessionCreate(), SessionController.create);

module.exports = routes;
