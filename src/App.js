import './App.css';
import React from "react";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";

//https://www.youtube.com/watch?v=YiIfiVWmgmk&ab_channel=OktenSchool
function App() {
    return (
        <Router>
            <div>
                <div><Link to="/">home page</Link></div>
                <div><Link to="/users">users page</Link></div>
                <div><Link to="/posts">post page</Link></div>
                <div><Link to="/comments">comments page</Link></div>


                {/*               exact - use for shortest links*/}
                <Route path={'/'} exact render={() => {
                    return <div>home</div>
                }}/>

                <Route path={'/users'} render={(props) => {
                    console.log(props);
                    return <Users {...props}/>;
                }}/>

                <Route path={'/posts'} component={Posts}/>
         {/*     Switch - use for the same path, its filtering only first path*/}
                <Switch>
                    <Route path={'/comments'}>
                        <Comments/>
                    </Route>
                    <Route path={'/comments'}>
                        <Comments/>
                    </Route>
                </Switch>


            </div>
        </Router>
    );
}

export default App;
