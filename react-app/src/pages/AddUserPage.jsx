import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AddUserPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    contrasena: '',
    rol: 'USER' // Rol por defecto
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem('token');
      
      if (!token) {
        setError('No hay sesión activa. Por favor inicie sesión.');
        return;
      }

      const response = await fetch('http://localhost:4002/api/admin/registrar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        if (response.status === 403) {
          throw new Error('No tiene permisos para registrar usuarios');
        }
        throw new Error('Error al registrar usuario');
      }

      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error);
      }

      // Éxito - redirigir a la lista
      alert('Usuario registrado exitosamente');
      navigate('/');
      
    } catch (err) {
      setError(err.message);
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: 'calc(100vh - 56px)' }}>
      <div className="card p-4 m-4 shadow-lg" style={{ maxWidth: '576px', width: '100%' }}>
        <div className="card-body">
          <div className="text-center mb-4">
            <h1 className="card-title h3 fw-bold">Adicionar Usuario</h1>
            <p className="text-muted">Complete el formulario para agregar un nuevo usuario.</p>
          </div>

          {error && (
            <div className="alert alert-danger alert-dismissible fade show" role="alert">
              {error}
              <button 
                type="button" 
                className="btn-close" 
                onClick={() => setError(null)}
              ></button>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="row g-3 mb-3">
              <div className="col-sm-6">
                <label className="visually-hidden" htmlFor="nombre">Nombre</label>
                <input 
                  className="form-control form-control-lg" 
                  id="nombre" 
                  name="nombre" 
                  placeholder="Nombre" 
                  required 
                  type="text"
                  value={formData.nombre}
                  onChange={handleChange}
                  disabled={loading}
                />
              </div>
              <div className="col-sm-6">
                <label className="visually-hidden" htmlFor="apellido">Apellido</label>
                <input 
                  className="form-control form-control-lg" 
                  id="apellido" 
                  name="apellido" 
                  placeholder="Apellido" 
                  required 
                  type="text"
                  value={formData.apellido}
                  onChange={handleChange}
                  disabled={loading}
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="visually-hidden" htmlFor="correo">Correo</label>
              <input 
                autoComplete="email" 
                className="form-control form-control-lg" 
                id="correo" 
                name="correo" 
                placeholder="Correo" 
                required 
                type="email"
                value={formData.correo}
                onChange={handleChange}
                disabled={loading}
              />
            </div>

            <div className="mb-3">
              <label className="visually-hidden" htmlFor="contrasena">Contraseña</label>
              <input 
                autoComplete="new-password" 
                className="form-control form-control-lg" 
                id="contrasena" 
                name="contrasena" 
                placeholder="Contraseña" 
                required 
                type="password"
                value={formData.contrasena}
                onChange={handleChange}
                disabled={loading}
                minLength="6"
              />
            </div>

            <div className="mb-4">
              <label className="form-label" htmlFor="rol">Rol</label>
              <select 
                className="form-select form-select-lg" 
                id="rol" 
                name="rol"
                value={formData.rol}
                onChange={handleChange}
                disabled={loading}
              >
                <option value="USER">Usuario</option>
                <option value="ADMIN">Administrador</option>
              </select>
            </div>

            <div className="d-flex justify-content-end gap-2">
              <button 
                className="btn btn-primary btn-md" 
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Guardando...
                  </>
                ) : (
                  'Guardar Usuario'
                )}
              </button>
              <Link to="/">
                <button 
                  className="btn btn-danger btn-md" 
                  type="button"
                  disabled={loading}
                >
                  Cancelar
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUserPage;