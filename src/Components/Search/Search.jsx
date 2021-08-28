import {
  FormControl,
  InputAdornment,
  makeStyles,
  OutlinedInput,
} from "@material-ui/core";

import clsx from "clsx";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    outline: "none",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "100%",
    backgroundColor: "#EEE5FF",
    outline: "none",
  },
  color: {
    color: "#8B50FF",
  },
  arrow: {
    color: "#8B50FF",
  },
}));

function Search(props) {
  const classes = useStyles();

  return (
    <div style={{ width: "95%" }}>
      <FormControl
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
      >
        <OutlinedInput
          value={props.value}
          onChange={props.handleChange}
          endAdornment={
            <InputAdornment className={classes.color} position="end">
              <h4 className={classes.arrow}>></h4>
            </InputAdornment>
          }
          // aria-describedby="outlined-weight-helper-text"
          labelWidth={0}
          placeholder="See your financial report"
        />
      </FormControl>
    </div>
  );
}

export default Search;
