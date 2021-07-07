import './App.css';
import React from "react";
import Menu from "./components/menu/Menu";
import Users from "./components/users/Users";



function App() {
    return (

        <div>
            <Menu pages={['user page', 'comments page', 'posts page']}/>
            <Users key={'syle'}/>
            <Menu pages={['about', 'team', 'contact us']}/>

        </div>
    );
}


export default App;
