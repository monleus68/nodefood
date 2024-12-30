

import models from '../common/sequelize/init.sequelize.js'

const rateresbyService = {
    rateresbyListAll: async(req , res) => {

        const {res_id, users_id} = req.params
        console.log('Received params', {res_id, users_id}); 

        const rates = await models.rate_res.findAll(
            {
                where: { res_id, users_id},
                include: [
                    {
                        model: models.restaurant,
                        as: 're',
                        attributes: ['res_name']

                    },
                    {
                        model: models.users,
                        as: 'user',
                        attributes: ['full_name']

                    }


                ]  

            }


        )
        return rates; 


    }



}

export default rateresbyService