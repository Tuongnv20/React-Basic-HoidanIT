import React from "react";
// eslint-disable-next-line
import { ToastContainer, toast } from 'react-toastify';


class AddToDo extends React.Component {
    state = {
        title: ''
    }
    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleAddJob = () => {
        if (!this.state.title) {
            toast.error("Please enter a title");
            return;
        }
        let todo = {
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
        }
        this.props.addNewTodo(todo);
        this.setState({
            title: ''
        })
    }

    render() {
        let { title } = this.state;


        return (
            <div className="add-todo">
                <input type="text" value={title}
                    onChange={(event) => this.handleOnChangeTitle(event)}
                />
                <button type="button" className="add"
                    onClick={() => this.handleAddJob()}
                >Add</button>
            </div>
        )
    }

}

export default AddToDo;