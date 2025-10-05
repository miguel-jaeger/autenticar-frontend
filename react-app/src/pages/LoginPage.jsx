import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const LoginPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const [formData, setFormData] = useState({
    correo: '',
    contrasena: ''
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
      const response = await fetch('http://localhost:4002/api/usuarios/autenticar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Credenciales invalidas');
      }

      // Guardar token en localStorage
      localStorage.setItem('token', data.token);
      
      // Tambi�n puedes guardar informaci�n adicional del usuario
      localStorage.setItem('userEmail', formData.correo);

      // Redirigir a la p�gina principal
      navigate('/');
      
    } catch (err) {
      setError(err.message);
      console.error('Error de autenticacion:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex-grow-1 d-flex align-items-center justify-content-center py-5 px-3">
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <div className="text-center">
          <h2 className="mt-4 h3 fw-bold tracking-tight">Inicie sesion en su cuenta</h2>
        </div>

        {error && (
          <div className="alert alert-danger mt-3" role="alert">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-4">
          <div className="p-4 rounded-3 shadow-sm bg-body-tertiary border">
            <div className="mb-3">
              <label className="form-label" htmlFor="correo">Correo electronico</label>
              <input
                autoComplete="email"
                className="form-control"
                id="correo"
                name="correo"
                placeholder="usted@ejemplo.com"
                required
                type="email"
                value={formData.correo}
                onChange={handleChange}
                disabled={loading}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="contrasena">Contraseña</label>
              <input
                autoComplete="current-password"
                className="form-control"
                id="contrasena"
                name="contrasena"
                placeholder="Contraseña"
                required
                type="password"
                value={formData.contrasena}
                onChange={handleChange}
                disabled={loading}
              />
            </div>
           
          </div>
          <div className="mt-4">
            <button 
              className="w-100 btn btn-primary btn-lg" 
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                  Iniciando sesion...
                </>
              ) : (
                'Iniciar sesion'
              )}
            </button>
          </div>
        </form>
        <p className="mt-3 text-center text-secondary">
          No tiene una cuenta?{' '}
           <Link to='/add-user'>                                          <p className="" type="button" disabled={loading}>Registrarse</p>
                                      </Link>
          
        </p>
      </div>
    </main>
  );
};

export default LoginPage;