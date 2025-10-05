import React from 'react';
import { Link } from 'react-router-dom';

const AddUser = ({
    formData = { nombre: '', apellido: '', correo: '', contrasena: '', rol: 'USER' },
    onChange = () => { },
    onSubmit = () => { },
    loading = false,
    error = null,
    setError = () => { },
    cancelPath = '/',
    showRol = false  // <<< nuevo prop para controlar la visibilidad del campo rol
}) => {
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
                            <button type="button" className="btn-close" onClick={() => setError && setError(null)}></button>
                        </div>
                    )}

                    <form onSubmit={onSubmit}>
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
                                    onChange={onChange}
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
                                    onChange={onChange}
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
                                onChange={onChange}
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
                                onChange={onChange}
                                disabled={loading}
                                minLength="6"
                            />
                        </div>

                       
                        {showRol && (
                            <div className="mb-4">
                                <label className="form-label" htmlFor="rol">Rol</label>
                                <select
                                    className="form-select form-select-lg"
                                    id="rol"
                                    name="rol"
                                    value={formData.rol}
                                    onChange={onChange}
                                >
                                    <option value="USER">Usuario</option>
                                    <option value="ADMIN">Administrador</option>
                                </select>
                            </div>
                        )}

                        <div className="d-flex justify-content-end gap-2">
                            <button className="btn btn-primary btn-md" type="submit" disabled={loading}>
                                {loading ? 'Guardando...' : 'Guardar Usuario'}
                            </button>
                            <Link to={cancelPath}>
                                <button className="btn btn-danger btn-md" type="button" disabled={loading}>Cancelar</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddUser;
