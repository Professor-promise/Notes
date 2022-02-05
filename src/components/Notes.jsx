import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import styled from 'styled-components';

const Container = styled.div`
  background: var(--yellowBackground);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 0.7rem;
  min-height: 11rem;
  white-space: pre-wrap;

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .icon {
      font-size: 1.2rem;
      cursor: pointer;
      color: var(--redBackground);
    }
  }
`;

const Notes = ({ id, title, date, handleDeleteNote }) => {
  return (
    <Container>
      <h4 className="title">{title}</h4>
      <div className="footer">
        <span>{date}</span>
        <MdDeleteForever
          className="icon"
          onClick={() => handleDeleteNote(id)}
        />
      </div>
    </Container>
  );
};

export default Notes;
