

import exporess from 'express'
import rateresbyController from '../controllers/rateresby.controller.js'

const rateresbyRouter = exporess.Router()

rateresbyRouter.get('/rateresby-listall/:res_id/:users_id', rateresbyController.rateresbyList)

export default rateresbyRouter; 

