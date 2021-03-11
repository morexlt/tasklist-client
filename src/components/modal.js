import React, { useState } from 'react';
/**
 * Hook modal
 * @param {string} title - Title of the Modal
 * @param {string} content - Content of the Modal
 * @param {function} confirm - Action to be executed on confirm
 * @param {string} confirmLabel - Label of the confirm button
 *
 */
export const useModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  const show = () => {
    setIsVisible(true);
  };
  const hide = () => {
    setIsVisible(false);
  };

  const RenderModal = ({ title, content, confirm, confirmLabel }) => {
    if (!isVisible) return null;
    return (
      <div className="flex items-center justify-center fixed left-0 bottom-0 w-full h-full bg-gray-800 bg-opacity-10 z-40">
        <div className="bg-white rounded-lg w-3/4 max-w-xl">
          <div className="flex flex-col items-start p-4">
            <div className="flex items-center w-full">
              <div className="text-gray-900 font-medium text-md">{title}</div>
            </div>
            <div className="py-4">{content}</div>
            <div className="ml-auto w-full sm:w-auto md:w-auto lg:w-auto">
              <button
                onClick={confirm}
                className="w-full sm:w-auto md:w-auto lg:w-auto bg-blue-500 hover:bg-blue-700 text-white font-bold mr-2 mb-2 py-2 px-4 rounded"
              >
                {confirmLabel}
              </button>
              <button
                onClick={hide}
                className="w-full sm:w-auto md:w-auto lg:w-auto bg-transparent hover:bg-gray-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return {
    show,
    hide,
    RenderModal,
  };
};
