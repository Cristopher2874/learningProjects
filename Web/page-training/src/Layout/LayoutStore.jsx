import { createContext, useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import reactLogo from "/assets/vite.svg";
import SearchBar from "../Elements/Store/SearchBar";

export const LayoutContext = createContext();

const LayoutStore = () => {
    const [searchItem, setSearchItem] = useState('');
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        try{
            fetch('https://api.escuelajs.co/api/v1/products')
                .then(response => response.json())
                .then(products => setData(products))
                .catch(error => {
                    alert('Error fetching products: ' + error.message);
                });
        }
        catch{
            console.log('Error fetching products');
        }
    }, []);

    function addToCard(product){
        const item = cart.findIndex((item) => item.id === product.id);
        if(item === -1){
            product.quantity = 1;
            setCart([...cart, product]);
        } else {
            const newCart = [...cart];
            newCart[item].quantity++;
            setCart(newCart);
        }
    }

    return (
        <LayoutContext.Provider value={{searchItem, setSearchItem, data, setData, cart, addToCard, setCart}}>
        <div className="flex flex-col h-screen">
            <header className="flex justify-evenly items-center p-5 bg-[#27223aff]">
                <img className="flex-initial mr-3" src={reactLogo}></img>

                <SearchBar />

                <Link to="/home" className="text-[#f3f1f2ff] px-4">
                    <i className="fas fa-user-circle"></i>
                    <p>My Profile</p>
                </Link>
                <Link to="/store/cart" className="text-[#f3f1f2ff]">
                    <i className="fas fa-wallet"></i>
                    <p>Cart</p>
                </Link>
            </header>
            <nav className="flex justify-row items-auto p-1 w-full bg-[#463d68]">
                    <ul className="flex flex-row justify-around items-center w-full">
                        <li className="p-2"><Link to="/store" className="text-[#f3f1f2ff]">Home</Link></li>
                        <li className="p-2"><Link to="#products" className="text-[#f3f1f2ff]">Products</Link></li>
                        <li className="p-2"><Link to="#deals" className="text-[#f3f1f2ff]">Deals</Link></li>
                        <li className="p-2"><Link to="#contact" className="text-[#f3f1f2ff]">Contact</Link></li>
                    </ul>
            </nav>
            <main className="bg-[#f3f1f2ff] flex-grow flex-1 justify-center items-center">
                <div className="flex justify-center items-center w-full h-full">

                    <Outlet />

                </div>
            </main>
            <footer className="justify-center items-center w-full bg-[#27223aff] text-[#f3f1f2ff] p-2">
                <p>&copy; 2023 Vite Store. All rights reserved.</p>
            </footer>
        </div>
        </LayoutContext.Provider>
    );
};

export default LayoutStore;

/* CSS HEX
/* CSS HEX
--dark-purple: #27223aff;
--uranian-blue: #a9cef4ff;
--xanthous: #f3b61fff;
--claret: #811d2eff;
--white-smoke: #f3f1f2ff;
*/