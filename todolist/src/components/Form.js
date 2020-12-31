import React from 'react';
export default class Form extends React.Component{
    state = {
        todos: []
    }


    handelSubmit = (e) => {
        e.preventDefault();
        const inputValue = e.target[0].value;
        this.setState((prevState) => {
            return {
                todos: [inputValue, ...prevState.todos]
            }
        });
        e.target.reset();
    }

    render(){
        const {todos} = this.state;
        return (
            <form onSubmit={this.handelSubmit}>
            <input type="text" placeholder="i will .." />
            </form>

        )
       
    }
}