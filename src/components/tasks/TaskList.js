import TaskItem from './TaskItem';
import Styling from '../../styles/tasks/TaskList.module.css';

function TaskList(props){
    return (
        <ul className={Styling.list}>
            <TaskItem />
            <TaskItem />
            <TaskItem />
        </ul>
    );
}

export default TaskList;