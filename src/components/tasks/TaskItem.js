import Styling from '../../styles/tasks/TaskItem.module.css';
import TaskCard from '../ui/TaskCard';

function TaskItem(props){
    return(
        <li className={Styling.item}>
            <TaskCard>
                <div className={Styling.header}>
                    <p>status</p>
                </div>
                <div className={Styling.body}>
                    <h7>Description:</h7>
                    <p>Large cargo</p>
                    <h7>Pick Up Location:</h7>
                    <p>Bloemfontein</p>
                    <h7>Destination:</h7>
                    <p>Welkom</p>
                    <div className={Styling.bContainer}>
                        <button className={Styling.btnConfirm}>Edit</button>
                        <button className={Styling.btnDanger}>Delete</button>
                    </div>
                </div>
                <div className={Styling.footer}>
                    <p>posted: 15 mins ago</p>
                </div>
            </TaskCard>
        </li>
    );
}

export default TaskItem;