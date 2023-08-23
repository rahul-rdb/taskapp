import React from "react";
import { HiArrowCircleRight } from "react-icons/hi";

const AddForm = ({ handleChange, handleSubmit, errMsg, task }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center space-y-2"
    >
      <div className="flex items-center justify-center space-x-4">
        <input
          className="p-3 rounded-md outline-none "
          type="text"
          value={task}
          onChange={handleChange}
          placeholder="Enter Task Here"
        />
        <button
          type="submit"
          className="flex items-center justify-center px-4 py-3 space-x-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
        >
          <span className="font-semibold">Add Task</span>{" "}
          <HiArrowCircleRight className="text-2xl" />
        </button>
      </div>
      {errMsg && (
        <div className="font-semibold text-red-50">
          Please check if this Task already exists or if the field is empty.
        </div>
      )}
    </form>
  );
};

export default AddForm;
