import React from 'react'

export default class SingleToDo extends React.Component{
    handelDelete = (id) => {
        this.props.delete(id)
    }
    render(){
        const {task, id} = this.props;
        console.log(id, task)
        return (
            <>
            <li>{task}</li> 
            <button onClick={() => this.handelDelete(id)}>delete</button>
            </>

        )
    }
}


