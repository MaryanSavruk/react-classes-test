import {useEffect, useState} from "react";
import User from "../user/User";

export default function Users () {


    let [users, setuser] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(userFromJson => {
                setuser(userFromJson)
                }

            );
    }, []);


    return (

        <div>
            {
                users.map(value => <User item={value}/>)

            }
        </div>
    );
}