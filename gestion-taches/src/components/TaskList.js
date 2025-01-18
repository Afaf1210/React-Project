import React, { useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import TaskItem from './TaskItem';
import './TaskList.css';

function TaskList({ tasks, toggleComplete, deleteTask }) {
  const nodeRef = useRef(null);

  return (
    <TransitionGroup>
      {tasks.map((task) => (
        <CSSTransition
          key={task.id}
          nodeRef={nodeRef}
          timeout={300}
          classNames="task"
        >
          <TaskItem
            ref={nodeRef}
            task={task}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}

export default TaskList;