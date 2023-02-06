import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Task } from '../models/tasks.class';
import '../styles/tasks.scss';
import { LEVELS } from '../models/levels.enum';

const TasksComponent = ({ task, deleteTask, complete}) => {

  useEffect(() => {
    console.log('Tarea creada');
    return () => {
      console.log('La tarea se va a desmontar');
    }
  }, []);

  const taskLevelBadge = () => {
    switch (task.level) {
      case LEVELS.NORMAL:
        return (
          <h6 className='mb-0'>
            <span className='badge bg-primary'>
              {task.level}
            </span>
          </h6>
        )
        case LEVELS.URGENTE:
        return (
          <h6 className='mb-0'>
            <span className='badge bg-warning'>
              {task.level}
            </span>
          </h6>
        )
        case LEVELS.BLOCKING:
        return (
          <h6 className='mb-0'>
            <span className='badge bg-danger'>
              {task.level}
            </span>
          </h6>
        )
        default:
          break;
    }
  }
  const isTaskCompleted = () => {
    return task.completed ? 
    (<i onClick={() => complete(task)} className='bi-toggle-on task-action' style={{color: 'green', fontWeight: 'bold'}}></i>) :
    (<i onClick={() => complete(task)} className='bi-toggle-off task-action' style={{color: 'grey'}}></i>)
  }

  return (
   
        <tr className='fw-normal'>
            <th><span className='ms-2'>{task.name}</span></th>
            <td className='align-middle'>
              <span>
                {task.description}
              </span>
            </td>
            <td className='align-middle'>
                {taskLevelBadge()}
            </td>
            <td className='align-middle'>
              <span>
                  {isTaskCompleted()}
                 {<i className='bi-trash task-action' onClick={() => deleteTask(task.id)} style={{color: 'tomato'}}></i>}
              </span>
            </td>
        </tr>
 
  )
}

TasksComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired, 
}

export default TasksComponent;