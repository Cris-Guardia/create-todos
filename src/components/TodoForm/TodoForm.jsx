import React from "react"
import { TodoContext } from "../TodoContext/TodoContext";
import "./TodoForm.css";

function TodoForm(){

    const [newTodoValue, setNewTodoValue] = 
    React.useState('');

    const {
        setOpenModal,
        addTodo
    } = React.useContext(TodoContext);

    const onSubmit = (event)=>{
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }
    
    const onCancel = (event)=>{
        event.preventDefault();
        setOpenModal(false);
    }
    
    const onChange = (event)=>{
        setNewTodoValue(event.target.value);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>
                Ingresa el nuevo Todo
            </label>
            <textarea 
                placeholder="escriba el todo aqui"
                value={newTodoValue}
                onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
                <button
                    className="
                    TodoForm-button 
                    TodoForm-button-cancel"
                    onClick={
                        onCancel
                    }
                    >Cancelar</button>
                <button
                    className="
                    TodoForm-button
                    TodoForm-button-create"
                >Crear
                </button>
            </div>
        </form>
    );
}

export { TodoForm }