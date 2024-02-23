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

export const categories:Category[] = [
    {
        name: "flowers",
        products: products.slice(0, 5)
    },
    {
        name: "cars",
        products: []
    },
    {
        name: "houses",
        products:[]
    },
    {
        name: "animals",
        products:[]
    },
    
]

