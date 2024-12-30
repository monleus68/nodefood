import likeresService from "../services/likeres.service.js";
import { responseError, responseSuccess } from "../common/helper/response.helper.js";


const likeresController = {

    likeresList: async (req, res, next) => {

        try{
            const likes = await likeresService.likeresListAll(req)
            const resData = responseSuccess(likes, 'Get List Like Restaurant Successfully')
            res.json(resData); 

        }catch(error){
            const resData = responseError(error.message, error.code, error.stack)
            res.status(resData.code).json(resData); 

        }
    }

}

export default likeresController