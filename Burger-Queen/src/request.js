import axios from "axios";
// import { useNavigate } from 'react-router-dom';

// const token = localStorage.getItem("token");

const API_URL = "http://127.0.0.1:8080";
const token = localStorage.getItem("token");

// Usuario hace login 
const auth = async ({ email, password }) => {
    try {
        const response = await axios.post(
            `${API_URL}/login`,
            { email, password },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error en la autenticación:", error);
        throw error;
    }
};

// Traer a todos los usuarios
const getUsers = async () => {
    try {
        const response = await axios.get(`${API_URL}/users`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error al obtener los usuarios:", error);
        throw error;
    }
};

//Añadir a un nuevo usuario
const addEmployee = async ({ name, email, password, role, image }) => {
    try {
        const response = await axios.post(
            `${API_URL}/users`,
            { name, email, password, role, image },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error al añadir un nuevo empleado:", error);
        throw error;
    }
};

// Editar a un usuario existente
const editUser = async (id, userData) => {
    const url = `${API_URL}/users/${id}`;
    try {
        await axios.put(url, userData, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        console.log("El usuario ha sido actualizado con éxito");
    } catch (error) {
        console.error("Error al editar el usuario:", error);
        throw error;
    }
};

// Eliminar a un usuario
const deleteUser = async (id) => {
    const url = `${API_URL}/users/${id}`;
    try {
        await axios.delete(url, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        console.log("Se eliminó al usuario");
    } catch (error) {
        console.error("Error al eliminar el usuario:", error);
        throw error;
    }
};

// Añadir un nuevo producto
const postProduct = async ({ name, price, image, type }) => {
    try {
        const response = await axios.post(
            `${API_URL}/products`,
            { name, price, image, type },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error al añadir un producto:", error);
        throw error;
    }
};

// Editar un producto existente en API REST
const putProducts = async (id, object) => {
    const urlBurguerApi = `${API_URL}/products/${id}`;
    const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
    };
    try {
        await axios.put(urlBurguerApi, object, { headers });
        console.log('El producto ha sido actualizado con éxito');
    } catch (error) {
        console.error("Error al actualizar el producto:", error);
        throw error;
    }
};

// Eliminar un producto
const deleteProduct = async (id) => {
    const token = localStorage.getItem("token");
    const urlBurguerApi = `${API_URL}/products/${id}`; // Agregar el ID del producto a la URL
    try {
        await axios.delete(urlBurguerApi, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });

    } catch (error) {
        console.error("Error al eliminar el producto:", error);
        throw error;
    }
};

// Traer a todos los productos
const GetProducts = async () => {
    try {
        const response = await axios.get(`${API_URL}/products`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        return response.data;
      } catch (error) {
        console.error("Error al obtener los productos:", error);
        throw error;
      }
};

// Crear una orden
const postOrder = async (object) => {
    const url = `${API_URL}/orders`;
    try {
      const response = await axios.post(url, orderData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      console.log("La orden se ha creado con éxito:", response.data);
    } catch (error) {
      console.error("Error al crear la orden:", error);
      throw error;
    }
};

const getOrder = async () => {
    try {
        const response = await axios.get(`${API_URL}/orders`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        return response.data;
      } catch (error) {
        console.error("Error al obtener las órdenes:", error);
        throw error;
      }
};

// Editar una orden existente
const editOrder = async (id, object) => {
    const url = `${API_URL}/orders/${id}`;
    try {
      await axios.put(url, orderData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      console.log("La orden ha sido actualizada con éxito");
    } catch (error) {
      console.error("Error al actualizar la orden:", error);
      throw error;
    }
};

export {
    auth,
    postProduct,
    deleteProduct,
    GetProducts,
    putProducts,
    getUsers,
    addEmployee,
    editUser,
    deleteUser,
    postOrder,
    getOrder,
    editOrder,
}