import React, { useState } from "react";
import { Grid, Paper, Typography, TextField } from "@material-ui/core";
import ButtonGroup from "./ButtonGroup";
import useStyles from "./taskListItemStyle";

const TaskListItem = (props) => {
  const classes = useStyles();
  const [editTextField, setEditTextField] = useState(props.taskName);

  const handleEditInputChange = (event) => {
    setEditTextField(event.target.value);
  };

  return (
    <Grid item xs={12}>
      <Paper className={classes.paper}>
        {!props.editStatus ? (
          <Typography className={classes.textStyle}>
            {props.taskName}
          </Typography>
        ) : (
          <TextField
            style={{ width: "300px" }}
            id="standard-basic"
            label="Edit Task"
            variant="outlined"
            value={editTextField}
            onChange={(event) => handleEditInputChange(event)}
          />
        )}
        {/* I used spread operator to pass functions and data from parent components to ButtonGroup.js */}
        <ButtonGroup {...props} editTextField={editTextField} />
      </Paper>
    </Grid>
  );
};

export default TaskListItem;
