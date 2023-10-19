import React, {useContext} from "react";
import {ProductListContext} from "../context/ProductListContext";
import ProductsListComponent from '../components/ProducrsListComponent'

function CartPage() {
    const {chosen} = useContext(ProductListContext)

    return (
        <>
            <ProductsListComponent list={chosen}/>
        </>
    );
}

export default CartPage;
