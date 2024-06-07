import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    flexGrow: 1,
    marginRight: '10px',
  },
});

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const classes = useStyles();

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className={classes.root}>
      <TextField
        className={classes.input}
        label="Search Books"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button onClick={handleSearch} variant="contained" color="primary">
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
