import UserProfile from "../components/UserProfile";
import ProducerProfile from "../components/ProducerProfile";
import {User} from "../types/User";

export default function Profile({user}: {user: User}) {
    if (user) {
        if (user.type === "PRODUCER") {
            return <ProducerProfile user={user}/>
        } else {
            return <UserProfile user={user}/>
        }
    } else {
        return <h2>Log in to view your profile</h2>
    }
}