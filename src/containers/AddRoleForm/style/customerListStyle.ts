import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  listHeader: {
    padding: theme.spacing(0, 0, 6, 0),
  },
  btn: {
    //backgroundColor: "#6A2CD8",
    "&:hover": {
      background: "#a15dff",
    },
    textTransform: "none",
    marginTop: 40,
    borderRadius: 32,
    position: "relative",
    right: theme.spacing(-5),
    padding: theme.spacing(1, 3),
  },
  customerList: {
    height: 400,
    width: 950,
    textAlign: "center",
    marginLeft: 220,
    marginTop: 50,
  },
}));
export { useStyles };
