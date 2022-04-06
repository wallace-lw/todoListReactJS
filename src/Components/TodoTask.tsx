import React from 'react';
import { ITask } from '../Interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';

interface Props {
    task: ITask;
    completeTask(taskNameDelete: string): void; 
}

const TodoTask= ({ task, completeTask }: Props) => {
  return (
    <div className='task'> 
        <div className="content">
            <span>{task.taskName}</span>
            <span>{task.deadline}</span>
        </div>
        <button onClick={ ()=> {
            completeTask(task.taskName)
        } }><FontAwesomeIcon icon={faCalendarCheck}/></button>
    </div>

  )
}

export default TodoTask;