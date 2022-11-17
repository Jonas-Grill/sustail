import {useState} from "react";
import Navbar from "../components/Navbar";
import UserProfile from "../components/UserProfile";
import ProducerProfile from "../components/ProducerProfile";

export default function Profile() {
    const [user, setUser] = useState({
        type: "User"
    })

    return (
        <div className="flex-col">
            {user.type == "User" ? <UserProfile/> : <ProducerProfile/>}
        </div>
    )
}
