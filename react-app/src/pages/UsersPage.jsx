import { Link } from 'react-router-dom';
const UsersPage = () => {
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
                <th className="p-3 fw-semibold" scope="col">Nombre</th>
                <th className="p-3 fw-semibold" scope="col">Apellido</th>
                <th className="p-3 fw-semibold" scope="col">Correo</th>
                <th className="p-3 fw-semibold text-end" scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Sophia", surname: "Clark", email: "sophia.clark@email.com" },
                { name: "Liam", surname: "Walker", email: "liam.walker@email.com" },
                { name: "Olivia", surname: "Hall", email: "olivia.hall@email.com" },
                { name: "Noah", surname: "Young", email: "noah.young@email.com" },
                { name: "Ava", surname: "King", email: "ava.king@email.com" },
                { name: "Ethan", surname: "Wright", email: "ethan.wright@email.com" },
                { name: "Isabella", surname: "Scott", email: "isabella.scott@email.com" },
                { name: "Mason", surname: "Green", email: "mason.green@email.com" },
                { name: "Mia", surname: "Baker", email: "mia.baker@email.com" },
                { name: "Oliver", surname: "Adams", email: "oliver.adams@email.com" },
              ].map(({ name, surname, email }) => (
                <tr key={email}>
                  <td className="p-3 text-nowrap fw-medium">{name}</td>
                  <td className="p-3 text-nowrap text-muted">{surname}</td>
                  <td className="p-3 text-nowrap text-muted">{email}</td>
                  <td className="p-3 text-nowrap text-end">
                    <button className="btn btn-sm btn-outline-primary d-inline-flex align-items-center gap-1">
                      <span className="material-symbols-outlined fs-6">stylus_pencil</span>
                      Editar
                    </button>
                    <button className="btn btn-sm btn-outline-danger d-inline-flex align-items-center gap-1">
                      <span className="material-symbols-outlined fs-6">delete</span>
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default UsersPage;