export const getHome = (req, res) => {
    res.status(200).json({
        status: "success",
        message: "CONTROLADOR HOME EJECUTADO CORRECTAMENTE"
    })
};