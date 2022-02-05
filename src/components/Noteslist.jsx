import React from 'react';
import styled from 'styled-components';
import Notes from './Notes';
import AddNote from './AddNote';

const Container = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
`;

const Noteslist = ({ notes, addNotes, handleDeleteNote }) => {
  return (
    <Container>
      <>
        {notes.map((note) => (
          <Notes
            key={note.id}
            id={note.id}
            title={note.title}
            date={note.date}
            handleDeleteNote={handleDeleteNote}
          />
        ))}
        <AddNote addNotes={addNotes} />
      </>
    </Container>
  );
};

export default Noteslist;
