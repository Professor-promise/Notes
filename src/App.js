import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Noteslist from './components/Noteslist';
import Search from './components/Search';
import { v4 as uuidv4 } from 'uuid';

import './App.css';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  &.darkmode {
    background: var(--darkBackground);

    h1 {
      color: var(--whiteBackground);
    }
    .content .toggle-icon {
      border: 0.125rem solid var(--whiteBackground);
      color: var(--whiteBackground);
    }
  }

  .contents {
    max-width: 60rem;
    padding: 1rem 1.5rem;
    margin: 0 auto;
  }
`;

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [notes, setNotes] = useState([
    {
      id: uuidv4(),
      title: 'This is my first note',
      date: '02/02/2022',
    },
    {
      id: uuidv4(),
      title: 'This is my Second note',
      date: '03/02/2022',
    },
    {
      id: uuidv4(),
      title: 'This is my fourth note',
      date: '03/02/2022',
    },
    {
      id: uuidv4(),
      title: 'This is my fifth note',
      date: '04/02/2022',
    },
    {
      id: uuidv4(),
      title: 'This is my sixth note',
      date: '02/02/2022',
    },
  ]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes-list-data'));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes-list-data', JSON.stringify(notes));
  }, [notes]);

  const addNotes = (title) => {
    const date = new Date();
    const newNote = {
      id: uuidv4(),
      title,
      date: date.toLocaleDateString(),
    };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    const updatedNote = notes.filter((note) => note.id !== id);
    setNotes(updatedNote);
  };

  return (
    <Container className={darkMode && 'darkmode'}>
      <div className="contents">
        <Header toogleDarkMode={setDarkMode} darkMode={darkMode} />
        <Search handleSearch={setSearchText} />
        <Noteslist
          notes={notes.filter((note) =>
            note.title.toLowerCase().includes(searchText.toLowerCase())
          )}
          addNotes={addNotes}
          handleDeleteNote={deleteNote}
        />
      </div>
    </Container>
  );
};

export default App;
