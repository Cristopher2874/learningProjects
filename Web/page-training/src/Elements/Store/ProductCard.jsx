const ProductCard = (props) => {

    return (
    <>
        <div className="bg-white border-[#ddd] border rounded-md p-5 w-64 shadow-sm cursor-pointer transition transform duration-200 hover:translate-y-[-5px] hover:shadow-md">
            <img src={`/assets/${props.product.image}`} alt="Product Image" className="p-3"/>
            <h2 className="text-xl mb-4">{props.product.name}</h2>
            <p className="test-[#555] text-sm p-3">{props.product.description}</p>
            <p className="test-[#555] text-sm p-3">{props.product.price}</p>
            <button 
                className="p-2 mt-3 bg-[#811d2eff] text-[#f3f1f2ff] hover:bg-[#f3b61fff]"
                onClick={() => props.addToCard(props.product)}
            >
                Add to card
            </button>
        </div>
    </>
    );
}

export default ProductCard;