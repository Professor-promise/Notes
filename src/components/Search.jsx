import React from 'react';
import { MdSearch } from 'react-icons/md';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  background: var(--grayBackground);
  font-size: 1.2rem;
  margin: 1rem 0;
  padding: 0.5rem;
  border-radius: 0.7rem;

  input {
    background: none;
    font-size: 1rem;
    width: 100%;
  }
`;

const Search = ({ handleSearch }) => {
  const handleSearchText = (e) => {
    handleSearch(e.target.value);
  };
  return (
    <Container>
      <MdSearch />
      <input
        type="text"
        placeholder="Type to search"
        onChange={handleSearchText}
      />
    </Container>
  );
};

export default Search;
