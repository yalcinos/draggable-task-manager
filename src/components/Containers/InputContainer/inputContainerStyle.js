import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  inputContainer: {
    marginBottom: "20px",
    marginLeft: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textFieldStyle: {
    width: "300px",
  },
}));

export default useStyles;
