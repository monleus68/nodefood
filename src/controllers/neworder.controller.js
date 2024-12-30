
import neworderService from "../services/neworder.service.js";
import { responseError, responseSuccess } from "../common/helper/response.helper.js";


const neworderController = {

    neworder: async (req , res , next) => {

        try {
            const order = await neworderService.newOrder(req)
            const resData = responseSuccess(order, 'New Order Successfully')
            res.json(resData); 
            
        } catch (error) {
            const resData = responseError(error.message, error.code, error.stack)
            res.status(resData.code).json(resData); 
            
        }

    }


}

export default neworderController; 
