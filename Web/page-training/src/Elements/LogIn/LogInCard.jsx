import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

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
            <form onSubmit={handleLogin} className="w-80 m-auto p-6 border-white rounded-lg bg-[#f9f9f9] shadow-black shadow-md">
                <h2 className='mb-3 text-black justify-center text-xl'>Iniciar Sesión</h2>
                <div className="mb-4">
                    <label htmlFor="username" className="flex justify-start items-start mb-2 text-black">Nómina / usuario:</label>
                    <input type="text" id="username" placeholder="Usuario" 
                        className="w-full p-1.5 border box-border border-black border-spacing-1 rounded-md bg-white text-black"
                    />
                </div>
                <div className="relative">
                    <label htmlFor="password" className="flex justify-start items-start mb-2 text-black">Contraseña:</label>
                    <input 
                        type={showPassword ? "text" : "password"}
                        id="password"
                        placeholder="Contraseña"
                        className="w-full p-1.5 border box-border border-black border-spacing-1 rounded-md bg-white text-black"
                    />
                    <button type="button" onClick={togglePasswordVisibility} 
                        className="absolute text-black border-none outline-none right-2.5 top-8 bg-transparent cursor-pointer max-w-4 focus:outline-none"
                    >
                        <i className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}></i>
                    </button>
                </div>
                <br />
                <button type="submit"
                    className='w-full p-1 border-none rounded-md bg-black text-white text-base cursor-pointer ease-linear duration-300 hover:bg-[#da291c]'
                >Ingresar</button>
            <p className='mt-4 text-center'><a href="#" className='text-black hover:underline hover:text-[#da291c]'>¿Olvidaste tu contraseña?</a></p>
            <p className='mt-4 text-center'><a href="#" className='text-black hover:underline hover:text-[#da291c]'>¿Necesitas ayuda?</a></p>
            </form>
    );
};

export default LoginCard;
