import axios from "axios";

const API = "http://localhost:3000/api/v1/reservas";

/**
 * Obtener todas las reservas
 */
export const getReservas = async () => {
    try {
        const response = await axios.get(API);
        return response.data.data;
    } catch (error) {
        console.error("Error obteniendo reservas:", error);
        throw error;
    }
};

/**
 * Obtener reserva por ID
 */
export const getReservaById = async (id) => {
    try {
        const response = await axios.get(`${API}/${id}`);
        return response.data.data;
    } catch (error) {
        console.error("Error obteniendo reserva:", error);
        throw error;
    }
};

/**
 * Registrar reserva
 */
export const createReserva = async (data) => {
    try {
        const response = await axios.post(API, data);
        return response.data;
    } catch (error) {
        console.error("Error creando reserva:", error);
        throw error;
    }
};

/**
 * Actualizar reserva
 */
export const updateReserva = async (id, data) => {
    try {
        const response = await axios.put(`${API}/${id}`, data);
        return response.data;
    } catch (error) {
        console.error("Error actualizando reserva:", error);
        throw error;
    }
};

/**
 * Eliminar reserva
 */
export const deleteReserva = async (id) => {
    try {
        const response = await axios.delete(`${API}/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error eliminando reserva:", error);
        throw error;
    }
};