import React, {createContext, useState} from "react";
import Product from "../models/product";
import ProductListContextModel from "../models/product_list_context";


export const ProductListContext = createContext<ProductListContextModel>({
    chosen: [],
    add(product: Product){
    }
})

export const ProductListState = ({children}: { children: React.ReactNode }) => {
    const [chosenList, setChosenList] = useState<Product[]>([])

    const add = (product: Product) => {
        if (chosenList.some(e => e.id === product.id)) {
            return
        } else {
            setChosenList([...chosenList, product])
        }
    }

    return (
        <ProductListContext.Provider value={{chosen: chosenList, add}}>
            {children}
        </ProductListContext.Provider>
    )
}