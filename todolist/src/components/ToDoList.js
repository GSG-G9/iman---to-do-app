import React from 'react';
import SingleToDo from './SingleToDo'
export default class ToDoList extends React.Component{
 
    render(){
        const {todosArr} = this.props;

        return (
            <ul>{todosArr.map((el, i) => <SingleToDo task = {el} key={i}/>)}</ul>
        
        )
       
    }
}
