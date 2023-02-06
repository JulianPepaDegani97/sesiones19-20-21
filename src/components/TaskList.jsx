import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Task } from '../models/tasks.class'
import { LEVELS } from '../models/levels.enum';
import TasksComponent from '../pure/TasksComponent';
import TaskForm from '../pure/form/TaskForm';



const TaskList = props => {

  const defaultTask = new Task(1, 'Example', 'Default description', false, LEVELS.NORMAL);
  const defaultTask2 = new Task(2, 'Example2', 'Default description', true, LEVELS.URGENTE);
  const defaultTask3 = new Task(3, 'Example3', 'Default description', false, LEVELS.BLOCKING);

  const [tasks, setTasks] = useState([defaultTask, defaultTask2, defaultTask3]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    
    return () => {

    }
  }, [tasks])

  const completeTask = (task) => {
    console.log(task);
    const index = tasks.indexOf(task);
    const tempTask = [...tasks];
    tempTask[index].completed = !tempTask[index].completed;
    setTasks(tempTask);
  }

  const deleteTask = (id) => {
    const filteredTasks = tasks.filter(task => task.id !== id);
    setTasks(filteredTasks);
  }

  const addTask = (task) => {
    const tempTask = [...tasks];
    tempTask.push(task);
    setTasks(tempTask);
  }

  const TaskTable = () => {
    return (
      <table>
              <thead>
                <tr>
                  <th scope='col'>Title</th>
                  <th scope='col'>Description</th>
                  <th scope='col'>Level</th>
                  <th scope='col'>Actions</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task, index) => (
                  <TasksComponent key={index} task={task} complete={completeTask} deleteTask={deleteTask}
                    />
                ))}

              </tbody>
            </table>
    )
  }
  let tTable = <TaskTable />
  return (
    <div>
      <div className='col-12'>
        <div className='card'>
          <div className='card-header p-3'>
            <h5>
              Your task:
            </h5>
          </div>
          <div className='card-body' data-mdb-perfect-scrollbar='true' style={{ position: 'relative', height: '400px' }}>
            {loading ? (<p>Loading...</p>) : tTable }
          </div>
        </div>

      </div>
      <div>
             <TaskForm add={addTask} />
      </div>

    </div>
  )
}

TaskList.propTypes = {}

export default TaskList
