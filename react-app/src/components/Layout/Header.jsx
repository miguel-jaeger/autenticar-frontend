import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [token, setToken] = useState(null);
  const [usuario, setUsuario] = useState({ nombre: '', apellido: '' });

  useEffect(() => {
    const t = localStorage.getItem('token');
    setToken(t);

    // Función auxiliar: normaliza nombre y apellido
    const normalizeUser = (raw) => {
      if (!raw) return null;
      // si viene ya con nombre/apellido separados
      if (raw.nombre || raw.apellido || raw.apellidos) {
        const nombre = raw.nombre ?? (raw.nombreCompleto ? raw.nombreCompleto.split(' ')[0] : '');
        const apellido = raw.apellido ?? raw.apellidos ?? (raw.nombreCompleto ? raw.nombreCompleto.split(' ').slice(1).join(' ') : '');
        return { nombre: (nombre || '').trim(), apellido: (apellido || '').trim() };
      }
      // si viene como fullName
      if (raw.fullName || raw.name) {
        const parts = (raw.fullName ?? raw.name).trim().split(/\s+/);
        return { nombre: parts[0] || '', apellido: parts.slice(1).join(' ') || '' };
      }
      return null;
    };

    // 1) Intentar leer 'usuarios' (array)
    try {
      const usuariosStr = localStorage.getItem('usuarios');
      if (usuariosStr) {
        const parsed = JSON.parse(usuariosStr);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const maybe = normalizeUser(parsed[0]);
          if (maybe) {
            setUsuario(maybe);
            console.debug('Header: leído desde localStorage.usuarios[0]:', maybe);
            return;
          }
        }
      }
    } catch (e) {
      console.warn('Header: error parseando localStorage.usuarios', e);
    }

    // 2) Intentar leer 'usuario' (objeto)
    try {
      const usuarioStr = localStorage.getItem('usuario'); // posible clave distinta
      if (usuarioStr) {
        const parsed = JSON.parse(usuarioStr);
        const maybe = normalizeUser(parsed);
        if (maybe) {
          setUsuario(maybe);
          console.debug('Header: leído desde localStorage.usuario:', maybe);
          return;
        }
      }
    } catch (e) {
      console.warn('Header: error parseando localStorage.usuario', e);
    }

    // 3) Intentar extraer del token JWT (si existe)
    if (t) {
      try {
        const raw = t.startsWith('Bearer ') ? t.split(' ')[1] : t;
        const payload = JSON.parse(atob(raw.split('.')[1].replace(/-/g, '+').replace(/_/g, '/')));
        // posibles campos: nombre, apellido, given_name, family_name, name
        const rawUser = {
          nombre: payload.nombre ?? payload.given_name ?? payload.name,
          apellido: payload.apellido ?? payload.family_name
        };
        const maybe = normalizeUser(rawUser);
        if (maybe && (maybe.nombre || maybe.apellido)) {
          setUsuario(maybe);
          console.debug('Header: leído desde payload JWT:', maybe);
          return;
        }
      } catch (e) {
        console.warn('Header: error parseando token JWT for user', e);
      }
    }

    // 4) fallback: limpiar estado
    setUsuario({ nombre: '', apellido: '' });
    console.debug('Header: no se encontraron datos de usuario en localStorage ni token');
  }, [location]);

  const isActive = (path) => (location.pathname === path ? 'active' : '');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('usuarios');
    localStorage.removeItem('usuario');
    setToken(null);
    setUsuario({ nombre: '', apellido: '' });
    navigate('/login');
  };

  return (
    <header className="navbar navbar-expand-md navbar-light bg-white shadow-sm sticky-top">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <svg className="me-2" height="32" viewBox="0 0 48 48" width="32" xmlns="http://www.w3.org/2000/svg">
            <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" fill="currentColor" />
          </svg>
          <h1 className="h5 mb-0 fw-bold">Administración de usuarios</h1>
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          {token && (
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link to="/add-user" className={`nav-link ${isActive('/add-user')}`}>Adicionar</Link>
              </li>
              <li className="nav-item">
                <Link to="/users" className={`nav-link ${isActive('/users')}`}>Listar</Link>
              </li>
            </ul>
          )}

          <div className="d-flex align-items-center ms-auto">
            {token ? (
              <>
                <span className="me-3 text-nowrap">Bienvenido, {usuario.nombre} {usuario.apellido}</span>
                <button type="button" className="btn btn-danger d-flex align-items-center" onClick={handleLogout}>
                  Cerrar sesión
                </button>
              </>
            ) : (
              <Link to="/login" className="btn btn-primary d-flex align-items-center justify-content-center" role="button">
                <span>Autenticar</span>
                <span className="material-symbols-outlined ms-2">login</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
