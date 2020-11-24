import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    height: "10vh",
    backgroundColor: "#f4f7fa",
  },
  title: {
    padding: "15px",
    margin: "auto",
    color: "black",
    textAlign: "center",
    fontSize: "1.5em",
  },
  logo: {
    height: "10vh",
    position: "absolute",
  },
}));

export default useStyles;
