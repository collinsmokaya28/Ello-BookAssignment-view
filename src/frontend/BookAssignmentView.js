import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import SearchBar from './SearchBar';
import ReadingList from './ReadingList';
import BookItem from './BookItem';
import { styled } from '@mui/material/styles';

const GET_BOOKS = gql`
  query Books {
    books {
      author
      coverPhotoURL
      readingLevel
      title
    }
  }
`;

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  padding: '20px',
});

const BookGrid = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '20px',
  marginTop: '20px',
  width: '100%',
  maxWidth: '1200px',
});

const BookAssignmentView = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [readingList, setReadingList] = useState([]);

  const { loading, error, data } = useQuery(GET_BOOKS);

  console.log('Loading:', loading);
  console.log('Error:', error ? error.message : 'No Error');
  console.log('Data:', data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const filteredBooks = data.books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleAddBook = (book) => {
    setReadingList([...readingList, book]);
  };

  const handleRemoveBook = (book) => {
    setReadingList(readingList.filter((b) => b.title !== book.title));
  };

  return (
    <Container>
      <SearchBar onSearch={handleSearch} />
      <BookGrid>
        {filteredBooks.map((book) => (
          <BookItem
            key={`${book.title}-${book.author}`} // Ensure unique key
            book={book}
            onAdd={handleAddBook}
            onRemove={handleRemoveBook}
            inReadingList={readingList.some((b) => b.title === book.title)}
          />
        ))}
      </BookGrid>
      <ReadingList books={readingList} onRemove={handleRemoveBook} />
    </Container>
  );
};

export default BookAssignmentView;




