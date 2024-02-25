import { ProductItem } from "./product-items";
import { products } from "./product-items";

export class Category {
    name: string;
    products: ProductItem[];

    constructor(name: string) {
        this.name = name;
        this.products = [];
    }
}

export const categories: Category[] = [
    {
        name: "flowers",
        products: products.slice(0, 5)
    },
    {
        name: "cars",
        products: products.slice(5, 10)
    },
    {
        name: "duplo",
        products: products.slice(15, 20)
    },
    {
        name: "animals",
        products: products.slice(10, 15)
    },

]

