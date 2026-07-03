import { Router } from "express";
import homeRouter from "./HomeRoutes.js"

const mainRouter = Router();

//RUTAS REGISTRADAS
mainRouter.use("/home", homeRouter);
//RUTAS REGISTRADAS

export default mainRouter