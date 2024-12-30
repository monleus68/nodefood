

import models from '../common/sequelize/init.sequelize.js'

const newrateresService = {

    newRateRes: async(req , res ) => {
    const {users_id, res_id, amount, date_rate} = req.body; 
    const createRateRes = await models.rate_res.create({
        users_id,
        res_id,
        amount,
        date_rate

    })

}
}

export default newrateresService