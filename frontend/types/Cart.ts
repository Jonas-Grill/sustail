import {Product} from "./Product";

export type Cart = {
    items: {
        product: Product;
        quantity: number;
    }[]
}