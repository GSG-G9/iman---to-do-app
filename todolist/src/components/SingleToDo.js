import React from 'react'

export default class SingleToDo extends React.Component{
    state = {
        isEditting: false,
        updatedToDo: ''
    }
    handelDelete = (id) => {
        this.props.delete(id)
    }
    handelEdit = (task) => {
        this.setState({isEditting: true});
       
    }
    handelEditSubmit = (e) => {
        
        e.preventDefault();
        const updatedToDo = e.target[0].value
        this.setState(
            {isEditting: false,
                updatedToDo
            });
    }

    render(){
        const {updatedToDo} = this.state;
        const {task, id, edit} = this.props;
        console.log(id, task)
        console.log(updatedToDo)
      

        if(!this.state.isEditting){
            return(
                <>
                <li>{task}</li>
                <button onClick={() => this.handelDelete(id)}>delete</button>
                <button onClick={() => this.handelEdit(task)}>edit</button>
                </>
    
            )
        }
        return (
            <form onSubmit={this.handelEditSubmit}>
                <input defaultValue={task}></input>
                <button type="submit">save</button>

            </form>
        )
    }
}


