import React from "react";
import { AppBar, Typography } from "@material-ui/core";
import useStyles from "./headerStyle";

const Header = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar className={classes.root} position="static">
        <Typography className={classes.title}>Task App</Typography>
      </AppBar>
    </div>
  );
};
export default Header;
