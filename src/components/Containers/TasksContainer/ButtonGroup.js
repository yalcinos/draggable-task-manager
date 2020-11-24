import React from "react";
import { IconButton } from "@material-ui/core";
import { MdDelete, MdEdit, MdClose, MdAddBox } from "react-icons/md";

const ButtonGroup = ({
  editStatus,
  onToogleEdit,
  onClickDelete,
  onClickUpdateTask,
  taskId,
  editTextField,
}) => {
  return (
    <div style={{ display: "flex" }}>
      {!editStatus ? (
        <IconButton
          style={{ color: "#f44336" }}
          aria-label="Delete Task"
          onClick={() => onClickDelete(taskId)}
        >
          <MdDelete />
        </IconButton>
      ) : (
        <IconButton
          color="primary"
          aria-label="Add Button"
          onClick={() => onClickUpdateTask(taskId, editTextField)}
        >
          <MdAddBox />
        </IconButton>
      )}
      <IconButton
        color="primary"
        aria-label="Edit Button"
        onClick={() => onToogleEdit(taskId)}
      >
        {!editStatus ? <MdEdit /> : <MdClose />}
      </IconButton>
    </div>
  );
};
export default ButtonGroup;
