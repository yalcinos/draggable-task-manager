import React from "react";
import { TextField, IconButton } from "@material-ui/core";
import { MdAddBox } from "react-icons/md";
import useStyles from "./inputContainerStyle";

const InputContainer = ({
  onChangeText,
  onSubmitTask,
  inputValue,
  inputFieldType,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.inputContainer}>
      <TextField
        id="standard-basic"
        className={classes.textFieldStyle}
        label={inputFieldType}
        variant="outlined"
        value={inputValue}
        onChange={(event) => onChangeText(event)}
      />
      <IconButton
        color="primary"
        aria-label="add Task"
        onClick={() => onSubmitTask()}
      >
        <MdAddBox />
      </IconButton>
    </div>
  );
};
export default InputContainer;
