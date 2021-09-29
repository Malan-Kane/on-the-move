import Styling from '../../../styles/user/client/ClientDash.module.css';
import TaskList from '../../../components/tasks/TaskList';

function ClientDash(){

    return (
        <div>
            <div className={Styling.container}>
                <section className={Styling.heading}>
                    <h6>Current tasks</h6>
                </section>
                <TaskList />
            </div>
           
        </div>
    );
}

export default ClientDash;