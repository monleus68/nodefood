
import express from 'express'

import rateresController from '../controllers/rateres.controller.js'

const rateresRouter = express.Router(); 

rateresRouter.get('/rateres-listAll', rateresController.rateresList)

export default rateresRouter; 