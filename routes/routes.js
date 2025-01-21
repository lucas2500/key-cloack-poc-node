const express = require('express')
const auth = require('../middleware/AuthMiddleware')

const routes = express.Router()

const Route1Controller = require('../controllers/Route1Controller')
const Route2Controller = require('../controllers/Route2Controller')

routes.get('/route1', auth.ValidateToken, Route1Controller.Route1)
routes.get('/route2', auth.ValidateToken, Route2Controller.Route2)

module.exports = routes