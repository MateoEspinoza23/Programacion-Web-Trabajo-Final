import axios from "axios";

const API = "http://localhost:3000/api/v1/lugares";

/**
 * Obtener todos los lugares
 */
export const getLugares = async () => {
    try {
        const response = await axios.get(API);
        return response.data.data;
    } catch (error) {
        console.error("Error obteniendo lugares:", error);
        throw error;
    }
};

/**
 * Obtener un lugar por ID
 */
export const getLugarById = async (id) => {
    try {
        const response = await axios.get(`${API}/${id}`);
        return response.data.data;
    } catch (error) {
        console.error("Error obteniendo lugar:", error);
        throw error;
    }
};

/**
 * Crear un lugar
 */
export const crearLugar = async (lugar) => {
    try {
        const response = await axios.post(API, lugar);
        return response.data.data;
    } catch (error) {
        console.error("Error creando lugar:", error);
        throw error;
    }
};

/**
 * Actualizar un lugar
 */
export const actualizarLugar = async (id, lugar) => {
    try {
        const response = await axios.put(`${API}/${id}`, lugar);
        return response.data.data;
    } catch (error) {
        console.error("Error actualizando lugar:", error);
        throw error;
    }
};

/**
 * Eliminar un lugar
 */
export const eliminarLugar = async (id) => {
    try {
        await axios.delete(`${API}/${id}`);
        return true;
    } catch (error) {
        console.error("Error eliminando lugar:", error);
        throw error;
    }
};