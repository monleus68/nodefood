import express from 'express'
import likeresbyController from '../controllers/likeresby.controller.js';

const likeresbyRouter = express.Router()

likeresbyRouter.get('/likeresby-listall/:res_id/:users_id', likeresbyController.likeresbyList)

export default likeresbyRouter; 
