import React, { useState } from 'react';
import { MdSave } from 'react-icons/md';
import styled from 'styled-components';

const Container = styled.div`
  background: var(--greenBackground);
  padding: 1rem;
  border-radius: 0.7rem;

  textarea {
    width: 100%;
    background: none;
    resize: none;
  }
  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    .icon {
      font-size: 1.2rem;
      cursor: pointer;
      color: var(--darkBackground);

      &:hover {
        color: var(--yellowBackground);
      }
    }
  }
`;

const AddNote = ({ addNotes }) => {
  const [noteText, setNoteText] = useState('');
  const countLimit = 200;

  const handleChange = (e) => {
    if (countLimit - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      addNotes(noteText);
    }
    setNoteText('');
  };
  return (
    <Container>
      <textarea
        cols="8"
        rows="10"
        placeholder="Type to add a note..."
        onChange={handleChange}
        value={noteText}
      ></textarea>
      <div className="footer">
        <span>{countLimit - noteText.length} Remaining</span>
        <MdSave className="icon" onClick={handleSaveClick} />
      </div>
    </Container>
  );
};

export default AddNote;
