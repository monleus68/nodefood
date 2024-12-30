import express from 'express'
import likeresController from '../controllers/likeres.controller.js'

const likeresRouter = express.Router()

likeresRouter.get('/likeres-listall', likeresController.likeresList)

export default likeresRouter; 
