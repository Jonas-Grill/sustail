export type Product = {
    _id: string,
    name: string,
    seller_id: string,
    image: {
        src: string,
        alt: string,
    },
    price: {
        amount_in_euros: string,
        metric: string,
    },
    type: string,
    sustainability_score: {
        packaging: string,
        transportation_type: string
    },
    weight_in_g: number,
    nutrition_per_100g: {
        energy: number,
        fat: {
            total: number,
            saturates:number,
        },
        carbohydrate: {
            total: number,
            sugar: number,
        },
        protein:number,
        salt: number,
    },
    description: string,
}