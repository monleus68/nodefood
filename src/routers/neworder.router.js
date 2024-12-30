import express from 'express'
import neworderController from '../controllers/neworder.controller.js';

const neworderRouter = express.Router()

neworderRouter.post('/neworder', neworderController.neworder)

export default neworderRouter; 
