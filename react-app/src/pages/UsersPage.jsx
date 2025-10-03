import { Link } from 'react-router-dom';
const UsersPage = () => {
  return (
    <main className="flex-grow-1 container-fluid py-4">
      <div className="mx-auto" style={{ maxWidth: '960px' }}>
        <div className="d-flex flex-wrap justify-content-between align-items-start gap-3 mb-4">
          <div>
            <h2 className="h3 fw-bold">Registered Users</h2>
            <p className="text-muted">Manage and filter user accounts.</p>
          </div>
          <Link to="/add-user">
            <button className="btn btn-primary d-flex align-items-center gap-2">
              <span className="material-symbols-outlined">add</span>
              Add User
            </button>
          </Link>
        </div>
        <div className="d-flex flex-column gap-3 mb-4">
          <div className="input-group">
            <span className="input-group-text bg-transparent border-end-0">
              <span className="material-symbols-outlined text-muted">search</span>
            </span>
            <input
              className="form-control border-start-0"
              placeholder="Search by name, surname, or email"
              type="text"
            />
          </div>
          <div aria-label="Filter buttons" className="btn-group flex-wrap" role="group">
            <button className="btn btn-sm d-flex align-items-center gap-2" type="button">
              <span className="small fw-medium">Role</span>
              <span className="material-symbols-outlined fs-6">expand_more</span>
            </button>
            <button className="btn btn-sm d-flex align-items-center gap-2" type="button">
              <span className="small fw-medium">Status</span>
              <span className="material-symbols-outlined fs-6">expand_more</span>
            </button>
            <button className="btn btn-sm d-flex align-items-center gap-2" type="button">
              <span className="small fw-medium">Date Joined</span>
              <span className="material-symbols-outlined fs-6">expand_more</span>
            </button>
          </div>
        </div>
        <div className="table-responsive rounded-3 border">
          <table className="table table-hover align-middle">
            <thead className="border-bottom">
              <tr>
                <th className="p-3 fw-semibold" scope="col">Name</th>
                <th className="p-3 fw-semibold" scope="col">Surname</th>
                <th className="p-3 fw-semibold" scope="col">Email</th>
                <th className="p-3 fw-semibold text-end" scope="col">Actions</th>
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