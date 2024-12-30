
import { responseError, responseSuccess } from "../common/helper/response.helper.js";
import rateresbyService from "../services/rateresby.service.js";

const rateresbyController = {
    rateresbyList: async (req , res , next) =>{

        try {
            const rates = await rateresbyService.rateresbyListAll(req)
            const resData = responseSuccess(rates, 'Get list by restaurant and user')
            res.json(resData)

        } catch (error) {
            const resData = responseError(error.message, error.code, error.stack)
            res.status(resData.code).json(resData); 
        }

    }

}

export default rateresbyController