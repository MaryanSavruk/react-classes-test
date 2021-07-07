import React, {useEffect, useState} from "react";
import Post from "../post/Post";
import Posts from "../posts/Posts";


export default function User ({item}) {

let [posts, setPosts] = useState([]);


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/' + item.id + '/posts')
            .then(value => value.json())
            .then(value => {
                console.log(value);
                setPosts(value);
            });
    }, []);

    return (
        <div>
            ------------------{item.name}----------------------
            <Posts items={posts}/>
            <hr/>
        </div>
    );
}