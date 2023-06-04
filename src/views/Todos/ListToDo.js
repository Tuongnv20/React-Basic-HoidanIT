import React from "react";
import './ListToDo.scss';
import AddToDo from "./AddToDo";
import Color from "../HOC/Color";
// eslint-disable-next-line
import { ToastContainer, toast } from 'react-toastify';


class ListToDo extends React.Component {

    state = {
        ListToDos: [
            { id: 'todo1', title: 'Doing something' },
            { id: 'todo2', title: 'Playing something' },
            { id: 'todo3', title: 'Cooking something' },
        ],
        editTodo: {}
    }

    addNewToDo = (todo) => {
        this.setState({
            ListToDos: [...this.state.ListToDos, todo]
        })

        toast.success('Successfully added')
    }

    handleDeleteToDo = (todo) => {
        let currentToDos = this.state.ListToDos
        currentToDos = currentToDos.filter(item => item.id !== todo.id)
        this.setState({
            ListToDos: currentToDos
        })
        toast.success('Deleted successfully')
    }

    handleEditTodo = (todo) => {
        let { editTodo, ListToDos } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        //Nếu editTodo có 1 object thì vào case save.
        if (isEmptyObj === false && editTodo.id === todo.id) {
            let ListToDosCopy = [...ListToDos]
            let objIndex = ListToDosCopy.findIndex((item) => item.id === todo.id)
            ListToDosCopy[objIndex].title = editTodo.title;
            this.setState({
                ListToDos: ListToDosCopy,
                editTodo: {}
            })
            toast.success('Updated successfully')
            return;
        }
        //Nếu ko có thì vào case Edit.
        this.setState({
            editTodo: todo
        })

    }

    handleOnchangeEditTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo }
        editTodoCopy.title = event.target.value
        this.setState({
            editTodo: editTodoCopy,
        })
    }


    render() {
        let { ListToDos, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0
        console.log(">>>chek empty obj", isEmptyObj)
        return (
            <>
                <p>
                    Simple To Do Apps with ReactJs.
                </p>

                <div className="list-todo-container">
                    <AddToDo
                        addNewTodo={this.addNewToDo} />
                    <div className="list-todo-content">
                        {ListToDos && ListToDos.length > 0 &&
                            ListToDos.map((item, index) => {
                                return (
                                    <div className="todo-child" key={item.id}>
                                        {isEmptyObj === true ?
                                            <span>{index + 1} - {item.title} </span>
                                            :
                                            <>
                                                {editTodo.id === item.id ?
                                                    <span>
                                                        {index + 1} -
                                                        <input value={editTodo.title}
                                                            onChange={(event) => { this.handleOnchangeEditTodo(event) }}
                                                        />
                                                    </span>
                                                    :
                                                    <span>{index + 1} - {item.title} </span>

                                                }
                                            </>

                                        }
                                        <button className="edit"
                                            onClick={() => { this.handleEditTodo(item) }}
                                        >
                                            {isEmptyObj === false && editTodo.id === item.id ?
                                                'Save' : 'Edit'
                                            }
                                        </button>
                                        <button className="delete"
                                            onClick={() => { this.handleDeleteToDo(item) }}
                                        >Delete</button>
                                    </div>
                                )

                            })
                        }





                    </div>

                </div>
            </>
        );
    }

}

export default Color(ListToDo);
