import React, { useState, useEffect} from 'react';
import './App.css';
import Header from '../src/components/Header/Header';
import AddNote from '../src/components/AddNote/AddNote';
import NotesList from '../src/components/NotesList/NotesList';

const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes'));
    if (storedNotes) {
      setNotes(storedNotes);
    }
  }, []);

  const handleAddNote = (newNote) => {
    const updatedNotes = [newNote, ...notes];
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  const handleDeleteNote = (noteToDelete) => {
    const updatedNotes = notes.filter((note) => note.id !== noteToDelete.id);
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  return (
    <div>
      <Header />
      <AddNote onAdd={handleAddNote} />
      <NotesList notes={notes} onDelete={handleDeleteNote} />
    </div>
  );
};

export default App;