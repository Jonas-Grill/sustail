import UserProfile from "../components/UserProfile";
import ProducerProfile from "../components/ProducerProfile";
import {User} from "../types/User";
import {useEffect, useState} from "react";
import {Order} from "../types/Order";
import {BASE_URL} from "./_app";
import {Product} from "../types/Product";

export default function Profile({user}: {user: User}) {
    const [orders, setOrders] = useState<Order[]>([]);
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        if (user) {
            const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                }
            }

            if (!products) {
                fetch(`${BASE_URL}/products`, options).then(res => res.json().then(data => setProducts(data)));
            }

            if (!orders) {
                fetch(`${BASE_URL}/orders`, options).then(res => res.json().then(data => setOrders(data)));

            }
        }
    }, [user, products, orders]);

    if (user) {
        if (user.type === "PRODUCER") {
            return <ProducerProfile user={user} orders={orders} products={products}/>
        } else {
            return <UserProfile user={user} orders={orders} products={products}/>
        }
    } else {
        return <h2>Log in to view your profile</h2>
    }
}