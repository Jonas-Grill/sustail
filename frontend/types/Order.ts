export type Order = {
    _id: string,
    product_id: string,
    buyer_id: string,
    seller_id: string,
    quantity: number,
    address: {
        street: string,
        street_number: string,
        city: string,
        postal_code: string,
    }
    state: string,
    timestamp: {
        created: Date,
        fulfilled: Date,
        in_progress: Date,
        cancelled: Date,
    }
}