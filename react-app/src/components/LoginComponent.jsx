import React, { useState } from 'react';

function LoginComponent() {
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [mensaje, setMensaje] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
       
        try {
            const response = await fetch('https://pbqm7bf1-4002.brs.devtunnels.ms/api/usuarios/autenticarUsuario', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ correo: correo, password: contrasena }),
            });
            const data = await response.json();
            if (response.ok) {
                localStorage.setItem('jwt', data.token);
                setMensaje('¡Autenticación exitosa! Token guardado: ' + data.token);

            } else {
                setMensaje('Error en la autenticación: ' + data.error);
            }
        } catch (error) {
            setMensaje('Error de conexión con el servidor. Intente de nuevo.');
        }
    };
   return (
        // Contenedor para centrar el formulario en la pantalla
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4">
                    <div className="card shadow-lg p-4">
                        <h3 className="card-title text-center mb-4">Iniciar Sesión</h3>
                        
                        <form onSubmit={handleSubmit}>
                            {/* Campo de Correo */}
                            <div className="mb-3">
                                <label htmlFor="inputEmail" className="form-label">Correo Electrónico</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputEmail"
                                    placeholder="Ingrese su correo"
                                    value={correo}
                                    onChange={e => setCorreo(e.target.value)}
                                    required
                                />
                            </div>

                            {/* Campo de Contraseña */}
                            <div className="mb-4">
                                <label htmlFor="inputPassword" className="form-label">Contraseña</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="inputPassword"
                                    placeholder="Contraseña"
                                    value={contrasena}
                                    onChange={e => setContrasena(e.target.value)}
                                    required
                                />
                            </div>

                            {/* Botón de Submit */}
                            <div className="d-grid gap-2">
                                <button type="submit" className="btn btn-primary">
                                    Iniciar Sesión
                                </button>
                            </div>
                        </form>
                        
                        {/* Mostrar Mensajes de Alerta */}
                        {mensaje && (
                            <div className={`alert ${getAlertClass()} mt-4`} role="alert">
                                {mensaje}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default LoginComponent;