import { useState, useEffect } from 'react';
import { API_URL } from '../../config';

const useUserList = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        cargarUsuarios();
    }, []);

    const cargarUsuarios = async () => {
        try {
            setLoading(true);
            const token = localStorage.getItem('token');
            const response = await fetch(`${API_URL}/usuarios`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                     'Authorization': `Bearer ${token}` // Descomentar cuando uses JWT
                }
            });

            if (!response.ok) {
                throw new Error('Error al cargar usuarios');
            }

            const data = await response.json();
            setUsuarios(data);
            setError(null);
        } catch (err) {
            setError(err.message);
            console.error('Error:', err);
        } finally {
            setLoading(false);
        }
    };

    const eliminarUsuario = async (usuario) => {
        if (!window.confirm(`¿Eliminar a ${usuario.nombre} ${usuario.apellido}?`)) {
            return;
        }

        try {
            const token = localStorage.getItem('token');

            const response = await fetch(`${API_URL}/usuarios`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(usuario)
            });

            if (response.ok) {
                cargarUsuarios(); // Recargar lista
            } else {
                throw new Error('Error al eliminar usuario');
            }
        } catch (err) {
            console.error('Error al eliminar:', err);
            setError(err.message);
        }
    };

    return {
        usuarios,
        loading,
        error,
        cargarUsuarios,
        eliminarUsuario
    };
};

export default useUserList;