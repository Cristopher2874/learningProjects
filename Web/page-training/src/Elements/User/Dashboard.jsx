import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    const handleLogin = (event) => {
        event.preventDefault();
        navigate('/home');
    };

    return (
        <div className="login-card">
            <h2>Init card</h2>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="username">Nómina / usuario:</label>
                    <input type="text" id="username" placeholder="Usuario" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" id="password" placeholder="Contraseña" />
                </div>
                <br />
                <button type="submit">Ingresar</button>
            </form>
            <p><a href="#">¿Olvidaste tu contraseña?</a></p>
            <p><a href="#">¿Necesitas ayuda?</a></p>
        </div>
    );
};

export default Dashboard;
