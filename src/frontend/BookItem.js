import React from 'react';
import { ListItem, ListItemText, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const ListItemContainer = styled(ListItem)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  border: '1px solid #ccc',
  padding: '20px',
  borderRadius: '8px',
  position: 'relative',
  overflow: 'hidden',
  height: '300px', // Set a fixed height for the rectangle
  width: '100%',  // Ensure the width is 100% of the container
});

const ImageContainer = styled(Box)({
  width: '100%',
  height: '80%', // Adjust the height as needed
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  marginBottom: '10px',
});

const ContentContainer = styled('div')({
  width: '100%',
  textAlign: 'center',
});

const ButtonStyled = styled(Button)({
  marginTop: '10px',
});

const BookItem = ({ book, onAdd, onRemove, inReadingList }) => {
  return (
    <ListItemContainer>
      <ImageContainer style={{ backgroundImage: `url(${book.coverPhotoURL})` }} />
      <ContentContainer>
        <ListItemText primary={book.title} secondary={book.author} />
        {inReadingList ? (
          <ButtonStyled onClick={() => onRemove(book)} variant="contained" color="secondary">
            Remove
          </ButtonStyled>
        ) : (
          <ButtonStyled onClick={() => onAdd(book)} variant="contained" color="primary">
            Add
          </ButtonStyled>
        )}
      </ContentContainer>
    </ListItemContainer>
  );
};

export default BookItem;







