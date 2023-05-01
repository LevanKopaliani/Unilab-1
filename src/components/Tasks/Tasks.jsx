import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./Tasks.scss";
import TaskList from "./TaskList";

const Tasks = () => {
  const taskInputRef = useRef();
  const [tasks, setTasks] = useState([
    { id: 1, content: "Homework", complete: false },
    { id: 2, content: "Grocery Shopping", complete: false },
    { id: 3, content: "Homework", complete: false },
    { id: 4, content: "Grocery Shopping", complete: false },
  ]);
  /////////////
  useLayoutEffect(() => {
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
      ///// uniq ID
      const newTaskId = +new Date();
      setTasks([
        { id: newTaskId, content: taskInputRef.current.value, complete: false },
        ...tasks,
      ]);
      taskInputRef.current.value = "";
      // localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  };
  const handleTaskComplete = (id) => {
    setTasks(
      tasks.map((item) =>
        item.id == id ? { ...item, complete: !item.complete } : item
      )
    );
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id != id));
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
