import {useEffect, useState} from "react";
import './UserStyles.css';

export default function Users() {

    let [users, setUser] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json()
                .then(userFromServer => {
                    setUser(userFromServer);
                }));

    }, []);

    return (
        <div>
            {
                users.map(user => <div>{user.id} - {user.name}</div>)
            }
        </div>
    );
}