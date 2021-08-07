import './App.css';
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";


const NestedChild = () => {
    const counter = useSelector(({counter: {value}}) => value);
    const posts = useSelector(({posts}) => posts);
    const dispatch = useDispatch();

    const fetchPost = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const json = await response.json();


        dispatch({
            type: 'ADD_POSTS',
            payload: json
        });
    }

    useEffect(() => {
        fetchPost();
    }, []);

    // console.log('posts', posts)

    return (
        <header className="App-header">
            <h1>{counter}</h1>

            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title} ==== {post.body}</li>
                ))}
            </ul>

        </header>
    )
}


function App() {
    const dispatch = useDispatch();
    return (

        <div>
            <div className="button">
                <button onClick={() => {
                    dispatch({type: 'INC'})
                }}> inc
                </button>

                <button onClick={() => {
                    dispatch({type: 'DEC'})
                }}> dec
                </button>

                <button onClick={() => {
                    dispatch({type: 'RESET'})
                }}> reset
                </button>

            </div>


            <NestedChild/>

        </div>
    );
}

export default App;
