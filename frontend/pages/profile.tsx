import {useState} from "react";
import Navbar from "../components/Navbar";
import UserProfile from "../components/UserProfile";
import ProducerProfile from "../components/ProducerProfile";

const user = {
    type: "Producer"
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function profile() {
    const [open, setOpen] = useState(false)
    return (
        <div className="flex-col">
            <Navbar/>
            {user.type == "User" ? <UserProfile/> : <ProducerProfile/>}
        </div>
    )
}
