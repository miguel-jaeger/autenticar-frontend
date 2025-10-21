import { Link } from 'react-router-dom';
import useUserList from '../components/Users/UserList';
import { API_URL } from '../config';

const UsersPage = () => {
  const { usuarios, loading, error, eliminarUsuario } = useUserList();

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger m-4" role="alert">
        Error: {error}
      </div>
    );
  }

  return (
    <main className="flex-grow-1 container-fluid py-4">
      <div className="mx-auto" style={{ maxWidth: '960px' }}>
        <div className="d-flex flex-wrap justify-content-between align-items-start gap-3 mb-4">
          <div>
            <h2 className="h3 fw-bold">Usuarios registrados</h2>
            <p className="text-muted">Listado de todos los usuarios registrados.</p>
          </div>
          <Link to="/add-user">
            <button className="btn btn-primary d-flex align-items-center gap-2">
              <span className="material-symbols-outlined">add</span>
              Adicionar
            </button>
          </Link>
        </div>
        
        <div className="table-responsive rounded-3 border">
          <table className="table table-hover align-middle">
            <thead className="border-bottom">
              <tr>
                <th className="p-3 fw-semibold">Nombre</th>
                <th className="p-3 fw-semibold">Apellido</th>
                <th className="p-3 fw-semibold">Correo</th>
                <th className="p-3 fw-semibold">Rol</th>
                <th className="p-3 fw-semibold text-end">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center py-4 text-muted">
                    No hay usuarios registrados
                  </td>
                </tr>
              ) : (
                usuarios.map((usuario) => (
                  <tr key={usuario.idPersona}>
                    <td className="p-3 text-nowrap fw-medium">{usuario.nombre}</td>
                    <td className="p-3 text-nowrap text-muted">{usuario.apellido}</td>
                    <td className="p-3 text-nowrap text-muted">{usuario.correo}</td>
                    <td className="p-3 text-nowrap">
                      <span className="badge bg-primary">{usuario.rol || 'Usuario'}</span>
                    </td>
                    <td className="p-3 text-nowrap text-end">
                      <Link to={`/edit-user/${usuario.idPersona}`}>
                        <button className="btn btn-sm btn-outline-primary d-inline-flex align-items-center gap-1 me-2">
                          <span className="material-symbols-outlined fs-6">stylus_pencil</span>
                          Editar
                        </button>
                      </Link>
                      <button 
                        onClick={() => eliminarUsuario(usuario)}
                        className="btn btn-sm btn-outline-danger d-inline-flex align-items-center gap-1"
                      >
                        <span className="material-symbols-outlined fs-6">delete</span>
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default UsersPage;