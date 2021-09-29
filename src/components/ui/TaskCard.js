import Styling from '../../styles/ui/TaskCard.module.css';

function TaskCard(props){

    return (
        <div className={Styling.card}>
            {props.children}
        </div>
    );
}

export default TaskCard;