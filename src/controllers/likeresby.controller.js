import { responseError, responseSuccess } from "../common/helper/response.helper.js";
import likeresbyService from "../services/likeresby.service.js";


const likeresbyController = {

    likeresbyList: async (req, res, next) => {

        try{
            const likes = await likeresbyService.likeresbyListAll(req)
            const resData = responseSuccess(likes, 'Get List by Like Restaurant Successfully')
            res.json(resData); 

        }catch(error){
            const resData = responseError(error.message, error.code, error.stack)
            res.status(resData.code).json(resData); 

        }
    }

}

export default likeresbyController