import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AddUser from '../components/Users/AddUser';
import { API_URL } from '../config';

const AddUserPage = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    contrasena: '',
    rol: 'USER'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  // Leer rol del usuario autenticado desde el token
  useEffect(() => {
    try {
     const token = localStorage.getItem('token');
      if (token) {
       // const raw = token.startsWith('Bearer ') ? token.split(' ')[1] : token;
        const payload = JSON.parse(atob(raw.split('.')[1].replace(/-/g, '+').replace(/_/g, '/')));
        const roles = payload.roles || [];
        if (roles.includes('ADMIN')) {
          setIsAdmin(true);
        }
      }
    } catch (e) {
      console.warn('Error al procesar token JWT:', e);
    }
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('No token');

      const res = await fetch(`${API_URL}/admin/registrar`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
         // 'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          ...formData,
          rol: isAdmin ? formData.rol : 'USER' // fuerza USER si no es admin
        })
      });

      if (!res.ok) {
        const txt = await res.text();
        throw new Error(txt || 'Error al guardar');
      }

      setFormData({ nombre: '', apellido: '', correo: '', contrasena: '', rol: 'USER' });
      navigate('/users');
    } catch (err) {
      setError(err.message || 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AddUser
      formData={formData}
      onChange={onChange}
      onSubmit={onSubmit}
      loading={loading}
      error={error}
      setError={setError}
      cancelPath="/"
      showRol={isAdmin}  // <<< nuevo prop para controlar la visibilidad del campo rol
    />
  );
};

export default AddUserPage;
