import { Outlet } from "react-router-dom";

const LayoutStore = () => {
    return (
        <div className="h-screen flex flex-col justify-between w-full">
            <header className="flex flex-row justify-evenly items-center p-5">
                <div className="flex-initial mr-5">Store Logo</div>
                <nav className="flex-initial flex-row justify-between items-center">
                    <ul className="flex flex-row">
                        <li className="p-2"><a href="#home">Home</a></li>
                        <li className="p-2"><a href="#products">Products</a></li>
                        <li className="p-2"><a href="#deals">Deals</a></li>
                        <li className="p-2"><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <div className="flex-initial">
                    <input type="text" placeholder="Search for products..." className="rounded-lg p-2 mr-1"/>
                    <button className="p-2">Search</button>
                </div>
                <div className="flex-initial">
                    <a href="#cart">Cart</a>
                </div>
            </header>
            <main className="main-content">
                <section className="p-5">
                    <h1>Welcome to Our Store</h1>
                    <p>Find the best products at unbeatable prices!</p>
                </section>
                <section className="products">
                    <h2>Featured Products</h2>
                    <div className="p-5">
                        <Outlet />
                    </div>
                </section>
            </main>
            <footer className="footer">
                <p>&copy; 2023 Store Name. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LayoutStore;