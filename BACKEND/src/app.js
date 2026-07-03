import express from "express";
import dotenv from "dotenv";
import mainRouter from "./routes/index.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

//MIDDLEWARE
app.use(express.json());
//MIDDLEWARE

//RUTAS
app.use("/api/v1", mainRouter);
//RUTAS

//RUTAS
app.get("/", (req, res) => {
    res.status(200).json({
        mensaje: "BACKEND FUNCIONA CORRECTAMENTE"
    })
})

//RUTAS NO EXISTENTES
app.use((req, res) => {
    res.status(404).json({
        mensaje: "RUTA NO ENCONTRADA"
    })
})

app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`)
})