import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { parseJwt } from '../../utils/jwt';

const RequireAuth = ({ children, requiredRole = null }) => {
    const location = useLocation();
    const token = localStorage.getItem('token');

    if (!token) {
        // no autenticado -> ir a login
        return <Navigate to="/login" replace state={{ from: location }} />;
    }

    if (requiredRole) {
        const payload = parseJwt(token);
        const roles = payload?.roles ?? [];
        // si roles vienen sin prefijo ROLE_, comparamos con requiredRole directo
        const hasRole = roles.includes(requiredRole) || roles.includes(`ROLE_${requiredRole}`);
        if (!hasRole) {
            // no autorizado -> 403 (puedes redirigir a /403 o mostrar mensaje)
            return <Navigate to="/403" replace />;
        }
    }

    // todo ok
    return children;
};

export default RequireAuth;
