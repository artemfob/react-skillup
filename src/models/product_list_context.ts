import Product from "./product";

export default interface ProductListContextModel {
    chosen: Product[],
    add(product:Product): void
}
