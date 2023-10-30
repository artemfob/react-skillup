import React, {createContext, useEffect, useState} from "react";
import Product from "../models/product";
import ProductListContextModel from "../models/product_list_context";


export const ProductListContext = createContext<ProductListContextModel>({
    chosen: [],
    list: [],
    add(product: Product) {
    }
})

export const ProductListState = ({children}: { children: React.ReactNode }) => {
    const [chosenList, setChosenList] = useState<Product[]>([])
    const [list, setList] = useState<Product[]>([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=150').then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(data => setList(data)
        )

    }, [])

    const add = (product: Product) => {
        if (chosenList.some(e => e.id === product.id)) {
            return
        } else {
            setChosenList([...chosenList, product])
        }
    }

    return (
        <ProductListContext.Provider value={{chosen: chosenList, add, list: list}}>
            {children}
        </ProductListContext.Provider>
    )
}