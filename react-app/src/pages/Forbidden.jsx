import React from 'react';
import { Link } from 'react-router-dom';

const Forbidden = () => (
  <div className="container py-5">
    <h2>403 - No autorizado</h2>
    <p>No tienes permisos para acceder a esta página.</p>
    <Link to="/">Volver al inicio</Link>
  </div>
);

export default Forbidden;
