import express from "express";
import rootRouter from "./src/routers/root.router.js";

const app = express();

// middleware giúp phân giải dữ liệu từ json sang đối tượng javascript
app.use(express.json());

app.use(rootRouter)

app.listen(3080, () => {
   console.log(`Server Online At Port 3080`);
});
