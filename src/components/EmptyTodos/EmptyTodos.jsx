import React from 'react';
import './EmptyTodos.css';

function EmptyTodos(){
    return(
        <p className='emptyMessage'>
            No hay todos, crea uno c:
        </p>
    );
}  

export { EmptyTodos };