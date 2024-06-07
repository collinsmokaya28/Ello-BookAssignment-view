import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import SearchBar from './SearchBar';
import BookList from './BookList';
import ReadingList from './ReadingList';

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

const BookAssignmentView = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [readingList, setReadingList] = useState([]);

  const { loading, error, data } = useQuery(GET_BOOKS);

  console.log('Loading:', loading);
  console.log('Error:', error);
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
    <div>
      <SearchBar onSearch={handleSearch} />
      <BookList books={filteredBooks} onAdd={handleAddBook} onRemove={handleRemoveBook} readingList={readingList} />
      <ReadingList books={readingList} onRemove={handleRemoveBook} />
    </div>
  );
};

export default BookAssignmentView;
