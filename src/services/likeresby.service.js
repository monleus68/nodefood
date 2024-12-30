import models from '../common/sequelize/init.sequelize.js'



const likeresbyService = {

    likeresbyListAll: async(req, res) => {

        const {users_id, res_id} = req.params;

        console.log('Received params: ',{res_id, users_id}); 

        const likes = await models.like_res.findAll({

            where: {res_id, users_id },
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
        return likes;
 
    }


}

export default likeresbyService