import CircularProgress from '@material-ui/core/CircularProgress';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(_ => ({
  wrapper: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
  },
}));

const Loader = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <CircularProgress />
    </div>
  );
};

export default Loader;
