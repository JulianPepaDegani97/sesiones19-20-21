import React from 'react';
import { useParams } from 'react-router-dom';

const TaskDetailPage = ({task}) => {
    const {id} = useParams();
    console.log(useParams());
  return (
    <div>
        <h1>Task: {id}</h1>
        <p>{task.name}</p>
        <p>{task.description}</p>
    </div>
  )
}

export default TaskDetailPage