import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './LoginCard.css';

const LoginCard = () => {
    const navigate = useNavigate();
    const handleLogin = (event) => {
        event.preventDefault();
        navigate('/home');
    };

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="login-card">
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="username">Nómina / usuario:</label>
                    <input type="text" id="username" placeholder="Usuario" />
                </div>
                <div className="form-group password-container">
                    <label htmlFor="password">Contraseña:</label>
                    <input 
                        type={showPassword ? "text" : "password"}
                        id="password"
                        placeholder="Contraseña"
                    />
                    <button type="button" onClick={togglePasswordVisibility} className="show-password-btn">
                        <i className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}></i>
                    </button>
                </div>
                <br />
                <button type="submit">Ingresar</button>
            </form>
            <p><a href="#">¿Olvidaste tu contraseña?</a></p>
            <p><a href="#">¿Necesitas ayuda?</a></p>
        </div>
    );
};

export default LoginCard;
