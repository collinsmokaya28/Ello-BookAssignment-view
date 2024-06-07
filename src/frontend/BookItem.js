import React from 'react';
import { ListItem, ListItemText, Button, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';

const ListItemContainer = styled(ListItem)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const AvatarStyled = styled(Avatar)({
  marginRight: '10px',
});

const ButtonStyled = styled(Button)({
  marginLeft: '10px',
});

const BookItem = ({ book, onAdd, onRemove, inReadingList }) => {
  return (
    <ListItemContainer>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <AvatarStyled src={book.coverPhotoURL} />
        <ListItemText primary={book.title} secondary={book.author} />
      </div>
      {inReadingList ? (
        <ButtonStyled onClick={() => onRemove(book)} variant="contained" color="secondary">
          Remove
        </ButtonStyled>
      ) : (
        <ButtonStyled onClick={() => onAdd(book)} variant="contained" color="primary">
          Add
        </ButtonStyled>
      )}
    </ListItemContainer>
  );
};

export default BookItem;



