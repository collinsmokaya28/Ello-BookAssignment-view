import React from 'react';
import { List, Typography } from '@mui/material';
import BookItem from './BookItem';

const ReadingList = ({ books, onRemove }) => {
  return (
    <div>
      <Typography variant="h6">Reading List</Typography>
      <List>
        {books.map((book) => (
          <BookItem key={book.title} book={book} onRemove={onRemove} inReadingList />
        ))}
      </List>
    </div>
  );
};

export default ReadingList;
