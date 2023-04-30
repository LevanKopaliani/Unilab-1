import React, { useEffect, useRef, useState } from "react";
import "./Tasks.scss";
import TaskList from "./TaskList";

const Tasks = () => {
  const taskInputRef = useRef();
  const [tasks, setTasks] = useState([
    // { content: "apple", complete: false },
    // { content: "banana", complete: false },
    // { content: "cherry", complete: false },
  ]);
  /////////////
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    } else {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, []);
  ///////// add task to localstorage after state updates
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  //////////////
  const handleAddTask = (e) => {
    if (taskInputRef.current.value.length > 0) {
      setTasks([
        { content: taskInputRef.current.value, complete: false },
        ...tasks,
      ]);
      taskInputRef.current.value = "";

      // localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  };
  const handleTaskComplete = (completeditem) => {
    setTasks(
      tasks.map((item) =>
        item.content == completeditem
          ? { content: item.content, complete: !item.complete }
          : item
      )
    );
  };

  const handleDeleteTask = (tobeDeletedTask) => {
    setTasks(tasks.filter((task) => task.content != tobeDeletedTask));
  };

  return (
    <div className="tasks-container">
      <h1 className="title">Add Your Daily Tasks</h1>
      <div className="task-input">
        <input ref={taskInputRef} type="text" placeholder="my task" />
        <button type="button" onClick={handleAddTask}>
          Add
        </button>
      </div>
      <TaskList
        tasklist={tasks}
        onTaskComplete={handleTaskComplete}
        onTaskDelete={handleDeleteTask}
      />
      {tasks.length == 0 ? <p>There no tasks in list</p> : ""}
    </div>
  );
};

export default Tasks;
