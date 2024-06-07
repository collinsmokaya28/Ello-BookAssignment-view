import React from 'react';
import { List } from '@mui/material';
import BookItem from './BookItem';

const ReadingList = ({ books, onRemove }) => {
  return (
    <List>
      {books.map((book) => (
        <BookItem
          key={`${book.title}-${book.author}`} // Ensure unique key
          book={book}
          onRemove={onRemove}
          inReadingList={true}
        />
      ))}
    </List>
  );
};

export default ReadingList;
