import React from 'react';
import SingleToDo from './components/SingleToDo';

 export class App extends React.Component{
  state = {
      todos: []
  }
  deleteToDo = (id) => {
    this.setState((prevState) => {
      const filteredToDos = prevState.todos.filter((el, i) => i !== id )
      return {
        todos: filteredToDos
      }
    })
  }
  editToDo = (id, newTask) => {
    this.setState((prevState) => {
      const updatedToDos = prevState.todos.map((el, i) => {
        if(id === i){
          return newTask
        }
        return el
      })
      return {
        todos: updatedToDos
      }
    })
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
        <ul>{todos.map((el, i) => <SingleToDo 
        task = {el}
        id={i} key={i} 
        delete={this.deleteToDo} 
        edit={this.editToDo}/>)}</ul>

    </div>
  );
}}

export default App;
