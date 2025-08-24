import React from 'react';
import LoginComponent from './components/LoginComponent';
import './App.css'; // O el archivo CSS que estés usando

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Prueba de Autenticación</h1>
                <LoginComponent />
            </header>
        </div>
    );
}

export default App;