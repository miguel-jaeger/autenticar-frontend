import { Link } from 'react-router-dom';

const AddUserPage = () => {
  return (
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: 'calc(100vh - 56px)' }}>
      <div className="card p-4 m-4 shadow-lg" style={{ maxWidth: '576px', width: '100%' }}>
        <div className="card-body">
          <div className="text-center mb-4">
            <h1 className="card-title h3 fw-bold">Adicionar Usuario</h1>
            <p className="text-muted">Complete el formulario para agregar un nuevo usuario.</p>
          </div>
          <form action="#" method="POST">
            <div className="row g-3 mb-3">
              <div className="col-sm-6">
                <label className="visually-hidden" htmlFor="first-name">Nombre</label>
                <input className="form-control form-control-lg" id="first-name" name="first-name" placeholder="Nombre" required type="text" />
              </div>
              <div className="col-sm-6">
                <label className="visually-hidden" htmlFor="last-name">Apellido</label>
                <input className="form-control form-control-lg" id="last-name" name="last-name" placeholder="Apellido" required type="text" />
              </div>
            </div>
            <div className="mb-3">
              <label className="visually-hidden" htmlFor="email-address">Correo</label>
              <input autoComplete="email" className="form-control form-control-lg" id="email-address" name="email" placeholder="Correo" required type="email" />
            </div>
            <div className="mb-4">
              <label className="visually-hidden" htmlFor="password">Contraseña</label>
              <input autoComplete="current-password" className="form-control form-control-lg" id="password" name="password" placeholder="Contraseña" required type="password" />
            </div>
            <div className="d-flex justify-content-end gap-2">
              <button className="btn btn-primary btn-md" type="submit">Guardar Usuario</button>
              <Link to="/">
                <button className="btn btn-danger btn-md" type="button">
                  <i className="bi bi-trash-fill"></i>
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
