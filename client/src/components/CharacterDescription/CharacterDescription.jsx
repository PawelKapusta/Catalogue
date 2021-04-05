import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import FaceIcon from '@material-ui/icons/Face';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import { capitalize, calculateAge } from '../../utils';
import InfoIcon from '@material-ui/icons/Info';
import Grid from '@material-ui/core/Grid';
import uuid from 'react-uuid';

const useStyles = makeStyles(theme => ({
  nested: {
    paddingLeft: theme.spacing(4),
    cursor: 'context-menu',
  },
  icon: {
    width: 40,
    height: 60,
  },
  birthYear: {
    position: 'absolute',
    right: 80,
    bottom: 25,
  },
  marginRight: {
    marginRight: 145,
  },
  flexAround: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  filmList: {
    display: 'grid',
    gridTemplateRows: 'repeat(3,auto)',
    gridGap: '10px',
    gridAutoFlow: 'column',
  },
}));

const defaultProps = {
  bgcolor: 'background.paper',
  borderColor: 'text.primary',
  marginBottom: 2,
  border: 1,
};

const CharacterDescription = ({ name, gender, birth_year, height, films, ...restProps }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box borderRadius="borderRadius" {...defaultProps}>
      <ListItem button onClick={handleClick} className={classes.root}>
        <ListItemIcon>
          <FaceIcon className={classes.icon} />
        </ListItemIcon>
        <ListItemText primary={name} secondary={`Gender: ${capitalize(gender)}`} />
        <ListItemText className={classes.birthYear} primary={`Birth date: ${birth_year}`} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <InfoIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText
              primary={`Age: ${calculateAge(birth_year)} years`}
              className={classes.marginRight}
            />
            <ListItemText primary={`Height: ${height} cm`} className={classes.marginRight} />
            <Grid container className={classes.marginRight}>
              <Grid item xs={6}>
                <ListItemText primary="Films:" className={classes.flexAround} />
                <List className={classes.filmList}>
                  {films.map(name => (
                    <ListItem key={uuid()}>"{name}"</ListItem>
                  ))}
                </List>
              </Grid>
            </Grid>
          </ListItem>
        </List>
      </Collapse>
    </Box>
  );
};

export default CharacterDescription;
