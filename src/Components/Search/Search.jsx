import {
  FormControl,
  FormHelperText,
  InputAdornment,
  makeStyles,
  OutlinedInput,
} from "@material-ui/core";

import clsx from "clsx";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "100%",
  },
}));

function Search(props) {
  const classes = useStyles();

  return (
    <div style={{ width: "100%" }}>
      <FormControl
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
      >
        <OutlinedInput
          id="outlined-adornment-weight"
          value={props.value}
          onChange={props.handleChange}
          endAdornment={<InputAdornment position="end">></InputAdornment>}
          aria-describedby="outlined-weight-helper-text"
          labelWidth={0}
        />
      </FormControl>
    </div>
  );
}

export default Search;
