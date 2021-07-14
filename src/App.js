

// https://www.youtube.com/watch?v=0Dq12db3GcY&ab_channel=OktenSchool

import {useEffect, useState} from "react";
import {getUsers, getUser} from "./components/servises/API";
import Users from "./components/servises/users/Users";

export default function App() {
let [user, setUser] = useState(null);

    let clickFun = (id) => {
        // console.log('Hello')
        getUser(id).then(value => setUser(value.data));
        console.log(user)
    }

    let [users, setUsers] = useState([]);
useEffect(() => {
    getUsers.then(value => setUsers(value.data));


    }, []);
    // console.log(users);

    return (
        <div>
            <Users clickFun={clickFun} items={users}/>

            <hr/>

            {JSON.stringify(user)}
            <hr/>

        </div>
    );
}