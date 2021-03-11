import React from 'react';


function Dialog({task}) {

  return (
    <div className="flex items-center justify-center fixed left-0 bottom-0 w-full h-full bg-gray-800 bg-opacity-10">
      <div className="bg-white rounded-lg w-1/2">
        <div className="flex flex-col items-start p-4">
          <div className="flex items-center w-full">
            <div className="text-gray-900 font-medium text-lg">{task.uuid}</div>
          </div>
          {task.title}
          <div className="ml-auto">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold mx-2 py-2 px-4 rounded">
              Complete
            </button>
            <button className="bg-transparent hover:bg-gray-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
 );
}

export default Dialog;