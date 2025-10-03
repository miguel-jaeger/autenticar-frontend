import { Link } from 'react-router-dom';

const WelcomeSection = () => {
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
            <Link 
              to="/add-user"
              className="btn btn-primary btn-lg d-flex align-items-center justify-content-center" 
              role="button"
            >
              <span className="material-symbols-outlined me-2">person_add</span>
              <span>Adicionar Usuario</span>
            </Link>
            
            <Link 
              to="/users"
              className="btn btn-primary-light btn-lg d-flex align-items-center justify-content-center" 
              role="button"
            >
              <span className="material-symbols-outlined me-2">list_alt</span>
              <span>Listar Usuarios</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;