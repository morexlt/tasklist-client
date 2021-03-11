import React from 'react';

import { useModal } from './modal';
/**
 * Task component
 *
 *  @param {string} uuid - Uuid from the Task
 *  @param {title} title - Title of the Task
 */

const Task = ({ task, updateTask }) => {
  const { show, hide, RenderModal } = useModal();

  const toggleState = () => {
    updateTask(task.uuid, { done: !task.done });
    hide();
  };

  return (
    <React.Fragment>
      <div
        onClick={show}
        className={`relative border flex p-4  flex-wrap ${
          task.done ? 'bg-green-200' : ''
        }`}
      >
        <div className="font-grey text-xs">{task.uuid}</div>
        {task.done ? (
          <div className="absolute top-4 right-4 r-1 w-5 h-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
          </div>
        ) : null}
        <div className="text-xl">{task.title}</div>
      </div>

      <RenderModal
        title={task.uuid}
        content={task.title}
        confirm={toggleState}
        confirmLabel={task.done ? 'Uncomplete' : 'Complete'}
      />
    </React.Fragment>
  );
};

export default Task;
