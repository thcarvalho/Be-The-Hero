const express = require('express');
const OngController = require('../controller/OngController');
const IncidentController = require('../controller/IncidentController');
const ProfileController = require('../controller/ProfileController');

const SessionController = require('../controller/SessionController');

const routes = express.Router();

routes.post('/ongs', OngController.create);
routes.get('/ongs', OngController.list)

routes.post('/incidents', IncidentController.create)
routes.get('/incidents', IncidentController.list)
routes.delete('/incidents/:id', IncidentController.delete)

routes.get('/profile', ProfileController.list)

routes.post('/session', SessionController.create)

module.exports = routes
