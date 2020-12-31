import React from 'react';
import SingleToDo from './SingleToDo'
export default class ToDoList extends React.Component{
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
            <div className="App">
            <form onSubmit={this.handelSubmit}>
                <input type="text" placeholder="i will .." />
            </form>
        </div>
      );
            

       
    }
}
{/* <ul>{todosArr.map((el, i) => <SingleToDo task = {el} key={i}/>)}</ul> */}

