import React, { useRef, useState } from "react";
import "./TaskListItem.scss";
import DoneImg from "../../assets/img/done.svg";
import DeleteImg from "../../assets/img/delete.svg";

const TaskListItem = (props) => {
  return (
    <li
      className={props.complete ? "tasklistitem taskcompleted" : "tasklistitem"}
    >
      <p>{props.content}</p>
      <button
        className="complete"
        onClick={() => props.onTaskComplete(props.id)}
      >
        <img src={DoneImg} alt="complete" />
      </button>

      <button className="delete" onClick={() => props.onTaskDelete(props.id)}>
        <img src={DeleteImg} alt="delete" />
      </button>
    </li>
  );
};

export default TaskListItem;
