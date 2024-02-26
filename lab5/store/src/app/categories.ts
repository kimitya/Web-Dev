import { ProductItem } from "./product-items";
import { flowers, cars, duplo, animals } from "./product-items";

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
        products: flowers
    },
    {
        name: "cars",
        products: cars
    },
    {
        name: "duplo",
        products: duplo
    },
    {
        name: "animals",
        products: animals
    },

]

