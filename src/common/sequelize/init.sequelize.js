import { Sequelize } from "sequelize";
import initModels from "../../models/init-models.js";

export const sequelize = new Sequelize("mysql://root:12345678@localhost:3307/app_food_XVT");
const models = initModels(sequelize);

// Kiểm tra kết nối với cở sở dữ liệu (db)
sequelize
   .authenticate()
   .then(() => {
      console.log(`Kết nối với db thành công`);
   })
   .catch(() => {
      console.log(`Kết nối với db KHÔNG thành công`);
   });

export default models