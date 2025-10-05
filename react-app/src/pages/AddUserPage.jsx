import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddUser from '../components/Users/AddUser';

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
  const navigate = useNavigate();

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

      const res = await fetch('http://localhost:4002/api/admin/registrar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
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
    />
  );
};

export default AddUserPage;
