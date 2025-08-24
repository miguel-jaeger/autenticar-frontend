import React, { useState } from 'react';

function LoginComponent() {
    const [nombre, setNombre] = useState('');
    const [password, setPassword] = useState('');
    const [mensaje, setMensaje] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nombre, password }),
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
        <form onSubmit={handleSubmit}>
            <h3>Iniciar Sesión</h3>
            <input type="text" placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} />
            <input type="password" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)} />
            <button type="submit">Iniciar Sesión</button>
            <p>{mensaje}</p>
        </form>
    );
}
export default LoginComponent;