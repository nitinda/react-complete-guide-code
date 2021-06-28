import {useState} from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import ExpenseDate from "./ExpenseDate";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#424242',
    maxWidth: '95%',
    maxHeight: '90%',
    width: '50rem',
    padding: '1rem',
    margin: 'auto'
  },
  button: {
    marginRight: "12px",
    padding: '10px',
  },
  typography: {
    backgroundColor: "#9e9e9e",
    // height: "14vh",
    borderRadius: "12px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  box_item__price: {
    flex: 1,
    fontSize: "1rem",
    gap: "1rem",
    flexDirection: "column",
    alignItems: "center",
    flexFlow: "column-reverse",
    justifyContent: "flex-start",
    fontWeight: "bold",
  },
  
}));

const ExpenseItem = (props) => {
  const classes = useStyles();
  const [title, setTitle] = useState(props.title)

  const clickHandler = () => {
    setTitle('Updted !!!')
    console.log(title)
  }
  return (
      <Container maxWidth={false} className={classes.container}>
        <Typography component="div" className={classes.typography}>
          <ExpenseDate date={props.date} />
          <Box component="div" className={classes.box_item__price}>
            {props.title}
          </Box>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            {props.amount}
          </Button>
        </Typography>
      </Container>
  );
}

export default ExpenseItem;
