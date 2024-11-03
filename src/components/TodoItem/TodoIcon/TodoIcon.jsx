import {ReactComponent as IconCheck} from './icons/iconCheck.svg';
import {ReactComponent as IconDelete} from './icons/iconDelete.svg';
import './TodoIcon.css';

const iconTypes = {
    "check": (color) => <IconCheck className='Icon-svg Icon-check' color={color}/>,
    "delete": (color) => <IconDelete className='Icon-svg Icon-delete' color={color}/>
}

function TodoIcon({type, onClick, color}){
    return(
        <span className={`Icon Icon-container Icon-container-${type}`} 
        onClick={onClick}>
          {iconTypes[type](color)}
        </span>
    );
}

export { TodoIcon };