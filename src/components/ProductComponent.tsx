import {Stack} from "react-bootstrap";
import Product from "../models/product";
import '../style.scss'
import {useContext} from "react";
import {ProductListContext} from "../context/ProductListContext";

interface ProductProps {
    product: Product,
    fromCartPage: boolean,

    navigate(): void,
}


function ProductComponent(props: ProductProps,) {

    const {add} = useContext(ProductListContext)

    return (
        <div className="text-center">
            <Stack
                direction="vertical"
                className="product"
            >
                <img className="image" src={props.product.image} alt={props.product.title}/>
                <p className="title">{props.product.title}</p>
                <p className="price">{props.product.price}$</p>
                <p className="description">{props.product.description}</p>
            </Stack>
            <button className='btn btn-outline-dark me-lg-3 ' onClick={() => props.navigate()}>Details</button>
            {props.fromCartPage ? <></> :
                <button className='btn btn-outline-dark ' onClick={() => add(props.product)}>Add to cart</button>}
        </div>
    );
}

export default ProductComponent;
