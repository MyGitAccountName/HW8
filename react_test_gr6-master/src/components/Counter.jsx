import React, {useState} from 'react';

const Counter = () => {
    let [likes, setLikes] = useState(1);
    let [value, setValue] = useState('sample text');
    
    function increment() {
        setLikes(++likes);
        console.log(likes);
    }
    
    function decrement() {
        setLikes(--likes);
        console.log(likes);
    }
    
    return (
        <div>
            <h1>{likes}</h1>
            <h2>{value}</h2>
            <input
                type="text"
                value={value}
                onChange={ event => { setValue(event.target.value) }}
            />
            <button onClick={ increment }>Increment</button>
            <button onClick={ decrement }>Decrement</button>
        </div>
    );
};
export default Counter;