import { useContext } from "react";
import { LayoutContext } from "../../Layout/LayoutStore";

const ProductBase = () => {
    const { data, addToCard } = useContext(LayoutContext);

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
        <div className="flex flex-row p-5 items-start bg-[#f3f1f2ff] min-h-full text-black overflow-auto
            box-border w-4/5 justify-center
        ">
        <section className="flex">
            <div className="flex flex-wrap gap-5 justify-start items-start mx-0 my-auto max-w-full box-border">
                {data.map((product) => {
                    return(
                        <div key={product.id} className="bg-white border-[#ddd] border rounded-md p-5 w-64 shadow-sm cursor-pointer transition transform duration-200 hover:translate-y-[-5px] hover:shadow-md">
                            <img src={`${getImages(product)}`} alt={`Image of ${product.title}`} className="p-3"/>
                            <h2 className="text-xl mb-4">{product.title}</h2>
                            <p className="test-[#555] text-sm p-3">{product.description}</p>
                            <p className="test-[#555] text-sm p-3">${product.price}</p>
                            <p className="test-[#555] text-sm p-3">Category: {product.category.name}</p>
                            <button
                                className="p-2 mt-3 bg-[#811d2eff] text-[#f3f1f2ff] hover:bg-[#f3b61fff]"
                                onClick={() => addToCard(product)}
                            >
                                Add to card
                            </button>
                        </div>
                    )
                })}
            </div>
        </section>
        </div>
    );
};

export default ProductBase;