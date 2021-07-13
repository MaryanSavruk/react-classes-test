import Users from "./components/servises/users/Users";
import {useEffect, useState} from "react";
import {getusers, getUser} from "./components/servises/API";

// https://www.youtube.com/watch?v=0Dq12db3GcY&ab_channel=OktenSchool

export default function App() {

    let [user, setUser] = useState(null);

    let fnEvent = (id) => {
        getUser(id).then(value => setUser(value));
        console.log(user)
    };


    let [users, setUsers] = useState([]);

    useEffect(() => {
        getusers().then(value => setUsers(value.data))
    }, []);

    return (
        <div>
            <Users fnEvent={fnEvent} items={users}/>

            <hr/>
            {
             user && <div>{user.username}</div>

            }
            <hr/>


        </div>
    );
}