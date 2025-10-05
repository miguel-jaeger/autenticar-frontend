import { Link } from 'react-router-dom';
import { parseJwt } from '../../utils/jwt'; // Ajusta la ruta si tu helper está en otra carpeta

const WelcomeSection = () => {
  const token = localStorage.getItem('token');
  const payload = token ? parseJwt(token) : null;
  const roles = payload?.roles || [];
  const isAdmin = roles.includes('ADMIN') || roles.includes('ROLE_ADMIN');

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-8 mx-auto text-center">
          <h1 className="display-4 fw-bold">
            Bienvenido a la Aplicación de Gestión de Usuarios
          </h1>

          <p className="lead mt-4 text-muted">
            Esta aplicación le permite gestionar fácilmente las cuentas de usuario. 
            Puede agregar nuevos usuarios, ver una lista de usuarios existentes y 
            autenticarse o cerrar sesión en su cuenta. Utilice el menú de navegación 
            de arriba para comenzar.
          </p>

          <div className="mt-5 d-grid gap-3 d-sm-flex justify-content-sm-center">
            {/* Este botón se muestra para cualquier usuario autenticado */}
            <Link
              to="/add-user"
              className="btn btn-primary btn-lg d-flex align-items-center justify-content-center"
              role="button"
            >
              <span className="material-symbols-outlined me-2">person_add</span>
              <span>Adicionar Usuario</span>
            </Link>

            {/* Este botón solo se muestra si el usuario es ADMIN */}
            {token && isAdmin && (
              <Link
                to="/users"
                className="btn btn-primary-light btn-lg d-flex align-items-center justify-content-center"
                role="button"
              >
                <span className="material-symbols-outlined me-2">list_alt</span>
                <span>Listar Usuarios</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
