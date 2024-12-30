

import express from 'express'
import newrateresController from '../controllers/newrateres.controller.js'

const newrateresRouter = express.Router()

newrateresRouter.post('/newrateres', newrateresController.newRateRes)

export default newrateresRouter; 
