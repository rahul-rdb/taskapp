import React, { useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";
import { MdOutlineWork } from "react-icons/md";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Card from "./Card";
import AddForm from "./AddForm";
import DeleteOption from "./DeleteOption";

const Main = () => {
  const [task, setTask] = useState("");
  const [assignedList, setAssignedList] = useState([]);
  const [pendingList, setPendingList] = useState([]);
  const [completedList, setCompletedList] = useState([]);
  const [errMsg, setErrMsg] = useState(false);

  //Task added Notification Config (Toastify)
  const success = () =>
    toast.success("New Task Added!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  //Task Deleted Notification Config (Toastify)
  const deleteSuccess = () =>
    toast.error("Task Deleted!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  //Adding New Task function
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) {
      setErrMsg(true);
      return;
    }
    if (
      assignedList.includes(task) ||
      pendingList.includes(task) ||
      completedList.includes(task)
    ) {
      setErrMsg(true);
      return;
    }
    setAssignedList([...assignedList, task]);
    success();
    setTask("");
    setErrMsg(false);
  };

  //Input field onchange
  const handleChange = (e) => {
    setTask(e.target.value);
    setErrMsg(false);
  };

  // DRAG N DROP FUNCTOINALITY

  const handleOnDrop = (e, targetList) => {
    const droppedTask = e.dataTransfer.getData("task");
    if (targetList === "deleteTask") {
      setAssignedList(assignedList.filter((task) => task !== droppedTask));
      setPendingList(pendingList.filter((task) => task !== droppedTask));
      setCompletedList(completedList.filter((task) => task !== droppedTask));
      deleteSuccess();
    } else {
      if (
        (targetList === "assignedList" &&
          !assignedList.includes(droppedTask)) ||
        (targetList === "pendingList" && !pendingList.includes(droppedTask)) ||
        (targetList === "completedList" && !completedList.includes(droppedTask))
      ) {
        setAssignedList(assignedList.filter((task) => task !== droppedTask));
        setPendingList(pendingList.filter((task) => task !== droppedTask));
        setCompletedList(completedList.filter((task) => task !== droppedTask));

        if (targetList === "assignedList") {
          setAssignedList([...assignedList, droppedTask]);
        } else if (targetList === "pendingList") {
          setPendingList([...pendingList, droppedTask]);
        } else if (targetList === "completedList") {
          setCompletedList([...completedList, droppedTask]);
        }
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-start w-full space-y-4">
      <AddForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        errMsg={errMsg}
        task={task}
      />
      <div className="flex items-start justify-center w-full space-x-4">
        <Card
          listName={"assignedList"}
          list={assignedList}
          handleOnDrop={handleOnDrop}
          title={"To-Do"}
          icon={<MdOutlineWork className="text-3xl text-blue-600" />}
        />
        <Card
          listName={"pendingList"}
          list={pendingList}
          handleOnDrop={handleOnDrop}
          title={"Doing"}
          icon={<FaUserEdit className="text-3xl text-yellow-400" />}
        />
        <Card
          listName={"completedList"}
          list={completedList}
          handleOnDrop={handleOnDrop}
          title={"Done"}
          icon={<BsCheckCircleFill className="text-3xl text-green-600" />}
        />
      </div>
      <DeleteOption handleOnDrop={handleOnDrop} />
    </div>
  );
};

export default Main;
