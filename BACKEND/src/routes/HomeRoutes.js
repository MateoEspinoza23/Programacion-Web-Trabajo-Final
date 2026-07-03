import { Router } from "express";
import { getHome } from "../controllers/HomeController.js";

const router = Router(); 

//RUTAS DE HOME

//1. OBTENER INFORMACION DEL HOME
router.get("/", getHome);

export default router; 