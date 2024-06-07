import React from 'react';
import { List } from '@mui/material';
import BookItem from './BookItem';

const BookList = ({ books, onAdd, onRemove, readingList }) => {
  return (
    <List>
      {books.map((book) => (
        <BookItem
          key={book.title}
          book={book}
          onAdd={onAdd}
          onRemove={onRemove}
          inReadingList={readingList.some((b) => b.title === book.title)}
        />
      ))}
    </List>
  );
};

export default BookList;
