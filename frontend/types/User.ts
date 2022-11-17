export type User = {
    _id: string,
    name: {
        first: string,
        last: string,
    },
    email: string,
    password: string,
    address: {
        street: string,
        street_number: string,
        city: string,
        postal_code: string,
    },
    type: string,
    token: string,
}