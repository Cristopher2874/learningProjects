const CardProduct = () => {
    return (
        <div className="text-black">
            <div className="bg-white border-[#ddd] border rounded-md p-5 shadow-sm cursor-pointer transition transform duration-200 hover:translate-y-[-5px] hover:shadow-md">
                <img src="/assets/iphone-13.jpg" alt="Product Image" className="p-3"/>
                <h2 className="text-xl mb-4">Iphone 13</h2>
                <p className="test-[#555] text-sm p-3">The iPhone 13 is a smartphone designed, developed, and marketed by Apple Inc. It is the fourteenth generation of the iPhone, succeeding the iPhone 12 and preceding the iPhone 14.</p>
                <p className="test-[#555] text-sm p-3">$999.00</p>
                <button 
                    className="p-2 mt-3 bg-[#811d2eff] text-[#f3f1f2ff] hover:bg-[#f3b61fff]"
                >
                    Add to card
                </button>
            </div>
        </div>
    );
};

export default CardProduct;