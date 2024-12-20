import CardProduct from "./CartProduct";

const ShoppingCart = () => {
    
    return (
        <div className="flex flex-col p-5 items-start bg-[#f3f1f2ff] min-h-full text-black overflow-auto
            box-border w-4/5 justify-start">
            <section className="flex flex-col mt-4 bg-white p-3 rounded-lg shadow-md w-full justify-between items-start"> 
                <h2 className="mb-2 text-black text-2xl">Shopping Cart</h2>
                <a className="cursor-pointer hover:text-black">Select all products</a>
                <hr className="border-t-[#888b8d] mb-6 w-full mt-3" />
                <div className="w-full">
                    <CardProduct />
                </div>
            </section>
        </div>
    );
}

export default ShoppingCart;