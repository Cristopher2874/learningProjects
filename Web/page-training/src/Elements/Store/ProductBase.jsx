import ProductCard from "./ProductCard";
import { products } from '../../Data/products';
import { useState, useEffect } from "react";

const ProductBase = () => {
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);

    {/* for an API */}
    useEffect(() => {
        setData(products);
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
    <div className="flex flex-row p-5 items-start bg-[#f3f1f2ff] min-h-full text-black overflow-auto
        box-border w-4/5 justify-center
    ">
      <section className="flex">
        <div className="flex flex-wrap gap-5 justify-start items-start mx-0 my-auto max-w-full box-border">
            {data.map((Product) => {
                return(
                    <ProductCard 
                        key={Product.id} /* use for iterate in list */
                        product={Product}
                        addToCard={addToCard}
                    />
                )
            })}
        </div>
      </section>
    </div>
    );
};

export default ProductBase;