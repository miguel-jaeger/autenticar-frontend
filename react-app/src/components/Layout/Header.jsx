import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className="navbar navbar-expand-md navbar-light bg-white shadow-sm sticky-top">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <svg 
            className="me-2" 
            height="32" 
            viewBox="0 0 48 48" 
            width="32" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" 
              fill="currentColor"
            />
          </svg>
          <h1 className="h5 mb-0 fw-bold">User Manager</h1>
        </Link>

        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link 
                to="/add-user" 
                className={`nav-link ${isActive('/add-user')}`}
              >
                Adicionar Usuario
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/users" 
                className={`nav-link ${isActive('/users')}`}
              >
                Listar Usuarios
              </Link>
            </li>
          </ul>
          
          <div className="d-flex align-items-center mt-3 mt-md-0">
            <Link 
              to="/login" 
              className="btn btn-primary d-flex align-items-center justify-content-center" 
              role="button"
            >
              <span>Autenticar</span>
              <span className="material-symbols-outlined ms-2">login</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;