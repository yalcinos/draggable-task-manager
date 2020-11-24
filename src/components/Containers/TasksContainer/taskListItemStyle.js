import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    marginTop: 20,
    width: "320px",
    // height: "10vh",
    color: theme.palette.text.secondary,
    display: "flex",
    borderLeft: "5px solid #4051b5",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f4f7fa",
  },
  textStyle: {
    width: "100vw",
    color: "black",
    wordBreak: "break-word",
  },
}));
export default useStyles;
