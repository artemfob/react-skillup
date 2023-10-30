import {ReactElement, useContext,} from "react";
import {useNavigate,} from "react-router-dom";
import Product from "../models/product";
import ProductComponent from "./ProductComponent";
import {ProductListContext} from "../context/ProductListContext";


function ProductsListComponent(): ReactElement {
    const {list, chosen} = useContext(ProductListContext);

    const navigate = useNavigate();

    function navigateToDetails(id: number) {
        navigate(`/details?id=${id}`)
    }

    function showList() {
        if (window.location.pathname === '/cart') {
            return chosen.map((e: Product) =>
                <ProductComponent key={e.id} product={e} navigate={() => navigateToDetails(e.id)}
                                  fromCartPage={chosen !== undefined}/>
            )
        } else {
            return list.map((e: Product) =>
                <ProductComponent key={e.id} product={e} navigate={() => navigateToDetails(e.id)}
                                  fromCartPage={chosen === undefined}/>
            )
        }
    }


    return (
        <div className="product_list">
            {showList()}
        </div>
    );
}

export default ProductsListComponent;
