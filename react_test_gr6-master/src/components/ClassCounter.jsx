import React from "react";
//import Counter from "./Counter";

class ClassCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          likes: 0,
          value: 'text'
        };
        
        // this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        this.setState({ likes: this.state.likes + 1});
    }
    
    decrement() {
        this.setState({ likes: this.state.likes - 1});
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.likes}</h1>
                <h2>{this.state.value}</h2>
                <input
                    type="text"
                    value={this.state.value}
                    onChange={ event => {
                        this.setState({
                            value: event.target.value,
                        });
                    }}
                />
                <button onClick={ () => this.increment() }>Increment</button>
                <button onClick={ this.decrement }>Decrement</button>
            </div>
        );
    }
}

export default ClassCounter;