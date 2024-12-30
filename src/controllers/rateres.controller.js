


import rateresService from "../services/rateres.service.js";
import { responseError, responseSuccess } from "../common/helper/response.helper.js";


const rateresController = {
    rateresList: async(req,res,next) => {
    try {
        const rates = await rateresService.rateresListAll(req)
        const resData = responseSuccess(rates, 'Get list Rate Res ')
        res.json(resData); 

        
    } catch (error) {
        const resData = responseError(error.message, error.code, error.stack)
        res.status(resData.code).json(resData); 

    }


}

}

export default rateresController