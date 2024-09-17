import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { removeTask, toggleComp } from '../features/mode';
import deleteIcon from '../assets/delete.svg'


const TaskBox = ({ task }) => {

  const dispatch = useDispatch();

  const toggleComplete = (id) => {
    dispatch(toggleComp(id));
  };

  const handleDelete = (id) => {
    dispatch(removeTask(id));

  };
  

  return (
    <>

    <div className={`flex sm:w-96  lg:w-2/4 shadow-md font-roboto font-semibold justify-between mx-auto ${task.completed? 'bg-green-300' : 'bg-white'} border  dark:bg-Header dark:border-gray-600 m-6 overflow-hidden rounded-lg`}>
      <label className="flex items-center ml-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
          className="hidden peer cursor-pointer"
        />
      <span className="w-6 h-6 rounded-full border-2 border-black dark:border-white flex items-center justify-center cursor-pointer transition duration-300 relative peer-checked:bg-green-600 peer-checked:after:block after:hidden after:content-['✓'] after:text-white after:text-xs after:absolute after:inset-0  after:items-center after:justify-center"></span>
     </label>
      <h1 className={`text-black font-roboto font-semibold dark:text-white p-5 ${task.completed ? 'line-through' : ''}`}>
       {task.taskName} 
      </h1>
      <img
        src={deleteIcon}
        onClick={() => handleDelete(task.id)}
        className="w-6 h-6 m-4 cursor-pointer transform hover:scale-110 transition-transform duration-300"
        alt="delete"
      />
    </div>
    </>
  );
};

export default TaskBox;