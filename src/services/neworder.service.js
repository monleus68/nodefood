import models from '../common/sequelize/init.sequelize.js'

const neworderService = {

    newOrder: async (req , res) =>{

        const {users_id, food_id, amount, orders_code, arr_sub_id} = req.body; 

       const createOrder = await models.orders.create({
            users_id,
            food_id,
            amount,
            orders_code,
            arr_sub_id

       }); 

    }

}

export default neworderService;
