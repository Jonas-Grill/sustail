import {useState} from "react";
import Navbar from "../components/Navbar";
import UserProfile from "../components/UserProfile";
import ProducerProfile from "../components/ProducerProfile";

export default function profile() {
    const [user, setUser] = useState({
        type: "Producer"
    })

    return (
        <div className="flex-col">
            <Navbar/>
            {user.type == "User" ? <UserProfile/> : <ProducerProfile/>}
        </div>
    )
}
