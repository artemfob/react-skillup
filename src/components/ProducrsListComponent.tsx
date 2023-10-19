import {ReactElement, useEffect, useState} from "react";
import {useNavigate, } from "react-router-dom";
import Product from "../models/product";
import ProductComponent from "./ProductComponent";

interface IProductList {
    list?: Product[]
}


function ProductsListComponent(props: IProductList): ReactElement {
    const [list, setList] = useState<Product[]>(props.list ?? [])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();

    useEffect(() => {
        if (!props.list) {
            fetch('https://fakestoreapi.com/products?limit=150').then(res => {
                if (res.ok) {
                    return res.json()
                }
            }).then(data => setList(data)
            ).finally(() => setLoading(false))
        } else {
            setList(props.list)
            setLoading(false)
        }
    }, [props.list])

    function navigateToDetails(product: Product) {
        const {title, price, description, image, id} = product
        navigate(`/details?title=${title}&price=${price}&description=${description}&image=${image}&id=${id}`)
    }


    return (
        <div className="product_list">
            {!loading && list.map((e: Product) =>
                <ProductComponent key={e.id} product={e} navigate={() => navigateToDetails(e)}
                                  fromCartPage={props.list !== undefined}/>
            )}
        </div>
    );
}

export default ProductsListComponent;
