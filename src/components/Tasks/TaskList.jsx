import React, { useEffect } from "react";
import "./TaskList.scss";
import TaskListItem from "./TaskListItem";

const TaskList = (props) => {
  return (
    <div className="tasklist-container">
      <ul className="tasklist">
        {props.tasklist.map((item, index) => (
          <TaskListItem
            id={item.id}
            key={item.id}
            content={item.content}
            complete={item.complete}
            onTaskComplete={props.onTaskComplete}
            onTaskDelete={props.onTaskDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
