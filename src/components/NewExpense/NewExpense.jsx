import {
    ThemeProvider,
    makeStyles,
    createMuiTheme,
} from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import { green } from '@material-ui/core/colors';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const theme = createMuiTheme({
    palette: {
      primary: green,
    },
});

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "2ch",
    },
  },
  textFieldInput: {
    backgroundColor: "#fafafa",
    margin: theme.spacing(1),
    maxWidth: "100%",
    width: "20rem",
  },
  paper: {
    backgroundColor: "#e0e0e0",
    borderRadius: "12px",
    maxWidth: "95%",
    width: "50rem",
    padding: "1rem",
    margin: "2rem auto",
    textAlign: "cneter",
    display: 'flex',
    maxHeight: '90%',
  },
  button: {
    padding: '12px',
    justifyContent: "center",
  },
  typography: {
    borderRadius: "12px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    maxWidth: "95%",
    width: "50rem",
  },
}));

export default function NewExpense() {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.paper}>
      <form className={classes.root} noValidate autoComplete="off">
        <ThemeProvider theme={theme}>
          <TextField
            label="Title"
            variant="outlined"
            id="mui-title-outlined-input"
            className={classes.textFieldInput}
            type="text"
          />
        </ThemeProvider>
        <ThemeProvider theme={theme}>
          <TextField
            label="Amount"
            variant="outlined"
            id="mui-amount-outlined-input"
            className={classes.textFieldInput}
            type="number"
          />
        </ThemeProvider>
        <ThemeProvider theme={theme}>
          <TextField
            variant="outlined"
            id="mui-date-outlined-input"
            className={classes.textFieldInput}
            type="date"
          />
        </ThemeProvider>
        <Typography component="div" className={classes.typography}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Add Expense
          </Button>
        </Typography>
      </form>
    </Paper>
  );
}
