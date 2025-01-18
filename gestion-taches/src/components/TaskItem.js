import React from 'react';

// TaskItem - Représente une tâche avec ses actions (terminée/supprimée)
function TaskItem({ task, toggleComplete, deleteTask }) {
  return (
    <div className="task-item">
      {/* Checkbox pour marquer comme terminée */}
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
      />
      {/* Texte de la tâche avec style conditionnel */}
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      {/* Bouton pour supprimer la tâche */}
      <button onClick={() => deleteTask(task.id)}>Supprimer</button>
    </div>
  );
}

export default TaskItem;