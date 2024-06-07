import React from 'react';
import { ListItem, ListItemText, Button, Avatar } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  listItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {
    marginRight: '10px',
  },
  button: {
    marginLeft: '10px',
  },
});

const BookItem = ({ book, onAdd, onRemove, inReadingList }) => {
  const classes = useStyles();

  return (
    <ListItem className={classes.listItem}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Avatar src={`/assets/${book.coverPhotoURL}`} className={classes.avatar} />
        <ListItemText primary={book.title} secondary={book.author} />
      </div>
      {inReadingList ? (
        <Button onClick={() => onRemove(book)} variant="contained" color="secondary" className={classes.button}>
          Remove
        </Button>
      ) : (
        <Button onClick={() => onAdd(book)} variant="contained" color="primary" className={classes.button}>
          Add
        </Button>
      )}
    </ListItem>
  );
};

export default BookItem;
