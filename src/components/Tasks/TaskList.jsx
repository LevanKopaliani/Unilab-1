import React, { useEffect } from "react";
import "./TaskList.scss";
import TaskListItem from "./TaskListItem";

const TaskList = (props) => {
  const handleSetCompleted = (e) => {
    props.onTaskComplete(e);
  };
  const handleDeleteTask = (e) => {
    props.onTaskDelete(e);
  };

  return (
    <div className="tasklist-container">
      <ul className="tasklist">
        {props.tasklist.map((item, index) => (
          <TaskListItem
            key={item.content + index}
            content={item.content}
            complete={item.complete}
            onSetCompleted={handleSetCompleted}
            onDeleteTask={handleDeleteTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
