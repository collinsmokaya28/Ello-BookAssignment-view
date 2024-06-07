import React from 'react';
import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

const SearchContainer = styled('div')({
  width: '100%',
  maxWidth: '600px',
  marginBottom: '20px',
});

const SearchBar = ({ onSearch }) => {
  const handleChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <SearchContainer>
      <TextField
        label="Search for a book"
        variant="outlined"
        fullWidth
        onChange={handleChange}
      />
    </SearchContainer>
  );
};

export default SearchBar;

