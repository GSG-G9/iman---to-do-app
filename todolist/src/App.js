import React from 'react'
import './App.css';
import ToDoList from './components/ToDoList'
 export class App extends React.Component{
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
    console.log(todos)

  return (
    <div className="App">
        <form onSubmit={this.handelSubmit}>
            <input type="text" placeholder="i will .." />
        </form>
      <ToDoList todosArr={todos}/>
    </div>
  );
}}

export default App;
