import { Task } from "./Task";
import React, { useEffect, useState } from "react";

export const MainContainer = () => {
  function renderTodos() {
    return todo.map(({ taskText, id }) => (
      <Task
        key={id}
        id={id}
        taskText={taskText}
        handleDeleteClick={() => deleteTask(id)}
        handleChangeTaskName={changeTaskName}
      />
    ));
  }
  const getLocalStorageTasks = () => {
    let toDoList = localStorage.getItem("toDoList");
    if (toDoList) {
      return JSON.parse(localStorage.getItem("toDoList"));
    } else {
      return [];
    }
  };
  const [todo, setTodo] = useState(getLocalStorageTasks);

  const deleteTask = (id) => {
    return setTodo(todo.filter((todo) => todo.id !== id));
  };

  const changeTaskName = (newTaskText, id) => {
    setTodo(
      todo.map((todo) => {
        if (todo.id === id) {
          return { ...todo, taskText: newTaskText };
        }
        return todo;
      })
    );
  };

  const [userTask, setUserTask] = useState("");

  const addUserTask = () => {
    if (userTask.trim() !== "") {
      const uniqeId = Date.now();
      const newTask = { taskText: userTask, id: uniqeId };
      setTodo([...todo, newTask]);
      setUserTask("");
    }
  };

  useEffect(() => {
    localStorage.setItem("toDoList", JSON.stringify(todo));
  }, [todo]);
  return (
    <>
      <div className="containerForm">
        <input
          type="text"
          id="containerFormInput"
          name="task"
          value={userTask}
          onChange={(e) => setUserTask(e.target.value)}
          minLength="3"
          lang="ru"
          required
        />
        <input
          type="submit"
          id="containerFormButton"
          value="Add"
          onClick={addUserTask}
        />
      </div>
      <div className="containerList">{renderTodos()}</div>
    </>
  );
};
