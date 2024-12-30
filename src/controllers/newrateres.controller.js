

import newrateresService from "../services/newrateres.service.js";
import { responseError, responseSuccess } from "../common/helper/response.helper.js";

const newrateresController = {
    newRateRes: async ( req , res , next) => {
    try {
        const rateRate = await newrateresService.newRateRes(req)
        const resData = responseSuccess(rateRate, 'New Rate Res Successfully')
        res.json(resData); 

        
    } catch (error) {
        const resData = responseError(error.message, error.code, error.stack)
        res.status(resData.code).json(resData); 
    }

}
}
export default newrateresController; 