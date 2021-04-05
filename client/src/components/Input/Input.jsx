import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import CircularProgress from '@material-ui/core/CircularProgress';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  input: {
    backgroundColor: '#F5F5F5',
  },
  inputAdornmentStart: {
    position: 'start',
    marginRight: 8,
  },
  inputAdornmentEnd: {
    position: 'end',
  },
}));

const Input = ({ isLoading, onChange, ...restProps }) => {
  const classes = useStyles();

  return (
    <OutlinedInput
      className={classes.input}
      startAdornment={<InputAdornment className={classes.inputAdornmentStart} />}
      value={12}
      endAdornment={
        <InputAdornment className={classes.inputAdornmentEnd}>
          {isLoading ? <CircularProgress size={25} /> : <b>b</b>}
        </InputAdornment>
      }
      onChange={onChange}
      {...restProps}
    />
  );
};

export default Input;
