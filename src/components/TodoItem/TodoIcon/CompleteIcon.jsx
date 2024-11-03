import React from "react";
import { TodoIcon } from "./TodoIcon";

function CompleteIcon({completed, onCompleted}){
    return (
        <TodoIcon type="check" 
        color={completed ? '#00ff00' : 'gray'}
        onClick={onCompleted}
        />
    );
}

export { CompleteIcon };