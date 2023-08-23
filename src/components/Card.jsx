import React from "react";

const Card = ({ list, listName, handleOnDrop, title, icon }) => {
  const handleOnDragStart = (e, task) => {
    e.dataTransfer.setData("task", task);
  };

  return (
    <div
      onDrop={(e) => handleOnDrop(e, listName)}
      onDragOver={(e) => e.preventDefault()}
      className="flex flex-col items-center justify-start w-4/12 h-[25rem]   px-5 py-4  border shadow-md bg-white/40 rounded-xl "
    >
      <div className="flex items-center justify-start w-full mb-2 text-lg font-bold text-sky-900">
        {title}
      </div>
      <div className="w-full space-y-2 overflow-y-auto scrollbar">
        {list.map((asgTask) => (
          <div
            key={asgTask}
            draggable
            className={`flex items-center justify-between w-full px-3 py-4 text-base font-semibold bg-white border rounded-md h-max shadow-lg`}
            onDragStart={(e) => handleOnDragStart(e, asgTask)}
          >
            <span>{asgTask}</span>
            <span className="px-0.5">{icon}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
