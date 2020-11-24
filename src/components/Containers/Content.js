import React, { useEffect, useState } from "react";
import useStyles from "./contentStyle";
import { Grid } from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import InputContainer from "./InputContainer/InputContainer";
import TaskList from "./TasksContainer/TaskList";
import { Toast, showToastErrorMessage } from "../../utils/Toast";
import {
  saveTaskToLocalStorage,
  getTaskFromLocalStorage,
} from "../../utils/localStorage";

const Content = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [hasError, setHasError] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    //Get tasks from local Storage and update state.
    const tasks = getTaskFromLocalStorage();
    //I set isEdited:false; because once the user refresh the page, editing must be off.
    if (tasks) {
      setTodos(
        tasks.map((task) => {
          return {
            ...task,
            isEdited: false,
          };
        })
      );
    }
  }, []);

  useEffect(() => {
    //When todos State change add data to localStorage
    saveTaskToLocalStorage(todos);
  }, [todos]);

  const handleInputTextChange = (event) => {
    setInputText(event.target.value);
  };

  const showErrorMessage = (message) => {
    setHasError(true);
    showToastErrorMessage(message);
  };

  //Check if the task already exists in the list.
  const isTaskExist = (inputFieldValue) => {
    const isExist = todos.find((task) => task.taskName === inputFieldValue);
    return isExist ? true : false;
  };

  const addTask = () => {
    //If Input field is empty, show Error message
    if (inputText === "") {
      showErrorMessage("⚠️ Input field cannot be empty!");
      return;
    }
    if (isTaskExist(inputText)) {
      showErrorMessage("⚠️ The task is already exist");
      return;
    }
    setTodos((prevState) => {
      return [
        ...prevState,
        { taskName: inputText, isEdited: false, id: uuidv4() },
      ];
    });
    //Clear Input field after adding is done.
    setInputText("");
  };

  const updateTask = (index, editTextValue) => {
    if (editTextValue === "") {
      showErrorMessage("⚠️ Input field cannot be empty!");
      return;
    }
    if (isTaskExist(editTextValue)) {
      showErrorMessage("⚠️ The task is already exist");
      return;
    }
    setTodos(
      todos.map((task) => {
        if (task.id === index) {
          return {
            ...task,
            taskName: editTextValue,
            isEdited: false,
          };
        }
        return task;
      })
    );
  };

  //Delete tasks by id
  const deleteTask = (taskId) => {
    setTodos(todos.filter((item) => taskId !== item.id));
  };

  //Change the status of edit
  const toogleEditButton = (index) => {
    setTodos(
      todos.map((task) => {
        if (task.id === index) {
          return {
            ...task,
            isEdited: !task.isEdited,
          };
        }
        return task;
      })
    );
  };

  // A function to help re-ordering tasks
  const reOrder = (tasks, startIndex, endIndex) => {
    const [removed] = tasks.splice(startIndex, 1);
    tasks.splice(endIndex, 0, removed);
    return tasks;
  };

  // When the drag animation is ended, updating localStorage and the state
  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }
    const reOrderedTasks = reOrder(
      todos,
      result.source.index,
      result.destination.index
    );
    setTodos(reOrderedTasks);
    saveTaskToLocalStorage(todos);
  };

  return (
    <div className={classes.root}>
      {hasError ? <Toast /> : null}
      <InputContainer
        onChangeText={handleInputTextChange}
        onSubmitTask={addTask}
        inputValue={inputText}
        inputFieldType={"Add Task"}
      />
      {/* render DrapDrop component when there are task in the localStorage. */}
      {todos.length !== 0 ? (
        <Grid item xs={12}>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  <TaskList
                    tasksList={todos}
                    onClickDelete={deleteTask}
                    onClickUpdateTask={updateTask}
                    onToogleEdit={toogleEditButton}
                  />
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </Grid>
      ) : null}
    </div>
  );
};
export default Content;
