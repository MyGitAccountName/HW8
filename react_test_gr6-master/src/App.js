import './App.css';
/*import React, {useState} from 'react';*/
//import Counter from "./components/Counter";
//import ClassCounter from "./components/ClassCounter";
import './styles/Post.css';
import './styles/PostList.css';
import './components/Post.jsx';
//import Post from "./components/Post";
import PostList from "./components/PostList";

function App() {
    const posts = [
        {id: 1, title: 'JavaScript', body: 'Язык программирования'},
        {id: 2, title: 'PHP', body: 'Язык программирования'},
        {id: 3, title: 'Assembler', body: 'Низкоуровневый язык программирования'},
        {id: 4, title: 'C++', body: 'Язык программирования'},
        {id: 5, title: 'Java', body: 'Язык программирования'}
    ];

    return (
        /*<div>
            <div className="post">
                <div className="post__content">
                    <strong>1. JavaScript</strong>
                    <p>JavaScript - язык программирования</p>
                </div>

            <div className="post__button">
                <button>Удалить</button>
            </div>
            </div>
{/!*            <Counter/>
            <ClassCounter/>*!/}
        </div>*/
        <>
            <PostList posts={posts}/>
        </>

    );
}


export default App;
