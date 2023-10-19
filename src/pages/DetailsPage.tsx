import {useSearchParams} from "react-router-dom";
import '../style.scss'
import {useContext} from "react";
import {ProductListContext} from "../context/ProductListContext";
import Product from "../models/product";

function DetailsPage() {
    const {add, chosen} = useContext(ProductListContext)
    const [params] = useSearchParams()
    const product: Product = {
        title: params.get('title') ?? "",
        price: params.get('price') ?? "",
        description: params.get('description') ?? "",
        image: params.get('image') ?? '',
        id: Number(params.get('id'))??0,
        category: params.get('category') ?? ''
    }
    return (
        <div className="details">
            <img src={product.image} alt={product.image}/>
            <div className="text">
                <p className="title">{product.title}</p>
                <p className="price">{product.price}$</p>
                <p className="description">{product.description}</p>
                {!chosen.some(e => e.id === product.id) &&
                    <button className='btn btn-outline-dark ' onClick={() => add(product)}>Add to
                        cart</button>}
            </div>
        </div>
    );
}

export default DetailsPage;
