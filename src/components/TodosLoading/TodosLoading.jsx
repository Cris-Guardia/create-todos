import React from 'react';
import './TodosLoading.css';

function TodosLoading(){
    return(
        <>
            <p>Cargando</p>
            <p className='p1'>.</p>
            <p  className='p2'>.</p>
            <p  className='p3'>.</p>
        </>
    );
}  

export { TodosLoading };