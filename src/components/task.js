import React from "react";

import Modal from './modal';
/**
 * Task 
 *
 *  @param {string} uuid - Uuid from the Task
 *  @param {title} title - Title of the Task
 */

const Task = ({task}) => {
  return (
    <div className="border flex p-4  flex-wrap">
      <div className="font-grey text-xs" >
        {task.uuid}
      </div>
      <div className="text-xl">
        {task.title}
      </div>
      <Modal task={task} />
    </div>
  );
}

export default Task;
