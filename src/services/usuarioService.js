import axios from "axios";

const API = "http://localhost:3000/api/v1/usuarios";

// ========================================
// OBTENER TODOS LOS USUARIOS
// ========================================

export const getUsuarios = async () => {

    const response = await axios.get(API);

    return response.data.data;

};

// ========================================
// OBTENER USUARIO POR ID
// ========================================

export const getUsuarioById = async (id) => {

    const response = await axios.get(`${API}/${id}`);

    return response.data.data;

};

// ========================================
// REGISTRAR USUARIO
// ========================================

export const crearUsuario = async (usuario) => {

    const response = await axios.post(API, usuario);

    return response.data;

};

// ========================================
// LOGIN
// ========================================

export const loginUsuario = async (correo, contraseña) => {

    const response = await axios.post(`${API}/login`, {

        correo,
        contraseña,

    });

    return response.data.data;

};

// ========================================
// ACTUALIZAR
// ========================================

export const actualizarUsuario = async (id, datos) => {

    const response = await axios.put(`${API}/${id}`, datos);

    return response.data.data;

};

// ========================================
// ELIMINAR
// ========================================

export const eliminarUsuario = async (id) => {

    const response = await axios.delete(`${API}/${id}`);

    return response.data;

};