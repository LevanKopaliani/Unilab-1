import React, { useState } from "react";
import "./TaskListItem.scss";
import DoneImg from "../../assets/img/done.svg";
import DeleteImg from "../../assets/img/delete.svg";

const TaskListItem = (props) => {
  ///////// update completed
  const handleSetCompleted = (e) => {
    props.onSetCompleted(props.content);
  };

  const handleDeleteTask = (e) => {
    props.onDeleteTask(props.content);
  };

  return (
    <li
      className={props.complete ? "tasklistitem taskcompleted" : "tasklistitem"}
    >
      <p>{props.content}</p>
      <button className="complete" onClick={handleSetCompleted}>
        <img src={DoneImg} alt="complete" />
      </button>
      <button className="delete" onClick={handleDeleteTask}>
        <img src={DeleteImg} alt="delete" />
      </button>
    </li>
  );
};

export default TaskListItem;
