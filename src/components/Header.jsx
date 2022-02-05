import React from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .header {
    background: var(--grayBackground);
    width: 100%;
    text-align: center;
    padding: 0.5rem;
    margin: 0 0 2rem 0;
    border-radius: 0.5rem;
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    .toggle-icon {
      border: 0.125rem solid var(--darkBackground);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.1rem;
      width: 2rem;
      height: 2rem;
      font-size: 1.2rem;
      border-radius: 0.2rem;
      color: var(--darkBackground);
      cursor: pointer;
    }
  }
`;

const Header = ({ toogleDarkMode, darkMode }) => {
  return (
    <Container>
      <div className="header">
        <h1>React App</h1>
      </div>
      <div className="content">
        <h1>Notes</h1>
        <div
          onClick={() => toogleDarkMode(!darkMode)}
          className="icon-container"
        >
          {darkMode ? (
            <MdLightMode className="toggle-icon" />
          ) : (
            <MdDarkMode className="toggle-icon" />
          )}
        </div>
      </div>
    </Container>
  );
};

export default Header;
