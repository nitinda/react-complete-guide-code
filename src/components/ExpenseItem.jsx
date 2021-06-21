import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Box from '@material-ui/core/Box';
import './ExpenseItem.css'

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    marginRight: '12px'
  },
  typography: {
    backgroundColor: "#9e9e9e",
    height: '8vh',
    borderRadius: "6px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: '10px'
  },
  box_item__description : {
    // flex: 1,
    fontSize: '1rem',
    flexDirection: "column",
    gap: '1rem',
    alignItems: 'flex-end',
    flexFlow: 'column-reverse',
    justifyContent: "flex-start",
    marginRight: '10px',
    marginLeft: '12px'
  },
  box_item__price : {
    flex: 1,
    fontSize: '1rem',
    gap: '1rem',
    flexDirection: "column",
    alignItems: 'flex-end',
    flexFlow: 'column-reverse',
    justifyContent: "flex-start",
    fontWeight: 'bold'
  },
}));


function ExpenseItem() {
  const classes = useStyles();
  return (
    // <div className="expense-item">
    //   <div>March 28th 2021</div>
    //   <div className="expense-item__description">
    //     <h2>Car Insurance</h2>
    //     <div className="expense-item__price">$294.67</div>
    //   </div>
    // </div>
    <div className={classes.root}>
      <Container maxWidth={false}>
        <Typography component="div" className={classes.typography}>
          <Box component="div" className={classes.box_item__description}>March 23th 2021</Box>
          <Box component="div" className={classes.box_item__price}>Car Insurance</Box>
          {/* <Box component="span" className={classes.box}>March 23th 2021</Box> */}
          <Button variant="contained" color="primary" className={classes.button}>Login</Button>
        </Typography>
      </Container>
    </div>
  );
}

export default ExpenseItem;
