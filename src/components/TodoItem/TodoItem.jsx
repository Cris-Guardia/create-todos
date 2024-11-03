import './TodoItem.css'
import { CompleteIcon } from './TodoIcon/CompleteIcon';
import { DeleteIcon } from './TodoIcon/DeleteIcon';

function TodoItem(props){
  
    return (
      <li className={`Todo-Item ${props.completed && "Item-completed"}`}>
        <CompleteIcon 
        completed={ props.completed }
        onCompleted={ props.onCompleted }/>

        <span className={`TodoItem-p ${props.completed && "TodoItem-p--completed"}`}>
          {props.text}
        </span>

        <DeleteIcon onDelete={ props.onDelete }/>
      </li>
    );
}

export {TodoItem};