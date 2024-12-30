
import models from '../common/sequelize/init.sequelize.js'

const rateresService = {

    rateresListAll: async(req, res) =>{

    const rates = await models.rate_res.findAll({

        attributes: ['res_id', 'users_id', 'amount', 'date_rate'],
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


    })

    return rates;

}
}
export default rateresService