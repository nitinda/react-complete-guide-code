import { makeStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    box_item__description: {
      fontSize: "1rem",
      flexDirection: "column",
      gap: "1rem",
      alignItems: "flex-end",
      flexFlow: "column-reverse",
      justifyContent: "flex-start",
      marginRight: "10px",
      marginLeft: "12px",
    },
    paper: {
      display: 'flex',
      flexWrap: 'wrap',
      margin: theme.spacing(1),
      width: theme.spacing(12),
      height: theme.spacing(10),
      backgroundColor: '#607d8b',
      justifyContent: 'center',
      alignContent: 'center',
      flexDirection: 'column',
      borderRadius: '8px'
    },
    expense_date__day: {
      fontSize: '1.5rem',
      fontWeight: 'bold'
    },
    expense_date__month: {
      fontSize: '0.75rem',
      fontWeight: 'bold'
    },
    expense_date__year: {
      fontSize: '0.75rem',
    }
  }));

const ExpenseDate = (props) => {
    const classes = useStyles();
    
    return (
      <Paper elevation={3} className={classes.paper}>
        <div className={classes.expense_date__month}>{props.date.toLocaleString("en-GB", { month: "long" })}</div>
        <div className={classes.expense_date__year}>{props.date.getFullYear()}</div>
        <div className={classes.expense_date__day}>{props.date.toLocaleString("en-GB", { day: "2-digit" })}</div>
      </Paper>
    )    
}

export default ExpenseDate