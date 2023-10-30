import {useSearchParams} from "react-router-dom";
import '../style.scss'
import {useContext, useEffect, useState} from "react";
import {ProductListContext} from "../context/ProductListContext";
import Product from "../models/product";

function DetailsPage() {
    const [params] = useSearchParams()

    const {add, chosen, list} = useContext(ProductListContext)
    const id = Number(params.get('id')) ?? 0

    const [product, setProduct] = useState<Product>(list.filter(e => e.id === id)[0])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(()=>{
        if(product===undefined){
            fetch(`https://fakestoreapi.com/products/${id}`).then(res => {
                if (res.ok) {
                    return res.json()

                }
            }).then(data => {
                    setProduct(data)
                }
            ).finally(()=>setLoading(false))
        }else{
            setLoading(false)
        }
    },[id, product])

    if(loading){
        return (
            <h2 className="text-center mt-4">Loading</h2>
        )
    }else
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
