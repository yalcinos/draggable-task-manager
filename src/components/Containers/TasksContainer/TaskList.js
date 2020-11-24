import React from "react";
import TaskListItem from "./TaskListItem";
import { Draggable } from "react-beautiful-dnd";

const TaskList = (props) => {
  // basic styles to for drag&drop
  const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: "none",
    padding: 3,
    margin: `0 0 1px 0`,
    // styles we need to apply on draggables
    ...draggableStyle,
  });

  return (
    <div>
      {props.tasksList.map((task, index) => {
        return (
          <Draggable key={task.id} draggableId={task.id} index={index}>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                style={getItemStyle(
                  snapshot.isDragging,
                  provided.draggableProps.style
                )}
              >
                <TaskListItem
                  key={index}
                  taskId={task.id}
                  taskName={task.taskName}
                  editStatus={task.isEdited}
                  // I used spread operator to pass (onClickDelete,onClickUpdateTask,onToogleEdit) from Content.js to bottom component(ButtonGroup.js) instead of typing one by one.
                  {...props}
                />
              </div>
            )}
          </Draggable>
        );
      })}
    </div>
  );
};
export default TaskList;
