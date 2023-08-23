import React from "react";
import { FaTrashAlt, FaUserEdit } from "react-icons/fa";

const DeleteOption = ({ handleOnDrop }) => {
  return (
    <div
      className="flex items-center justify-center w-16 h-16 border rounded-full shadow-xl bg-white/20 border-white/50"
      onDrop={(e) => handleOnDrop(e, "deleteTask")}
      onDragOver={(e) => e.preventDefault()}
      title="Drop Task here to Delete"
    >
      {
        <FaTrashAlt className="text-2xl transition-all text-slate-200/80 hover:text-red-700 hover:text-3xl" />
      }
    </div>
  );
};

export default DeleteOption;
