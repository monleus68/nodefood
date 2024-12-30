import models from '../common/sequelize/init.sequelize.js'



const likeresService = {

    likeresListAll: async(req, res) => {

        const likes = await models.like_res.findAll({

            attributes: ['users_id', 'res_id', 'date_like'],
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

export default likeresService