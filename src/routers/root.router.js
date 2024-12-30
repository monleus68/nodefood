import express from "express";
import likeresRouter from "./likeres.router.js";
import likeresbyRouter from "./likeresby.router.js";
import rateresRouter from "./rateres.router.js";
import rateresbyRouter from "./rateresby.router.js";
import neworderRouter from "./neworder.router.js";
import newrateresRouter from "./newrateres.router.js";



const rootRouter = express.Router()




rootRouter.use('/likeres', likeresRouter)

rootRouter.use('/likeresby', likeresbyRouter)

rootRouter.use('/rateres', rateresRouter)

rootRouter.use('/rateresby', rateresbyRouter)

rootRouter.use('/order', neworderRouter)

rootRouter.use('/newrateres', newrateresRouter)

export default rootRouter