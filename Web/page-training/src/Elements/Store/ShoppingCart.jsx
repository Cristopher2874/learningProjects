import { LayoutContext } from "../../Layout/LayoutStore";
import { useContext } from "react";

const ShoppingCart = () => {
    const { cart } = useContext(LayoutContext);

    function getImages(product){
        const response = product.images[0];
        try{
            const data = JSON.parse(response);
            return data[0];
        }catch{
            return response;
        }
    }
    
    return (
        <div className="flex flex-col p-5 items-start bg-[#f3f1f2ff] min-h-full text-black overflow-auto
            box-border w-4/5 justify-start">
            <section className="flex flex-col mt-4 bg-white p-3 rounded-lg shadow-md w-full justify-between items-start"> 
                <h2 className="mb-2 text-black text-2xl">Shopping Cart</h2>
                <a className="cursor-pointer hover:text-black">Select all products</a>
                <hr className="border-t-[#888b8d] mb-6 w-full mt-3" />
                <div className="w-full">
                    {cart.map((product) => {
                        return(
                            <div key={product.id} className="flex flex-row justify-center items-center bg-white border-[#ddd] border rounded-md p-3 shadow-sm mb-3 transition transform duration-200 hover:translate-y-[-5px] hover:shadow-md">
                                <img src={`${getImages(product)}`} alt={`Image of ${product.title}`} className="p-3 flex-initial w-1/3 h-full mr-6 rounded"/>
                                <section className="flex flex-col justify-start items-start w-2/3">
                                    <h2 className="text-xl mb-4">{product.title}</h2>
                                    <p className="test-[#555] text-sm p-3">${product.price}</p>
                                    <div className="flex justify-between items-center w-26">
                                        <a href="" className="bg-[#811d2eff] w-1/3 p-1 rounded-md text-[#f3f1f2ff] hover:bg-[#f3b61fff]">+</a>
                                        <p className="test-[#555] text-sm p-3">{product.quantity}</p>
                                        <a href="" className="bg-[#811d2eff] w-1/3 p-1 rounded-md text-[#f3f1f2ff] hover:bg-[#f3b61fff]">-</a>
                                    </div>
                                    <button 
                                        className="p-2 mt-3 bg-[#811d2eff] text-[#f3f1f2ff] hover:bg-[#f3b61fff]"
                                    >
                                        Buy now
                                    </button>
                                </section>
                            </div>
                        )
                    })}
                </div>
            </section>
        </div>
    );
}

export default ShoppingCart;