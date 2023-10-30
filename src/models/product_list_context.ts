import Product from "./product";

export default interface ProductListContextModel {
    chosen: Product[],
    list: Product[],

    add(product: Product): void,
}
